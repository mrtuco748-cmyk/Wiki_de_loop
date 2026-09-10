# Historial — Wiki_de_loop

## [2026-09-10] - FIX | pollOnce sobreescribía datos locales con nube vacía + ensureIds duplicado
**Resumen:** Fix crítico: secciones no mostraban datos porque `pollOnce` sobreescribía localStorage con arrays vacíos de Supabase cada 3 segundos
**Cambios:**
- `index.html` `pollOnce()`: Agregado guard `hasCloud && hasLocal` — si la nube está vacía pero local tiene datos, sube local en vez de sobreescribir con vacío
- `index.html` `pollOnce()`: Si ambos vacíos, `continue` (no sobreescribe ni re-renderiza)
- `index.html` `pollOnce()`: `catch` ahora loggea `console.warn('[poll]',table,e.message)` en vez de fallar silenciosamente
- `index.html` Eliminado `ensureIds` duplicado en línea 1684 (la definición real está en línea 2624 con el guard `if(!Array.isArray)`)
- `index.html` Eliminado CSS `#music-toggle` (18 líneas) + `<button id="music-toggle">` del HTML — botón eliminado en D-10 pero quedaban restos
**Lecciones:** `pollOnce` corría cada 3s y si Supabase retornaba `[]` (tablas vacías o inalcanzables), pisaba localStorage con `[]` → secciones vacías. Fix: solo sobreescribir si la nube tiene datos. `ensureIds` duplicado no causaba bugs pero generaba confusión.
**Impacto:** Secciones muestran datos correctamente, additiones funcionan, polling no destruye datos locales
**Relacionado:** decisiones.md D-7, D-8; historial [2026-09-10 20:00]

## [2026-09-10] - UI | Eliminar botón de música
**Resumen:** Eliminado botón "Activar música" porque resultaba antiestético
**Cambios:**
- `index.html` eliminado bloque CSS `#music-toggle` (estilos del botón flotante, estados playing/paused, animación musicPulse)
- `index.html` eliminado `<button id="music-toggle">` del HTML
- Música de fondo sigue funcionando automáticamente (autoplay al primer clic/tap/tecla del usuario)
**Lecciones:** La música puede reproducirse sin un botón visible; el script de autoplay no dependía del botón
**Impacto:** UI más limpia; música sigue en loop al 40% sin control visual
**Relacionado:** historial anterior [2026-09-10 18:00]

## [2026-09-10 20:00] - FIX | Hash-routing seguro + Fix polling _saveTimers
**Resumen:** Reescrito hash-routing para no interferir con carga de datos + fix bug crítico en polling Supabase
**Cambios:**
- `index.html` `navigate()` revirtido a versión original (sin param charId ni pushState dentro)
- `index.html` `_updateHash(section)` y `_updateHashChar(charId)` funciones auxiliares que usan `replaceState`
- `index.html` Listener `DOMContentLoaded` eliminado (causaba race condition con Supabase init)
- `index.html` Listener `popstate` y hash init movidos a `window.addEventListener('load')` para que corran DESPUÉS de que toda la data se cargue
- `index.html:2689` Fix: `_saveTimers[table]=null` al final del callback de sSave — sin esto, una vez que se guardaba una tabla, el polling nunca más la revisaba
- `index.html:2893` Fix: guard de polling corregido de `_saveTimers[MAP[k]]` a `_saveTimers[k]` (MAP[k] retornaba undefined)
- `index.html:2625` Fix: `ensureIds` agregado guard `if(!Array.isArray(arr)) return arr` para evitar TypeError
**Lecciones:** `DOMContentLoaded` corre ANTES de `load` → los datos de Supabase aún no están cargados; `_saveTimers` debe limpiarse después del callback para que el polling funcione; `MAP` invierte las keys (localStorage→table), no se puede usar al revés.
**Impacto:** Secciones ahora muestran datos de Supabase correctamente; polling funciona después de guardar; hash-routing funciona sin romper carga de datos.
**Relacionado:** decisiones.md, arquitectura.md

