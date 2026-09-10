# Decisiones — Wiki_de_loop

### D-1: Single-file vanilla (sin framework/build)
- **Fecha:** 2026-09-10 (heredado)
- **Qué:** Toda la app en `index.html` con CSS/JS inline.
- **Por qué:** Portabilidad, cero setup, ideal para prototipo worldbuilding.
- **Alternativas:** React+Vite (overkill inicial), Notion/Obsidian (menos custom).
- **Impacto:** Fácil de compartir, difícil de escalar.
- **Revisable:** Sí. Migrar a Vite cuando supere 3k LOC.

### D-2: localStorage como única persistencia
- **Fecha:** 2026-09-10
- **Qué:** `sSave/sLoad` + `loop_characters` en localStorage.
- **Por qué:** Sin backend, instantáneo.
- **Alternativas:** IndexedDB, Firebase, archivo JSON.
- **Impacto:** Sin backup externo, límite ~5MB, base64 agrava.
- **Revisable:** Sí. Prioridad agregar export/import JSON.

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

## Próximas decisiones pendientes
- [ ] Modularizar a Vite+TS o mantener vanilla
- [ ] Backend para persistencia compartida
- [ ] Sistema de backup JSON
