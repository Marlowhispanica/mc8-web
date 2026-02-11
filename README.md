# MC8 Forms + Cloudflare Pages Functions

This site uses Cloudflare Pages Functions to process forms and send emails with Turnstile protection.

## Quick links
- Deploy guide: `docs/cloudflare-deploy.md`

## Endpoints
- `POST /api/lead` (Solicitar información)
- `POST /api/visit` (Agendar visita)
- `POST /api/plans` (Planos a medida)

## Turnstile
- Single site key location: `main.js` → `TURNSTILE_SITE_KEY`
- Widgets are rendered in the 3 forms and injected via JS at runtime.

## Final verification checklist
1. `TURNSTILE_SITE_KEY` actualizado en `main.js`.
2. Variables de entorno definidas en Pages.
3. Formularios envían correctamente y llega email a `mariano.ibanez@marlowhispanica.es`.
4. Endpoints `/api/lead`, `/api/visit`, `/api/plans` responden `200`.
