# Arquitectura — Wiki_de_loop

## Stack Tecnológico
- **Lenguaje:** HTML5, CSS3, JavaScript vanilla (sin framework, sin bundler)
- **Estilos:** CSS custom properties (:root), Google Fonts (Cinzel, IM Fell English), canvas 2D, `index.html:735` `#music-toggle`
- **Persistencia:** offline-first totalmente automático sin botones: localStorage cache + Supabase 9 tablas `index.html:2212` `sbFetch` direct-only + upsert `Prefer: resolution=merge-duplicates` + `ensureIds` + polling 3s + `_liveSync` 600ms. Personajes `index.html:2332` `charData` (fix `window.charData`→`charData` `64d831a`) `id text PK` `index.html:1030`.
- **Media:** `bg-music.mp3` 23.89MB 48k mono + `bg-music.opus` 14.61MB 24k mono (82.07MB orig comprimido 71%/82%) `index.html:754` `<audio loop>` + `index.html:2532` fade 3.5s `requestAnimationFrame` + random start `index.html:2568` + `#music-toggle` `index.html:762`
- **Runtime:** Browser-only `index.html` (~2643 líneas) `0fd2ea4`. Sin `💾 Guardar` en ningún lado, `●` indicador solo.
- **Infra:** Vercel https://wiki-de-loop.vercel.app + Supabase `hkvwczecoeqmgrqpyxme.supabase.co` (hkvwczecoeqmgrqpyxme) `001_wiki_loop.sql:1` RLS `public all` `index.html:108`. Build `0fd2ea4`

## Mapa de Carpetas
```
Wiki_de_loop/
├── index.html                    # App + sync sbFetch + bg-music
├── bg-music.mp3                  # 23.89MB 48k mono (ffmpeg libmp3lame)
├── bg-music.opus                 # 14.61MB 24k mono (ffmpeg libopus)
├── api/sync.js                   # Proxy Vercel → Supabase (usa env vars integración)
├── supabase/
│   ├── migrations/001_wiki_loop.sql
│   ├── client.js
│   └── migrate-localStorage.html # One-click migración local→nube
├── docs/contexto/                # 8 docs
├── AGENTS.md / opencode.json
└── .env.local                    # SUPABASE_URL/ANON_KEY (no commiteado)
```

## Flujo de Datos
```
Usuario → contenteditable/input/ +Nuevo/✕/crear personaje → _read*()/_liveSync()/createCharacter() → ensureIds() → sSave()/_saveToStorage() → localStorage → sbFetch POST upsert (merge-duplicates) → Supabase `personajes`/`historia_eventos`/etc
Polling 3s `index.html:2434`: GET cloud → compara (con ids) → si difiere y no hay focus/_saveTimers/_charSaveTimer → localStorage + render*() + _addCardToGrid()/_syncCard()
Al iniciar: GET 5 tablas + personajes → si nube vacía → push local; si nube tiene → merge nube→local (con ids) → render
Usuario → load → audio#bg-music `index.html:754` loadedmetadata → Math.random()*(duration-margin*2)+margin `index.html:2568` (solo hasStarted==false) → volume 0 → play() → fadeTo 0→0.4 3500ms easeOutCubic `index.html:2553` → loop true → #music-toggle `index.html:762` play/pause con fadeOut 800ms
```
- Datos default en `DEFAULT_*` + `charData` hardcoded. Al cargar: `sLoad()` mergea con localStorage, y `loop_characters` mergea personajes.

## Diagramas
```
[Home] → click .section-btn → navigate(section) → .section-page.active
Personajes: chars-grid → openChar(id) → char-detail → charTab() / renderView() / drawSkillTree()
```

## Lo que NO existe
- [x] Backend / API / DB → Supabase (9 tablas) + api/sync.js
- [ ] Autenticación (RLS public all para prototipo)
- [ ] Router real (hash/history)
- [ ] Bundler / TS / Linter / Tests
- [x] Export/Import JSON backup → migrate-localStorage.html
- [ ] Validación de quota localStorage (base64 imágenes sigue riesgo)
- [ ] Sanitización XSS completa en contenteditable

## Escalabilidad
- Fortalezas: cero setup, portable, rápido para worldbuilding.
- Cuellos: 1 archivo gigante, todo global en window, imágenes base64 en localStorage, canvas sin virtualización.
- Crecimiento: requiere modularizar a `src/` + Vite antes de superar ~5k LOC.
