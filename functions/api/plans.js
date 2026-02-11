import { verifyTurnstile } from "../_lib/turnstile.js";
import { sendEmail } from "../_lib/email.js";
import { jsonResponse } from "../_lib/response.js";

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return jsonResponse(415, { ok: false, error: "Invalid content type" });
  }

  let data = {};
  try {
    data = await request.json();
  } catch (err) {
    return jsonResponse(400, { ok: false, error: "Invalid JSON" });
  }

  const token = String(data.turnstileToken || "").trim();
  if (!token) return jsonResponse(400, { ok: false, error: "Missing turnstile token" });

  const name = String(data.plans_name || "").trim();
  const company = String(data.plans_company || "").trim();
  const role = String(data.plans_role || "").trim();
  const employees = String(data.plans_employees || "").trim();
  const email = String(data.plans_email || "").trim();
  const typology = String(data.plans_typology || "").trim();
  const rgpd = data.plans_rgpd === true || data.plans_rgpd === "true" || data.plans_rgpd === "on";

  if (!name || !company || !role || !employees || !email || !isEmail(email) || !typology || !rgpd) {
    return jsonResponse(400, { ok: false, error: "Validation failed" });
  }

  const remoteip = request.headers.get("CF-Connecting-IP") || "";

  try {
    await verifyTurnstile(env, token, remoteip);
    await sendEmail(env, "MC8 · Solicitud de planos a medida", [
      { label: "Tipo", value: "Planos a medida" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Cargo", value: role },
      { label: "Nº trabajadores", value: employees },
      { label: "Email", value: email },
      { label: "Teléfono", value: data.plans_phone },
      { label: "m2 aproximados", value: data.plans_area },
      { label: "Fecha objetivo", value: data.plans_date },
      { label: "Tipología", value: typology },
      { label: "Necesidades", value: data.plans_needs },
      { label: "RGPD", value: rgpd ? "Sí" : "No" },
      { label: "Fecha envío", value: new Date().toISOString() }
    ]);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: "Send failed" });
  }

  return jsonResponse(200, { ok: true });
}
