# Cloudflare Pages Deploy (pages.dev)

## 1) Crear el proyecto
1. Sube este repo a GitHub.
2. En Cloudflare Pages crea un nuevo proyecto desde el repo.

## 2) Configuracion de build
- Framework preset: `None`
- Build command: *(vacio)*
- Output directory: `/`

## 3) Variables de entorno (Pages > Settings > Environment variables)
Obligatorias:
- `TURNSTILE_SECRET_KEY`

Recomendadas:
- `MAIL_TO` = `mariano.ibanez@marlowhispanica.es`
- `MAIL_FROM` = `no-reply@mc8malaga.com`
- `MAIL_FROM_NAME` = `MC8 Malaga TechPark`
- `MAIL_REPLY_TO` = `mariano.ibanez@marlowhispanica.es`

Opcional (email provider):
- `MAIL_PROVIDER` = `mailchannels` | `resend`
- `MAILCHANNELS_API_KEY` (si MailChannels lo requiere)
- `RESEND_API_KEY` (si usas Resend)
- `RESEND_FROM` (si usas Resend; fallback: `MAIL_FROM`)

## 4) Turnstile (anti-spam)
1. Crea un widget Turnstile en Cloudflare.
2. Dominios permitidos ahora (provisional):
   - `<NOMBRE_PROYECTO>.pages.dev`
3. Dominios a anadir mas adelante:
   - `mc8malaga.com`
   - `www.mc8malaga.com`
4. Pega el site key en `main.js`:
   - `const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";`

El secret se configura en `TURNSTILE_SECRET_KEY` (paso 3).
Compatibilidad: tambien se acepta `TURNSTILE_SECRET` como fallback.

## 5) Probar endpoints
Una vez desplegado:
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/lead`
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/visit`
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/plans`

Verifica que los formularios envian y que llega el email a `mariano.ibanez@marlowhispanica.es`.

## 6) Conectar dominio cuando este listo
Cuando el dominio este disponible:
1. En Pages > Custom domains anade:
   - `mc8malaga.com`
   - `www.mc8malaga.com`
2. Importante: asocia primero el dominio en Pages antes de tocar DNS para evitar errores.
3. Anade estos dominios tambien al widget Turnstile.

## 7) Backup de leads (D1 o KV)
El backend intenta guardar cada lead validado (payload correcto + Turnstile OK) antes del envio de email:

1. Si existe binding `D1_DATABASE`, guarda en tabla `leads`.
2. Si no hay D1 y existe binding `LEADS_KV`, guarda JSON en KV.
3. Si no hay ninguno, solo queda en logs (sin persistencia de backup).

### D1 (recomendado)
1. Crea una base D1 en Cloudflare.
2. Anade binding en Pages Functions:
   - `D1_DATABASE` (tipo D1)
3. Ejecuta la migracion SQL:
   - archivo: `docs/leads-d1.sql`

### KV (fallback)
1. Crea un namespace KV.
2. Anade binding en Pages Functions:
   - `LEADS_KV` (tipo KV Namespace)

## Nota de entregabilidad (MailChannels)
Si se usa MailChannels, el dominio del `MAIL_FROM` puede requerir autorizacion via DNS (Domain Lockdown TXT) cuando el dominio este bajo DNS de Cloudflare.
