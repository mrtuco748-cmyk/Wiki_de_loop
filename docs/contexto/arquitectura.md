# Arquitectura — Wiki_de_loop

## Stack Tecnológico
- **Lenguaje:** HTML5, CSS3, JavaScript vanilla (sin framework, sin bundler)
- **Estilos:** CSS custom properties (:root), Google Fonts (Cinzel, IM Fell English), canvas 2D
- **Persistencia:** localStorage (`loop_historia`, `loop_tramas`, `loop_ideas`, `loop_clanes`, `loop_tecnicas`, `loop_characters`)
- **Runtime:** Browser-only, single file `index.html` (~2207 líneas). Sin Node, sin build.
- **Infra:** Vercel (deploy actual) — estático. Futuro: Supabase para sync nube (offline-first: localStorage cache + sync al reconectar)

## Mapa de Carpetas
```
Wiki_de_loop/
├── index.html          # Toda la app (HTML+CSS+JS inline)
├── docs/contexto/      # 8 docs OpenCode
├── AGENTS.md
├── opencode.json
├── README.md           # Pack plantilla (pendiente reescribir para proyecto real)
└── *.md                # Templates originales del pack
```

## Flujo de Datos
```
Usuario → navigate() / contenteditable / canvas → charData (memoria) → localStorage
                                   ↘ renderHistoria/renderCards/renderClanes/renderTecnicas/drawSkillTree → DOM/Canvas
```
- Datos default en `DEFAULT_*` + `charData` hardcoded. Al cargar: `sLoad()` mergea con localStorage, y `loop_characters` mergea personajes.

## Diagramas
```
[Home] → click .section-btn → navigate(section) → .section-page.active
Personajes: chars-grid → openChar(id) → char-detail → charTab() / renderView() / drawSkillTree()
```

## Lo que NO existe
- [ ] Backend / API / DB
- [ ] Autenticación
- [ ] Router real (hash/history)
- [ ] Bundler / TS / Linter / Tests
- [ ] Export/Import JSON backup
- [ ] Validación de quota localStorage
- [ ] Sanitización XSS en contenteditable

## Escalabilidad
- Fortalezas: cero setup, portable, rápido para worldbuilding.
- Cuellos: 1 archivo gigante, todo global en window, imágenes base64 en localStorage, canvas sin virtualización.
- Crecimiento: requiere modularizar a `src/` + Vite antes de superar ~5k LOC.
