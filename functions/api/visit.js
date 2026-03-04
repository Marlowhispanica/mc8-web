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

  const name = String(data.visit_name || "").trim();
  const company = String(data.visit_company || "").trim();
  const email = String(data.visit_email || "").trim();
  const date = String(data.visit_date || "").trim();
  const time = String(data.visit_time || "").trim();

  if (!email) return jsonResponse(400, { ok: false, error: "missing_email" }, request);
  if (!isEmail(email)) return jsonResponse(400, { ok: false, error: "invalid_email_format" }, request);

  if (!name || !company || !date || !time) {
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
    visit_name: name,
    visit_company: company,
    visit_email: email,
    visit_phone: data.visit_phone,
    visit_date: date,
    visit_time: time,
    visit_notes: data.visit_notes
  };

  try {
    await saveLeadBackup(env, request, "visit", backupPayload);
  } catch (err) {
    console.error("[visit] backup_failed", {
      error: err?.message || "unknown_backup_error",
      stack: err?.stack || null
    });
  }

  try {
    await sendEmail(env, "MC8 - Solicitud de visita", [
      { label: "Tipo", value: "Agendar visita" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Email", value: email },
      { label: "Telefono", value: data.visit_phone },
      { label: "Fecha preferida", value: date },
      { label: "Franja horaria", value: time },
      { label: "Notas", value: data.visit_notes },
      { label: "Fecha envio", value: new Date().toISOString() }
    ]);
  } catch (err) {
    const emailError = extractEmailError(err);
    const providerStatus = emailError.status ?? "unknown_status";
    const providerBody = String(emailError.body || emailError.message || "unknown_email_error").trim();
    const failureMessage = `${providerStatus}: ${providerBody}`;
    console.error("[visit] email_failed", {
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
