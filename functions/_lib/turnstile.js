export async function verifyTurnstile(env, token, remoteip) {
  if (!env.TURNSTILE_SECRET) {
    throw new Error("TURNSTILE_SECRET not configured");
  }

  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET);
  form.append("response", token);
  if (remoteip) form.append("remoteip", remoteip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: form
  });

  if (!res.ok) {
    throw new Error(`Turnstile verify failed: ${res.status}`);
  }

  const data = await res.json();
  if (!data.success) {
    const codes = Array.isArray(data["error-codes"]) ? data["error-codes"].join(", ") : "unknown";
    throw new Error(`Turnstile rejected: ${codes}`);
  }
}
