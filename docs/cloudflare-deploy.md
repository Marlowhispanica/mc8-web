# Cloudflare Pages Deploy (pages.dev)

## 1) Crear el proyecto
1. Sube este repo a GitHub.
2. En Cloudflare Pages crea un nuevo proyecto desde el repo.

## 2) Configuración de build
- Framework preset: `None`
- Build command: *(vacío)*
- Output directory: `/`

## 3) Variables de entorno (Pages > Settings > Environment variables)
Obligatorias:
- `TURNSTILE_SECRET`

Recomendadas:
- `MAIL_TO` = `mariano.ibanez@marlowhispanica.es`
- `MAIL_FROM` = `no-reply@mc8malaga.com`
- `MAIL_FROM_NAME` = `MC8 Málaga TechPark`
- `MAIL_REPLY_TO` = `mariano.ibanez@marlowhispanica.es`

Opcional:
- `MAILCHANNELS_API_KEY` (solo si tu cuenta MailChannels lo requiere)

## 4) Turnstile (anti-spam)
1. Crea un widget Turnstile en Cloudflare.
2. **Dominios permitidos ahora (provisional)**:
   - `<NOMBRE_PROYECTO>.pages.dev`
3. **Dominios a añadir más adelante**:
   - `mc8malaga.com`
   - `www.mc8malaga.com`
4. Pega el **site key** en `main.js`:
   - `const TURNSTILE_SITE_KEY = "YOUR_TURNSTILE_SITE_KEY";`

El secret se configura en `TURNSTILE_SECRET` (paso 3).

## 5) Probar endpoints
Una vez desplegado:
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/lead`
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/visit`
- `POST https://<NOMBRE_PROYECTO>.pages.dev/api/plans`

Verifica que los formularios envían y que llega el email a `mariano.ibanez@marlowhispanica.es`.

## 6) Conectar dominio cuando esté listo
Cuando el dominio esté disponible:
1. En Pages > Custom domains añade:
   - `mc8malaga.com`
   - `www.mc8malaga.com`
2. **Importante**: asocia primero el dominio en Pages antes de tocar DNS para evitar errores.
3. Añade estos dominios también al widget Turnstile.

## Nota de entregabilidad (MailChannels)
Si se usa MailChannels, el dominio del `MAIL_FROM` puede requerir autorización vía DNS (Domain Lockdown TXT) cuando el dominio esté bajo DNS de Cloudflare.
