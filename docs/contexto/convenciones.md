# Convenciones — Wiki_de_loop

## Estilo de Código
- **JS:** camelCase variables/funciones (`charData`, `renderView`, `drawSkillTree`), Pascal no usado. Funciones globales en window.
- **CSS:** kebab-case clases (`.char-card`, `.skill-edit-panel`), BEM no usado, custom properties `--gold`, `--dark`.
- **HTML:** ids en kebab (`home-screen`, `char-detail`), clases semánticas.
- **Archivos:** hoy 1 archivo. Futuro: `kebab-case` para `*.html`, `*.js`, `*.css`.

## Formato
- Indentación: 2 espacios (actual). Prettier no configurado.
- Comillas: mixtas. Estandarizar a dobles en HTML, simples en JS.
- CSS: bloque por componente, comentarios `/* ===== SECCION ===== */`.

## Imports
N/A (sin módulos). Futuro con Vite: 1) terceros 2) locales 3) estilos.

## Patrones Usados
- SPA manual con `display:none/block` + `navigate()`
- Render imperativo (`innerHTML`) + contenteditable para edición inline
- Canvas 2D para árbol habilidades
- Hotspots posicionados en % sobre `.char-image-area`
- Audio `<audio loop>` `index.html:754` + JS fade `requestAnimationFrame` `index.html:2553` + random `currentTime` `index.html:2568` + botón `#music-toggle` `index.html:735`

## Patrones Prohibidos
- No agregar frameworks sin decisión D-X
- No usar `innerHTML` con input usuario sin `escapeHtml()`
- No guardar base64 grande en localStorage sin comprimir

## Tests
- Framework: ninguno. Objetivo: Vitest + Playwright si se modulariza.

## Commits
- Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`

## Irregularidades
- CSS duplicado `#skillCanvas` líneas 674/701, media queries anidadas mal cerradas.
- JS global sin `use strict` ni módulos.
