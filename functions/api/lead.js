import { verifyTurnstile } from "../_lib/turnstile.js";
import { sendEmail, extractEmailError } from "../_lib/email.js";
import { saveLeadBackup } from "../_lib/lead-backup.js";
import { jsonResponse, optionsResponse } from "../_lib/response.js";

function isEmail(value) {
  const email = String(value || "").trim();
  if (!email) return false;
  if (email.length > 254) return false;
  const parts = email.split("@");
  if (parts.length !== 2) return false;
  if (!parts[0] || !parts[1]) return false;
  if (parts[0].length > 64) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function onRequestOptions(context) {
  return optionsResponse(context.request);
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return jsonResponse(415, { ok: false, error: "invalid_content_type" }, request);
  }

  let data = {};
  try {
    data = await request.json();
  } catch (err) {
    return jsonResponse(400, { ok: false, error: "invalid_json" }, request);
  }

  const token = String(data.turnstileToken || "").trim();
  if (!token) return jsonResponse(400, { ok: false, error: "missing_turnstile_token" }, request);

  const name = String(data.name || "").trim();
  const company = String(data.company || "").trim();
  const email = String(data.email || "").trim();
  const rgpd = data.rgpd === true || data.rgpd === "true" || data.rgpd === "on";

  if (!email) return jsonResponse(400, { ok: false, error: "missing_email" }, request);
  if (!isEmail(email)) return jsonResponse(400, { ok: false, error: "invalid_email_format" }, request);

  if (!name || !company || !rgpd) {
    return jsonResponse(400, { ok: false, error: "validation_failed" }, request);
  }

  const remoteip = request.headers.get("CF-Connecting-IP") || "";

  let turnstileResult;
  try {
    turnstileResult = await verifyTurnstile(env, token, remoteip);
  } catch (err) {
    return jsonResponse(502, { ok: false, error: "turnstile_unavailable", message: err.message }, request);
  }

  if (!turnstileResult.success) {
    return jsonResponse(403, { ok: false, error: "turnstile_failed", codes: turnstileResult.codes }, request);
  }

  const backupPayload = {
    name,
    company,
    email,
    phone: data.phone,
    area: data.area,
    date: data.date,
    message: data.message,
    rgpd
  };

  try {
    await saveLeadBackup(env, request, "lead", backupPayload);
  } catch (err) {
    console.error("[lead] backup_failed", {
      error: err?.message || "unknown_backup_error",
      stack: err?.stack || null
    });
  }

  try {
    await sendEmail(env, "MC8 - Solicitud de informacion", [
      { label: "Tipo", value: "Solicitar informacion" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Email", value: email },
      { label: "Telefono", value: data.phone },
      { label: "m2 aproximados", value: data.area },
      { label: "Fecha objetivo", value: data.date },
      { label: "Mensaje", value: data.message },
      { label: "RGPD", value: rgpd ? "Si" : "No" },
      { label: "Fecha envio", value: new Date().toISOString() }
    ]);
  } catch (err) {
    const emailError = extractEmailError(err);
    const providerStatus = emailError.status ?? "unknown_status";
    const providerBody = String(emailError.body || emailError.message || "unknown_email_error").trim();
    const failureMessage = `${providerStatus}: ${providerBody}`;
    console.error("[lead] email_failed", {
      provider: emailError.provider,
      status: emailError.status,
      body: emailError.body,
      message: emailError.message,
      stack: err?.stack || null
    });
    return jsonResponse(500, { ok: false, error: "send_failed", message: failureMessage }, request);
  }

  return jsonResponse(200, { ok: true }, request);
}
