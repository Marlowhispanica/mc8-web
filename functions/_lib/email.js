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

export class EmailProviderError extends Error {
  constructor({ provider, status, body, message }) {
    super(message || "Email provider error");
    this.name = "EmailProviderError";
    this.provider = provider || "unknown";
    this.status = Number.isInteger(status) ? status : null;
    this.body = body || "";
  }
}

function buildProviderError(provider, status, body) {
  const cleanBody = String(body || "").trim();
  const preview = cleanBody.length > 500 ? `${cleanBody.slice(0, 500)}...` : cleanBody;
  return new EmailProviderError({
    provider,
    status,
    body: cleanBody,
    message: `${provider} send failed (status=${status}, body=${preview || "-"})`
  });
}

function toTextAndHtml(fields) {
  return {
    text: fields.map((f) => fieldLine(f.label, f.value)).join("\n"),
    html: `<table style="font-family:Arial, sans-serif; font-size:14px; border-collapse:collapse;">${fields
      .map((f) => fieldHtml(f.label, f.value))
      .join("")}</table>`
  };
}

async function sendWithMailChannels(env, subject, toEmail, fromEmail, fromName, replyTo, text, html) {
  const payload = {
    personalizations: [{ to: [{ email: toEmail }], subject }],
    from: { email: fromEmail, name: fromName },
    reply_to: { email: replyTo },
    content: [
      { type: "text/plain", value: text },
      { type: "text/html", value: html }
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
    throw buildProviderError("mailchannels", res.status, body);
  }
}

async function sendWithResend(env, subject, toEmail, fromEmail, fromName, replyTo, text, html) {
  const resendFrom = env.RESEND_FROM || `${fromName} <${fromEmail}>`;
  const payload = {
    from: resendFrom,
    to: [toEmail],
    subject,
    text,
    html,
    reply_to: replyTo
  };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const body = await res.text();
    throw buildProviderError("resend", res.status, body);
  }
}

export async function sendEmail(env, subject, fields) {
  const toEmail = env.MAIL_TO || "mariano.ibanez@marlowhispanica.es";
  const fromEmail = env.MAIL_FROM || "no-reply@mc8malaga.com";
  const fromName = env.MAIL_FROM_NAME || "MC8 Web";
  const replyTo = env.MAIL_REPLY_TO || toEmail;
  const provider = String(env.MAIL_PROVIDER || "").trim().toLowerCase();
  const resolvedProvider = provider || (env.RESEND_API_KEY ? "resend" : "mailchannels");
  const { text, html } = toTextAndHtml(fields);

  if (resolvedProvider === "resend") {
    if (!env.RESEND_API_KEY) {
      throw new EmailProviderError({
        provider: "resend",
        status: null,
        body: "",
        message: "resend not configured: missing RESEND_API_KEY"
      });
    }
    await sendWithResend(env, subject, toEmail, fromEmail, fromName, replyTo, text, html);
    return;
  }

  if (resolvedProvider !== "mailchannels") {
    throw new EmailProviderError({
      provider: resolvedProvider,
      status: null,
      body: "",
      message: `unsupported MAIL_PROVIDER: ${resolvedProvider}`
    });
  }

  await sendWithMailChannels(env, subject, toEmail, fromEmail, fromName, replyTo, text, html);
}

export function extractEmailError(err) {
  if (err instanceof EmailProviderError) {
    return {
      provider: err.provider,
      status: err.status,
      body: err.body,
      message: err.message
    };
  }

  return {
    provider: "unknown",
    status: null,
    body: "",
    message: err?.message || "unknown_email_error"
  };
}
