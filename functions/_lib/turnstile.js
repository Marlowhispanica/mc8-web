export async function verifyTurnstile(env, token, remoteip) {
  const secret = env.TURNSTILE_SECRET_KEY || env.TURNSTILE_SECRET;
  if (!secret) {
    throw new Error("TURNSTILE_SECRET_KEY not configured");
  }

  const form = new FormData();
  form.append("secret", secret);
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
  return {
    success: data.success === true,
    codes: Array.isArray(data["error-codes"]) ? data["error-codes"] : []
  };
}
