# Glosario — Wiki_de_loop

## Términos del Dominio
- **LOOP:** Nombre del universo ficticio. Mundo donde dioses guardan silencio y mortales cargan esencias divinas.
- **Esencia Divina:** Poder de un dios absorbido por un mortal (ej: Tradden absorbe a Hades).
- **Hades:** Dios del universo del lore. Cada dios controla un universo/planeta.
- **Clan:** Familia/organización con símbolo y reservas de energía (ej: Clan 4 Puntos).
- **Técnica:** Habilidad/poder (ej: Neurona Espejo, Reflejo Total).
- **Trama:** Arco narrativo entrelazado.
- **Hotspot:** Burbuja interactiva sobre el viewer del personaje.
- **Viewer:** Área de imagen del personaje con 3 vistas (Frontal/Lateral/Posterior).

## Entidades Principales
- **Personaje:** `id, name, emoji, role, type(principal/secundario), info, nameOrigin, story, powers, accessories[], images[3], viewHotspots[3][], skillTree{roots[]}`
- **Clan:** `symbol, name, desc`
- **Técnica:** `name, owner, desc`
- **Historia Evento:** `era, title, body`
- **Idea/Trama:** `title, body`
- **Skill Node:** `id, name, desc, x, y, children[]`

## Siglas
- **SPA:** Single Page Application (navegación manual)
- **LS:** localStorage

## Estados
- `type: principal | secundario` (badge en char-card)
- `VIEW_NAMES: Frontal | Lateral | Posterior`
