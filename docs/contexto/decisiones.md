# Decisiones — Wiki_de_loop

### D-1: Single-file vanilla (sin framework/build)
- **Fecha:** 2026-09-10 (heredado)
- **Qué:** Toda la app en `index.html` con CSS/JS inline.
- **Por qué:** Portabilidad, cero setup, ideal para prototipo worldbuilding.
- **Alternativas:** React+Vite (overkill inicial), Notion/Obsidian (menos custom).
- **Impacto:** Fácil de compartir, difícil de escalar.
- **Revisable:** Sí. Migrar a Vite cuando supere 3k LOC.

### D-2: Offline-first localStorage + Supabase sync
- **Fecha:** 2026-09-10 → Actualizado 2026-09-10
- **Qué:** `sSave/sLoad` + Supabase 9 tablas + `api/sync.js` proxy + auto-save contenteditable + auto-push si nube vacía (`index.html:2206`).
- **Por qué:** Datos locales inmediatos + nube compartida entre dispositivos (Opera GX bloquea supabase.co directo, proxy lo evita). Proyecto nuevo hkvwczecoeqmgrqpyxme.
- **Alternativas:** Solo localStorage (datos aislados por dispositivo), Firebase.
- **Impacto:** Sync OK verificado `api/sync?table=tramas` 200. RLS `public all` para prototipo.
- **Revisable:** Sí. Añadir auth y RLS por usuario.

### D-3: Canvas 2D para árbol de habilidades
- **Fecha:** 2026-09-10
- **Qué:** `skillCanvas` dibujado manualmente con `arc` + líneas.
- **Por qué:** Control visual total, estilo fantasy.
- **Alternativas:** SVG, librería graph (d3, cytoscape).
- **Impacto:** Hit-testing manual, responsive complejo.
- **Revisable:** Sí.

### D-4: contenteditable para edición inline
- **Qué:** Edición directa en `.event-body`, `.idea-body`, etc.
- **Por qué:** UX rápida sin modales.
- **Alternativas:** Formularios modales.
- **Impacto:** Riesgo XSS si no se escapa, UX inconsistente.
- **Revisable:** Parcial.

### D-5: Estética dark-fantasy con runas/canvas partículas
- **Qué:** Paleta `--gold/--dark`, runas flotantes, cursor glow.
- **Por qué:** Identidad del universo LOOP.
- **Impacto:** Marca fuerte, CSS pesado en móvil.
- **Revisable:** No (core visual).

### D-6: Proxy Vercel /api/sync con fallback directo
- **Fecha:** 2026-09-10
- **Qué:** `api/sync.js:1` lee `SUPABASE_URL/ANON_KEY` de env Vercel-Supabase, frontend `sbFetch` intenta proxy luego direct fetch.
- **Por qué:** Evita CORS/ad-block Opera GX y usa credenciales de integración Vercel.
- **Impacto:** Sync funciona en PC/celular. Si proxy falla (ENOTFOUND 500) hace fallback direct.
- **Revisable:** Sí.

### D-7: Auto-save contenteditable
- **Fecha:** 2026-09-10
- **Qué:** `index.html:2292` `attachAutoSave()` en `focusout` dispara `sSave` → sync. Personajes en `blur`.
- **Por qué:** Antes editar texto no guardaba nunca.
- **Impacto:** Ediciones persisten sin botón guardar.
- **Revisable:** No.

## Próximas decisiones pendientes
- [ ] Modularizar a Vite+TS o mantener vanilla
- [x] Backend para persistencia compartida → hecho Supabase
- [x] Sistema de backup JSON → migrate-localStorage.html
