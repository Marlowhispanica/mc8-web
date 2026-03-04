const CREATE_LEADS_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL,
  created_at TEXT NOT NULL,
  ip TEXT,
  user_agent TEXT,
  payload_json TEXT NOT NULL
);
`;

function buildBackupEnvelope(type, payload, request) {
  return {
    id: crypto.randomUUID(),
    type,
    timestamp: new Date().toISOString(),
    ip: request.headers.get("CF-Connecting-IP") || "",
    userAgent: request.headers.get("user-agent") || "",
    payload
  };
}

async function saveToD1(env, backup) {
  await env.D1_DATABASE.exec(CREATE_LEADS_TABLE_SQL);
  await env.D1_DATABASE
    .prepare(
      "INSERT INTO leads (id, type, created_at, ip, user_agent, payload_json) VALUES (?1, ?2, ?3, ?4, ?5, ?6)"
    )
    .bind(
      backup.id,
      backup.type,
      backup.timestamp,
      backup.ip,
      backup.userAgent,
      JSON.stringify(backup.payload)
    )
    .run();

  return { backend: "d1", id: backup.id };
}

async function saveToKV(env, backup) {
  const key = `leads:${backup.type}:${backup.timestamp}:${backup.id}`;
  await env.LEADS_KV.put(key, JSON.stringify(backup));
  return { backend: "kv", id: backup.id, key };
}

export async function saveLeadBackup(env, request, type, payload) {
  const backup = buildBackupEnvelope(type, payload, request);

  if (env.D1_DATABASE) {
    return saveToD1(env, backup);
  }

  if (env.LEADS_KV && typeof env.LEADS_KV.put === "function") {
    return saveToKV(env, backup);
  }

  return { backend: null, id: backup.id };
}
