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

### D-6: Proxy Vercel /api/sync (deprecado)
- **Fecha:** 2026-09-10 → Deprecado 2026-09-10 13:05
- **Qué:** `api/sync.js:1` existió para evitar Opera adblock, pero Vercel IPv6 ENOTFOUND y Opera también bloquea proxy. Reemplazado por direct-only.
- **Impacto:** Proxy aún existe pero no se usa (sbFetch direct-only). Mantener para debug.
- **Revisable:** Eliminar si no se necesita.

### D-7: Auto-save contenteditable + polling
- **Fecha:** 2026-09-10 → Actualizado 13:05
- **Qué:** `attachAutoSave()` en `input` 600ms + `focusout` + `pollOnce` cada 3s (no pisa `contenteditable:focus` ni `_saveTimers`).
- **Por qué:** Edición en vivo sin botón, y cambios del otro dispositivo sin recargar.
- **Impacto:** Totalmente automático.

### D-8: Upsert con ids estables (fix clones)
- **Fecha:** 2026-09-10 13:05
- **Qué:** `ensureIds`, `sLoad` migra ids, `render*`/`_read*`/`add*` preservan `id`, `sSave` hace `POST Prefer: resolution=merge-duplicates` + delete solo ids removidos.
- **Por qué:** DELETE+POST sin id causaba clones (30/20 filas) y solo tramas guardaba (payload sin id).
- **Impacto:** Sin clones, todos los CRUD (5 tablas) funcionan, `367ab6c` verificado.
- **Revisable:** No.

### D-9: Personajes 100% auto sin botones (build mode)
- **Fecha:** 2026-09-10 13:15
- **Qué:** `index.html:1777` sin `💾 Guardar`, `index.html:1797` `_liveSync` debounced 600ms → `saveCurrentCharacter`, `index.html:1720` `createCharacter` auto `_saveToStorage`, `index.html:1441`/`2051` hotspot/skill sin Guardar + `input` auto, `index.html:2332` `syncCharactersToCloud` upsert `hkvwczecoeqmgrqpyxme` `personajes` `index.html:5` con `PostgREST` docs, `pollOnce` `index.html:2434` incluye personajes, `supabase/migrations/001_wiki_loop.sql:5` RLS `public all`.
- **Por qué:** Usuario reportó crear personaje no guardaba + todos los Guardar debían eliminarse + personajes no en Supabase (0 filas). Investigación `supabase.com/docs/reference/javascript/upsert` + `supabase.com/docs/reference/javascript/initializing` + `docs.postgrest.org: resolution=merge-duplicates`.
- **Impacto:** Personajes CRUD en vivo sin botones, `e5abb4f` verificado `GET personajes 6` (`tradden` etc), polling 3s.
- **Revisable:** No.

## Próximas decisiones pendientes
- [ ] Modularizar a Vite+TS o mantener vanilla
- [x] Backend para persistencia compartida → hecho Supabase
- [x] Sistema de backup JSON → migrate-localStorage.html
