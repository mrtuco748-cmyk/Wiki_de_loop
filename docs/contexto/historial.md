# Historial — Wiki_de_loop

## [2026-09-10 13:05] - FIX | Totalmente automático + upsert con ids
**Resumen:** Fix cloning (30/20 duplicados) y guardado (solo tramas) → upsert con ids + polling
**Cambios:**
- `index.html:2208` `ensureIds()` + `sLoad` migra ids, `render*` guarda `dataset.id`, `_read*` lee id, `add*` genera `crypto.randomUUID`, `mappers` incluyen `id`, `sSave` debounced 400ms hace `POST ... Prefer: resolution=merge-duplicates` + borra solo ids eliminados (evita DELETE all)
- `sbFetch` direct-only (sin proxy, Vercel ENOTFOUND IPv6 + Opera bloquea proxy), `attachAutoSave` en `input` 600ms + `focusout`, `pollOnce` cada 3s con check `_saveTimers` y `contenteditable:focus` para no pisar, `visibilitychange` y `testSync` sin botones manuales (`367ab6c`)
- Supabase limpio a defaults: `historia 3, tramas 2, ideas 2, clanes 2, tecnicas 2` verificado `GET 200`
- Vercel deploy `367ab6c` verificado `●` indicador solo, sin `↻/↺`
**Lecciones:** DELETE all + POST sin id estable causa clones; polling sin guardar timers pisa edición; Opera GX requiere direct con Kong CORS, no proxy Vercel.
**Impacto:** CRUD totalmente automático en vivo (agregar/editar/borrar → Supabase → otro dispositivo en 3-4s), sin botones, sin clones.
**Relacionado:** decisiones.md D-8, arquitectura.md, errores-conocidos.md

## [2026-09-10 12:50] - FIX | Sync direct-first + Opera GX investigación
**Resumen:** Investigación caso específico: Opera GX adblock + Vercel ENOTFOUND IPv6
**Cambios:**
- `index.html:2211` `sbFetch` invertido a direct-first (browser→Supabase Kong gateway) + proxy fallback; debounced `sSave` 400ms + `setSyncStatus` visible; diagnóstico `Failed to fetch` → mensaje adblock
- Verificados vía websearch: GuardLayer 2026-07-17 (CORS falso por env/401), Vercel community ENOTFOUND por IPv6-only Supabase free (sin IPv4 add-on), Opera GX adblock nativo bloquea `*.supabase.co` (WebProNews 2025-11-10)
- Proxy `hkvwcze` verificado GET 200 (3 filas), direct GET 200 (3 filas) tras migración
**Lecciones:** Vercel Functions no soporta IPv6 (requiere IPv4 add-on o direct browser), Opera GX requiere desactivar escudo/adblock para `supabase.co`, `Access-Control-Allow-Origin` ya lo pone Kong gateway.
**Impacto:** Sync robusto cross-device, indicador `● Sync OK` / `✕ Sync FAIL` en UI, `forceSyncAll()` expuesto.
**Relacionado:** api/sync.js:1, docs/contexto/arquitectura.md, errores-conocidos.md

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
