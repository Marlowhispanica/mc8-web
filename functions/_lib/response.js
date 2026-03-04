function buildCorsHeaders(request) {
  const origin = request?.headers?.get("origin");
  return {
    "access-control-allow-origin": origin || "*",
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "Content-Type, Accept",
    "access-control-max-age": "86400",
    vary: "Origin"
  };
}

export function jsonResponse(status, payload, request) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
      ...buildCorsHeaders(request)
    }
  });
}

export function optionsResponse(request) {
  return new Response(null, {
    status: 204,
    headers: buildCorsHeaders(request)
  });
}
