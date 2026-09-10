# Arquitectura — Wiki_de_loop

## Stack Tecnológico
- **Lenguaje:** HTML5, CSS3, JavaScript vanilla (sin framework, sin bundler)
- **Estilos:** CSS custom properties (:root), Google Fonts (Cinzel, IM Fell English), canvas 2D
- **Persistencia:** offline-first totalmente automático: localStorage cache + Supabase (9 tablas) via `index.html:2212` `sbFetch` direct-only + upsert con `id` + polling 3s. Sin botones manuales.
- **Runtime:** Browser-only `index.html` (~2430 líneas) + `api/sync.js` no usado (direct). Sin build.
- **Infra:** Vercel https://wiki-de-loop.vercel.app + Supabase `hkvwczecoeqmgrqpyxme.supabase.co` (hkvwczecoeqmgrqpyxme). Tablas `001_wiki_loop.sql:1` con RLS public. Build `367ab6c`

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
Usuario → contenteditable/input/ +Nuevo/✕ → _read*() → ensureIds() → sSave() → localStorage → sbFetch POST upsert (merge-duplicates) → Supabase
Polling 3s: sbFetch GET → compara cloud vs local (con ids) → si difiere y no hay focus ni _saveTimers → localStorage + re-render
Al iniciar: GET cloud → si vacío y local tiene → sSave(local); si cloud tiene → local = cloud → render
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
