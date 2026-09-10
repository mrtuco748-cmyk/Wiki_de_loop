# Errores Conocidos — Wiki_de_loop

### ALTA - Imágenes base64 en localStorage exceden quota
- **Dónde:** `charData.images` → `loop_characters` `index.html:1228`
- **Qué:** FileReader base64 guardado directo, ~1-2MB por imagen, límite 5MB.
- **Fix:** Comprimir con canvas o migrar a IndexedDB / export JSON.

### MEDIA - CSS roto anidado
- **Dónde:** `index.html:674-707` reglas `#skillCanvas` y `@media` duplicadas/mal cerradas.
- **Fix:** Extraer a `styles.css` y validar con stylelint.

### MEDIA - Todo global en window
- **Dónde:** `charData`, `currentChar`, funciones sueltas.
- **Fix:** Modularizar a ES modules.

### MEDIA - XSS via contenteditable
- **Dónde:** `renderHistoria`, `renderCards` usan `textContent` ok, pero `innerHTML` en spots sin escape completo.
- **Fix:** Usar `escapeHtml` siempre; ya existe `index.html:2095`.

### BAJA - Sin export/import backup → Mitigado
- **Dónde:** `supabase/migrate-localStorage.html:1` y sync automático cubren backup.
- **Fix:** Ya no crítico.

### BAJA - Sin tests ni linter
- **Fix:** Agregar `eslint` + `vitest` si se migra a Vite.

### RESUELTO 2026-09-10 - Sync no guardaba en Supabase
- **Causa:** `contenteditable` no llamaba `sSave`, `supabase-js` CDN fallaba, Opera GX bloqueaba `supabase.co`, proyecto viejo borrado `ekabsuqctklmbnpefowc` (ENOTFOUND), anon key cambiada.
- **Fix:** `attachAutoSave`, `sbFetch` fetch directo + proxy `/api/sync` con fallback, migración a `hkvwczecoeqmgrqpyxme`, anon key `eyJ...`. Verificado proxy 200.

### ALTA - Visual/visibilidad inconsistente
- **Dónde:** responsive `index.html:555-719`, viewer, hotspots, contraste gold/dark
- **Qué:** Reportado como principal dolor. Elementos poco visibles según viewport.
- **Fix:** Auditoría visual + tokens de contraste + QA en 320/768/1024.

Última revisión: 2026-09-10 12:40 — sync verificado proxy OK