## [2026-09-10] - FEATURE | Icon picker FA+Emoji + Fix sync + Sync accesorios/hotspots
**Resumen:** Icon picker visual reutilizable (Font Awesome + Unicode emojis), fix discrepancia emoji/icon en sync personajes, y sync completo de accesorios y hotspots a Supabase
**Cambios:**
- `index.html` CSS: Agregado `.icon-picker-overlay`, `.icon-picker`, `.icon-picker-tabs`, `.icon-picker-grid`, `.icon-picker-item`, `.icon-picker-footer` para modal de selección de iconos con estética dark-fantasy
- `index.html` JS: Creada función `openIconPicker(currentValue, callback)` reutilizable con 2 pestañas (FA categories + Emoji grid), búsqueda, preview y selección
- `index.html` JS: Definidas `ICON_CATEGORIES` (Personajes, Armas, Elementos, Símbolos, Naturaleza, Misc) con ~120 iconos FA curados y `EMOJI_LIST` con ~200 emojis organizados
- `index.html` Fix sync: Línea syncCharactersToCloud mapeo `emoji:c.icon` (antes `c.emoji` undefined), línea merge init mapeo `icon:r.emoji`, línea polling mapeo `icon:r.emoji`
- `index.html` Fix `_char-emoji` → `_char-icon` (referencia obsoleta eliminada)
- `index.html` Personajes: Input texto reemplazado por botón que abre icon picker, campo oculto `_char-icon` para valor
- `index.html` Accesorios: Icono clickeable en `renderAccessories` abre picker, actualiza `a.icon` y re-renderiza
- `index.html` Hotspots: Input texto reemplazado por botón que abre picker en `editHotspot`
- `index.html` JS: Creadas `syncAccessoriesToCloud()` y `syncHotspotsToCloud()` con upsert + cleanup por ID
- `index.html` `_saveToStorage()` modificado: debounce 800ms llama syncAccessoriesToCloud + syncHotspotsToCloud
- `index.html` Init: Pull de accesorios y hotspots desde Supabase al cargar, merge a charData
- `index.html` Polling: Pull de accesorios y hotspots en `pollOnce()` cada 3s
- `index.html` `removeAccessory()` y `deleteHotspot()` ahora llaman `_saveToStorage()` para sync
- `supabase/migrate-localStorage.html` Agregada migración de accesorios y hotspots desde localStorage
**Lecciones:** La discrepancia `emoji` (DB) vs `icon` (JS) causaba sync de `undefined`; icon picker reutilizable con callback reduce duplicación; sync de sub-entidades requiere cleanup por ID para evitar clones; debounce en `_saveToStorage` evita spam de requests a Supabase.
**Impacto:** Selección visual de iconos sin conocer clases FA; personajes, accesorios y hotspots se syncronizan correctamente a Supabase; datos persisten cross-device.
**Relacionado:** decisiones.md D-2, D-8, D-9; arquitectura.md; errores-conocidos.md

