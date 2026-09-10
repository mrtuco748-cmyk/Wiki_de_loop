# Arquitectura — Wiki_de_loop

## Stack Tecnológico
- **Lenguaje:** HTML5, CSS3, JavaScript vanilla (sin framework, sin bundler)
- **Estilos:** CSS custom properties (:root), Google Fonts (Cinzel, IM Fell English), canvas 2D
- **Persistencia:** offline-first: localStorage cache (`loop_historia`, `loop_tramas`, `loop_ideas`, `loop_clanes`, `loop_tecnicas`, `loop_characters`) + Supabase (tablas `personajes`, `clanes`, `tecnicas`, `historia_eventos`, `tramas`, `ideas`, `accesorios`, `hotspots`, `skill_nodes`) via `index.html:2206` `sbFetch` + `api/sync.js:1`
- **Runtime:** Browser-only, single file `index.html` (~2330 líneas) + Vercel serverless `api/sync.js`. Sin build.
- **Infra:** Vercel (https://wiki-de-loop.vercel.app) + Supabase `hkvwczecoeqmgrqpyxme.supabase.co` (proyecto hkvwczecoeqmgrqpyxme). Tablas creadas con `supabase/migrations/001_wiki_loop.sql:1`

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
Usuario → navigate()/contenteditable/canvas → charData → sSave() → localStorage → sbFetch() → /api/sync → Supabase
Al iniciar (online): sbFetch GET → localStorage → renderHistoria/renderCards/renderClanes/renderTecnicas
Si nube vacía: auto-push local → Supabase. Si offline: local only, sync al reconectar (online→reload).
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
