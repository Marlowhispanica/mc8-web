import { verifyTurnstile } from "../_lib/turnstile.js";
import { sendEmail } from "../_lib/email.js";
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

  const name = String(data.plans_name || "").trim();
  const company = String(data.plans_company || "").trim();
  const role = String(data.plans_role || "").trim();
  const employees = String(data.plans_employees || "").trim();
  const email = String(data.plans_email || "").trim();
  const typology = String(data.plans_typology || "").trim();
  const rgpd = data.plans_rgpd === true || data.plans_rgpd === "true" || data.plans_rgpd === "on";

  if (!email) return jsonResponse(400, { ok: false, error: "missing_email" }, request);
  if (!isEmail(email)) return jsonResponse(400, { ok: false, error: "invalid_email_format" }, request);

  if (!name || !company || !role || !employees || !typology || !rgpd) {
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

  try {
    await sendEmail(env, "MC8 - Solicitud de planos a medida", [
      { label: "Tipo", value: "Planos a medida" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Cargo", value: role },
      { label: "N trabajadores", value: employees },
      { label: "Email", value: email },
      { label: "Telefono", value: data.plans_phone },
      { label: "m2 aproximados", value: data.plans_area },
      { label: "Fecha objetivo", value: data.plans_date },
      { label: "Tipologia", value: typology },
      { label: "Necesidades", value: data.plans_needs },
      { label: "RGPD", value: rgpd ? "Si" : "No" },
      { label: "Fecha envio", value: new Date().toISOString() }
    ]);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: "send_failed", message: err.message }, request);
  }

  return jsonResponse(200, { ok: true }, request);
}