## [2026-09-10 19:00] - FEATURE | Hash-routing para links únicos por pantalla
**Resumen:** Cada sección y personaje ahora genera un link distinto con hash-routing (#historia, #personaje/tradden, etc.)
**Cambios:**
- `index.html` función `navigate()` modificada para soportar hash-routing: actualiza `history.pushState` al navegar entre secciones
- `index.html` `openChar()` modificado para push a `#personaje/{id}` al abrir personaje
- `index.html` `closeChar()` modificado para replace a `#personajes` al cerrar detalle
- `index.html` Listener `popstate` y hash init registrados en `load` (no en DOMContentLoaded) para evitar race condition
- URLs generadas: `#` (home), `#historia`, `#personajes`, `#personaje/{id}`, `#clanes`, `#ideas`, `#tramas`, `#tecnicas`
**Lecciones:** Hash-routing requiere que los listeners corran DESPUÉS de la carga completa de datos (load event); `DOMContentLoaded` es demasiado temprano para SPAs con async init; `replaceState` es preferido sobre `pushState` para evitar entradas duplicadas en el historial.
**Impacto:** Links compartibles para cada pantalla; navegación con botones atrás/adelante funciona; se puede acceder directamente a un personaje con URL.
**Relacionado:** decisiones.md, arquitectura.md

## [2026-09-10 18:00] - UI | Eliminar botón música + reubicar sync status
**Resumen:** Eliminado botón de control de música y movido indicador de sync a posición menos invasiva
**Cambios:**
- `index.html` eliminado `<button id="music-toggle">` del HTML
- `index.html` eliminado CSS `#music-toggle` (flotante bottom-right, estados `playing`/`paused`, animación `musicPulse`)
- `index.html` eliminado script completo de control de música (~130 líneas: `fadeTo`, `fadeIn`, `fadeOutAndPause`, `playWithRandomStart`, `resumeWithoutRandom`, `updateBtn`, listeners de `play`/`pause`)
- `index.html` agregado script mínimo de autoplay sin botón: solo `tryPlay()` con `audio.play().then()` + fade `requestAnimationFrame` a 0.4 volumen, listeners `click/touchstart/keydown` para desbloqueo de autoplay
- `index.html:753` `#sync-status` movido de `position:fixed;top:8px;right:8px` a `position:fixed;bottom:8px;left:8px`, reducido font-size `0.62rem→0.55rem`, padding `4px 8px→3px 7px`, opacidad baja `0.75→0.45`, max-width `60vw→50vw`
- `index.html:561` agregado CSS `#sync-status{transition:opacity 0.4s}` y `:hover{opacity:0.8}`
- `index.html:2526` `setSyncStatus` modificado: al actualizar estado brevemente opacidad `0.85`, luego `setTimeout 2500ms` vuelve a `0.45`
- `index.html:571` responsive móvil: `#sync-status{bottom:6px;left:6px;font-size:0.5rem;padding:2px 5px}`
**Lecciones:** Música de fondo sin control de usuario simplifica UI; indicador de sync funcional pero discreto se logra con opacidad baja + transición; `setSyncStatus` con auto-fadeevita interferir con estética del tema medieval.
**Impacto:** Interfaz más limpia sin botón de música; sync status presente pero no molesto (aparece y se desvanece automáticamente).
**Relacionado:** decisiones.md, arquitectura.md

## [2026-09-10 15:00] - FEATURE | Música de fondo bucle 40% fade + compresión
**Resumen:** Música ambiental medieval en bucle al 40% con fade in/out e inicio aleatorio. Compresión 82MB→14-23MB.
**Cambios:**
- `index.html:754` `<audio id="bg-music" loop preload="auto">` con `<source src="bg-music.opus" type="audio/ogg; codecs=opus">` + fallback `bg-music.mp3`
- `index.html:735` CSS `#music-toggle` flotante bottom-right con estados `playing`/`paused` y `musicPulse`, `index.html:762` botón `<button id="music-toggle">`
- `index.html:2532` script `TARGET_VOL=0.4` `index.html:2540`, `FADE_IN_MS=3500` `FADE_OUT_MS=800` `index.html:2541`, `fadeTo()` `index.html:2553` con `requestAnimationFrame` + `easeOutCubic`, `fadeIn()`/`fadeOutAndPause()`, `playWithRandomStart()` `index.html:2595` con `Math.random()*(d-margin*2)+margin` `index.html:2568` solo primera vez (`hasStarted` flag), `resumeWithoutRandom()` `index.html:2634` sin salto, listeners `loadedmetadata`+`setTimeout 300/1500ms` y `gestureEvents click/touchstart/keydown` para autoplay bloqueado, `cancelFade` y `volume=0→0.4` gradual
- `bg-music.mp3` 23.89MB `ffmpeg -b:a 48k -ac 1 -ar 44100 libmp3lame` (71% ahorro), `bg-music.opus` 14.61MB `ffmpeg -b:a 24k -ac 1 libopus` (82% ahorro), original `YTDown...128k.mp3` 82.07MB 4175s 164kbps eliminado (no trackeado, `git ls-files` vacío)
- Commit `0fd2ea4` `feat: musica de fondo...` pusheado a `origin/main` `https://github.com/mrtuco748-cmyk/Wiki_de_loop.git` verificado `git fetch` `HEAD==origin/main`
**Lecciones:** Autoplay requiere gesto usuario (`play().catch` → `needsGesture`), `audio.loop=true` nativo vs `ended` random, `currentTime` set antes de `play()` con `duration` check, `requestAnimationFrame` fade evita `setInterval` drift, Opus 24k mono ~10kbps/seg calidad suficiente para ambiente bosque, `volume` 0.4 via `TARGET_VOL` constante.
**Impacto:** Inmersión sonora sin intrusión (40% + 3.5s fade), inicio no repetitivo, peso repo -43.5MB (53% total) o -58/67MB individual, botón accesible móvil/desktop.
**Relacionado:** decisiones.md D-10, arquitectura.md Stack/Flujo, glosario.md bg-music

## [2026-09-10 13:20] - FIX | Personajes window.charData → charData (final)
**Resumen:** Fix definitivo crear personaje no guardaba — otras secciones usaban localStorage y sí
**Cambios:**
- `index.html:2332` `window.charData` → `charData` en `syncCharactersToCloud` y `index.html:2355` init, `index.html:1715` `ensureIds` ya incluía `id`, `index.html:5` hardcodeo + Supabase `personajes` `0→6` tras reload (verificado `GET personajes 6` `tradden` etc)
- Build `64d831a` deployado, Vercel `https://wiki-de-loop.vercel.app` verificado `auto-guardado` sin `💾 Guardar`
**Lecciones:** `const charData` no crea `window.charData`; `personajes` requiere `id text PK` + `Prefer: merge-duplicates` (`supabase.com/docs/reference/javascript/upsert`), polling debe incluir personajes
**Impacto:** Personajes CRUD en vivo 100% automático, sin clones, sin botones, validado usuario "al fin funciona"
**Relacionado:** decisiones.md D-9, arquitectura.md: `e5abb4f`→`64d831a`, errores-conocidos.md

## [2026-09-10 13:15] - FIX | Personajes 100% auto sin botones (build mode)
**Resumen:** Fix crear personaje no guardaba + eliminar todos los Guardar
**Cambios:**
- `index.html:1777` `_buildCharEditor` sin `💾 Guardar` → `● Auto-guardado` + `_liveSync` `index.html:1797` debounced 600ms → `saveCurrentCharacter` → `_saveToStorage` → `syncCharactersToCloud` `index.html:2332` con `POST Prefer: resolution=merge-duplicates`
- `index.html:1720` `createCharacter()` ahora `_saveToStorage()` auto, `index.html:1441` hotspot panel sin Guardar + `input` auto, `index.html:2051` skill panel sin Guardar + `input` auto
- `index.html:2332` `syncCharactersToCloud` upsert + cleanup borra eliminados, `index.html:2346` init pull personajes `hkvwczecoeqmgrqpyxme` (verificado `supabase/docs/reference/javascript/upsert` + `docs.postgrest.org: resolution=merge-duplicates`), `pollOnce` `index.html:2434` incluye personajes + check `_charSaveTimer`
- Supabase `personajes` `index.html:5` seed `6` (`tradden/sincer/tunami/eleya/polos/haski`) verificado `GET 6` `supabase/migrations/001_wiki_loop.sql:5` RLS `public all`
- Investigación: `supabase-js` `createClient` `supabase.com/docs/reference/javascript/initializing`, PostgREST upsert primary key, Vercel ENOTFOUND IPv6, Opera GX adblock `WebProNews 2025-11-10`
- Deploy `e5abb4f` totalmente automático en vivo (agregar/editar/borrar personaje → Supabase → polling 3s)
**Lecciones:** `id` text PK + `crypto.randomUUID` + `Prefer` evita clones; `createCharacter` debe auto-save; polling debe incluir personajes y no pisar `contenteditable:focus`.
**Impacto:** Personajes CRUD en vivo sin botones, todos los Guardar eliminados, `index.html:2434` sin `forceSyncAll`/`clearLocalAndReload` manuales.
**Relacionado:** decisiones.md D-9, arquitectura.md, errores-conocidos.md, glosario.md

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
