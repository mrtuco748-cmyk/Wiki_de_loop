# Historial — Wiki_de_loop

## [2026-09-10 12:40] - FEATURE | Supabase offline-first sync
**Resumen:** Integración Supabase hkvwczecoeqmgrqpyxme + Vercel + sync automático
**Cambios:**
- Creadas 9 tablas `supabase/migrations/001_wiki_loop.sql` y ejecutadas en nuevo proyecto
- `api/sync.js` proxy Vercel lee env vars integración Supabase, fallback hardcoded
- `index.html:2206` `sbFetch` con proxy→direct fallback, auto-save contenteditable, auto-push si nube vacía, verified `tramas` insert 200
- Migración proyecto viejo ekabsuqctklmbnpefowc (ENOTFOUND) → hkvwczecoeqmgrqpyxme, anon key actualizada
- `.env.local` y `supabase/client.js` actualizados, `migrate-localStorage.html` para migración one-click
- Deploy https://wiki-de-loop.vercel.app verificado
**Lecciones:** Opera GX bloquea supabase.co, CDN supabase-js falla, contenteditable debe disparar sSave, DNS ENOTFOUND indica proyecto borrado.
**Impacto:** Datos persisten cross-device, visual sigue como dolor pendiente.
**Relacionado:** decisiones.md D-2, D-6, D-7; arquitectura.md; errores-conocidos.md

## [2026-09-10] - DISCOVERY
**Resumen:** Inicialización OpenCode v2.0 + documentación de contexto
**Cambios:** Generados 8 docs en docs/contexto, AGENTS.md y opencode.json. Análisis de index.html (2207 líneas).
**Lecciones:** Proyecto vanilla single-file, necesita modularización y backup antes de escalar.
**Impacto:** Base para trabajo incremental con protocolo OpenCode.
