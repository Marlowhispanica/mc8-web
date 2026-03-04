import { verifyTurnstile } from "../_lib/turnstile.js";
import { sendEmail } from "../_lib/email.js";
import { jsonResponse } from "../_lib/response.js";

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

  const name = String(data.name || "").trim();
  const company = String(data.company || "").trim();
  const email = String(data.email || "").trim();
  const rgpd = data.rgpd === true || data.rgpd === "true" || data.rgpd === "on";

  if (!email) return jsonResponse(400, { ok: false, error: "Missing email" });
  if (!isEmail(email)) return jsonResponse(400, { ok: false, error: "Invalid email format" });

  if (!name || !company || !rgpd) {
    return jsonResponse(400, { ok: false, error: "Validation failed" });
  }

  const remoteip = request.headers.get("CF-Connecting-IP") || "";

  try {
    await verifyTurnstile(env, token, remoteip);
    await sendEmail(env, "MC8 · Solicitud de información", [
      { label: "Tipo", value: "Solicitar información" },
      { label: "Nombre", value: name },
      { label: "Empresa", value: company },
      { label: "Email", value: email },
      { label: "Teléfono", value: data.phone },
      { label: "m2 aproximados", value: data.area },
      { label: "Fecha objetivo", value: data.date },
      { label: "Mensaje", value: data.message },
      { label: "RGPD", value: rgpd ? "Sí" : "No" },
      { label: "Fecha envío", value: new Date().toISOString() }
    ]);
  } catch (err) {
    return jsonResponse(500, { ok: false, error: "Send failed" });
  }

  return jsonResponse(200, { ok: true });
}

