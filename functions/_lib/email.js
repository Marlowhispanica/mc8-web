function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldLine(label, value) {
  const safeValue = value ? String(value).trim() : "-";
  return `${label}: ${safeValue}`;
}

function fieldHtml(label, value) {
  const safeValue = value ? String(value).trim() : "-";
  return `<tr><td style="padding:4px 10px 4px 0; font-weight:600;">${escapeHtml(label)}</td><td>${escapeHtml(safeValue)}</td></tr>`;
}

export async function sendEmail(env, subject, fields) {
  const toEmail = env.MAIL_TO || "mariano.ibanez@marlowhispanica.es";
  const fromEmail = env.MAIL_FROM || "no-reply@mc8malaga.com";
  const fromName = env.MAIL_FROM_NAME || "MC8 Web";
  const replyTo = env.MAIL_REPLY_TO || toEmail;

  const text = fields.map((f) => fieldLine(f.label, f.value)).join("\n");
  const htmlRows = fields.map((f) => fieldHtml(f.label, f.value)).join("");

  const payload = {
    personalizations: [{ to: [{ email: toEmail }], subject }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email: replyTo },
    content: [
      { type: "text/plain", value: text },
      {
        type: "text/html",
        value: `<table style="font-family:Arial, sans-serif; font-size:14px; border-collapse:collapse;">${htmlRows}</table>`
      }
    ]
  };

  const headers = { "content-type": "application/json" };
  if (env.MAILCHANNELS_API_KEY) {
    headers.Authorization = `Bearer ${env.MAILCHANNELS_API_KEY}`;
  }

  const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Mail send failed: ${res.status} ${body}`);
  }
}
