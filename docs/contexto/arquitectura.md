# Arquitectura — Wiki_de_loop

## Stack Tecnológico
- **Lenguaje:** HTML5, CSS3, JavaScript vanilla (sin framework, sin bundler)
- **Estilos:** CSS custom properties (:root), Google Fonts (Cinzel, IM Fell English), canvas 2D
- **Persistencia:** offline-first totalmente automático sin botones: localStorage cache + Supabase 9 tablas `index.html:2212` `sbFetch` direct-only + upsert `Prefer: resolution=merge-duplicates` + `ensureIds` + polling 3s + `_liveSync` 600ms. Personajes `index.html:2332` `charData` (fix `window.charData`→`charData` `64d831a`) `id text PK` `index.html:1030`.
- **Runtime:** Browser-only `index.html` (~2497 líneas) `64d831a`. Sin `💾 Guardar` en ningún lado, `●` indicador solo.
- **Infra:** Vercel https://wiki-de-loop.vercel.app + Supabase `hkvwczecoeqmgrqpyxme.supabase.co` (hkvwczecoeqmgrqpyxme) `001_wiki_loop.sql:1` RLS `public all` `index.html:108`. Build `64d831a`

## Mapa de Carpetas
```
Wiki_de_loop/
├── index.html                    # App + sync sbFetch
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
