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

  const name = String(data.visit_name || "").trim();
  const company = String(data.visit_company || "").trim();
  const email = String(data.visit_email || "").trim();
  const date = String(data.visit_date || "").trim();
  const time = String(data.visit_time || "").trim();

  if (!name || !company || !email || !isEmail(email) || !date || !time) {
    return jsonResponse(400, { ok: false, error: "Validation failed" });
  }

  const remoteip = request.headers.get("CF-Connecting-IP") || "";

  try {
    await verifyTurnstile(env, token, remoteip);
    await sendEmail(env, "MC8 · Solicitud de visita", [
      { label: "Tipo", value: "Agendar visita" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Email", value: email },
      { label: "Teléfono", value: data.visit_phone },
      { label: "Fecha preferida", value: date },
      { label: "Franja horaria", value: time },
      { label: "Notas", value: data.visit_notes },
      { label: "Fecha envío", value: new Date().toISOString() }
    ]);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: "Send failed" });
  }

  return jsonResponse(200, { ok: true });
}
