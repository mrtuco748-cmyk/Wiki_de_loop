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
- **Fecha:** 2026-09-10 13:15 → Fix 13:20 `window.charData` → `charData`
- **Qué:** `index.html:1777` sin `💾 Guardar`, `index.html:1797` `_liveSync` 600ms → `saveCurrentCharacter`, `index.html:1720` `createCharacter` auto `_saveToStorage`, `index.html:1441`/`2051` hotspot/skill sin Guardar + `input` auto, `index.html:2332` `syncCharactersToCloud` `window.charData`→`charData` fix + upsert `hkvwczecoeqmgrqpyxme` `personajes` `index.html:5` `PostgREST` `Prefer`, `pollOnce` `index.html:2434` incluye personajes, `supabase/migrations/001_wiki_loop.sql:5` RLS `public all`, `index.html:1030` hardcodeo + `index.html:2346` merge sin pisar `null`.
- **Por qué:** `createCharacter` no guardaba (window.charData undefined, otras secciones usan localStorage y sí), hardcodeo pisaba nube con `undefined`, todos los Guardar debían eliminarse. Docs oficiales `upsert` + `initializing`.
- **Impacto:** Personajes CRUD en vivo sin botones, `64d831a` verificado `GET personajes 6` y `window.charData` fix, usuario confirma "al fin funciona".
- **Revisable:** No.

### D-10: Música de fondo bucle 40% fade + compresión
- **Fecha:** 2026-09-10 15:00 `0fd2ea4` → Actualizado 2026-09-10 18:00 (botón eliminado)
- **Qué:** `index.html:754` `<audio id="bg-music" loop>` con `bg-music.opus` 14.61MB 24k mono (opus) + `bg-music.mp3` 23.89MB 48k mono (mp3) comprimidos vía `ffmpeg libopus/libmp3lame` desde 82.07MB 128k original; script mínimo de autoplay sin botón: `tryPlay()` + `audio.play().then()` + fade `requestAnimationFrame` a 0.4 volumen, listeners `click/touchstart/keydown` para desbloqueo de autoplay. **Botón de control eliminado** (D-10 original incluía `#music-toggle`).
- **Por qué:** Inmersión medieval sin molestar (40% + fade 3.5s), no repetir siempre mismo inicio, peso repo -53% total, compatibilidad opus+mp3 (Safari fallback mp3, Chrome/Firefox opus). Botón eliminado por solicitud del usuario (rompía estética).
- **Alternativas:** `howler.js` (overkill), `Web Audio API` (más control pero más código), single file 128k (82MB pesado), `autoplay muted` sin gesto (mala UX).
- **Impacto:** Audio persistente en todas las secciones, sin botón visible, sin librerías externas, reproducción fiable cross-browser.
- **Revisable:** Sí. Duración fade parametrizable, volumen user preference en localStorage, posible `Web Audio` para crossfade entre pistas, considerar control de volumen en settings si se necesita.

### D-11: Sync status discreto (bottom-left, auto-fade)
- **Fecha:** 2026-09-10 18:00
- **Qué:** `#sync-status` movido de `top-right` a `bottom-left`, opacidad baja `0.45`, font-size `0.55rem`, `setSyncStatus` hace fade `0.85→0.45` en 2.5s, hover `0.8`, responsive móvil `0.5rem`.
- **Por qué:** Indicador de sync en top-right rompía estética del tema medieval y resultaba molesto. Ubicación bottom-left con opacidad baja lo hace funcional pero invisible.
- **Alternativas:** Toast notifications (intrusivo), solo console.log (sin feedback visible), badge en header (ocupaba espacio).
- **Impacto:** Sync feedback presente pero no interfiere con la UI; aparece brevemente al guardar y se desvanece.
- **Revisable:** Sí. Posible-toggle para ver estado completo, o integrar en settings.

### D-12: Icon picker visual FA+Emoji reutilizable
- **Fecha:** 2026-09-10
- **Qué:** Componente modal reutilizable `openIconPicker(value, callback)` con 2 pestañas: Font Awesome (6 categorías, ~120 iconos) y Emoji Unicode (~200 emojis). Input de texto reemplazado por botón que abre picker en personajes, accesorios y hotspots.
- **Por qué:** Input de texto requería conocer clases FA (`fa-leaf`, `fa-crown`). Picker visual permite selección直观 sin conocimiento técnico. Reutilizable reduce duplicación.
- **Alternativas:** Dropdown nativo (poco visual), librería picker externa (dependencia), solo emojis (menos opciones FA).
- **Impacto:** UX mejorada para selección de iconos; componentes reutilizables; misma estética dark-fantasy.
- **Revisable:** Sí. Posible agregar búsqueda por nombre, favoritos, o categorías personalizadas.

### D-13: Sync completo accesorios + hotspots a Supabase
- **Fecha:** 2026-09-10
- **Qué:** `syncAccessoriesToCloud()` y `syncHotspotsToCloud()` con upsert + cleanup por ID. Pull en init y polling cada 3s. `_saveToStorage()` llama syncs con debounce 800ms.
- **Por qué:** Tablas `accesorios` y `hotspots` existían en DB pero nunca se syncronizaban. Datos solo en localStorage = pérdida en otro dispositivo.
- **Alternativas:** Solo sync personajes (datos parciales), sync todo en una tabla JSONB (menos queryable).
- **Impacto:** Todos los datos de personajes (iconos, accesorios, hotspots) persisten cross-device. Cleanup previene clones.
- **Revisable:** Sí. Posible sync de skill_tree y otros campos anidados.

## Próximas decisiones pendientes
- [ ] Modularizar a Vite+TS o mantener vanilla
- [x] Backend para persistencia compartida → hecho Supabase
- [x] Sistema de backup JSON → migrate-localStorage.html
- [x] Música de fondo → hecho `0fd2ea4` D-10, botón eliminado D-10 update
- [x] Sync status discreto → hecho D-11
