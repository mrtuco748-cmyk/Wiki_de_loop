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

### RESUELTO 2026-09-10 - Sync no guardaba / solo tramas / clones 30x / personajes 0 (final)
- **Causa:** `contenteditable` sin `sSave`, `supabase-js` CDN, Opera adblock, `ekabsuqctklmbnpefowc` ENOTFOUND, `DELETE+POST` sin `id` causaba clones, `createCharacter` `index.html:1719` sin `_saveToStorage`, `personajes` `index.html:2332` usaba `window.charData` (undefined, `const charData` no es `window.`) + sin `Prefer: merge-duplicates` y sin pull/polling, `index.html:1030` hardcodeo pisaba nube con `undefined` (seed minimal solo `id+name`), todos los `💾 Guardar` requerían click
- **Fix:** `index.html:1797` `_liveSync` 600ms auto + `index.html:1720` `createCharacter` auto `_saveToStorage`, `index.html:1433`/`2051` hotspot/skill sin Guardar + `input` auto, `ensureIds` + upsert `id` + `syncCharactersToCloud` `index.html:2332` `charData` fix + `PostgREST` `Prefer: resolution=merge-duplicates`, `index.html:2346` merge sin pisar `null`, `pollOnce` `index.html:2434` incluye personajes, Supabase `personajes` limpiado `0→6` y verificado `64d831a` `GET 6` + `char_test` `window.charData` fix
- **Verificado 13:20:** `personajes 6` + `historia 3, tramas 2, ideas 2, clanes 2, tecnicas 2` sin clones, sin ningún `💾 Guardar`, usuario confirma "al fin funciona"

### ALTA - Visual/visibilidad inconsistente
- **Dónde:** responsive `index.html:555-719`, viewer, hotspots, contraste gold/dark
- **Qué:** Reportado como principal dolor. Elementos poco visibles según viewport.
- **Fix:** Auditoría visual + tokens de contraste + QA en 320/768/1024.

Última revisión: 2026-09-10 13:20 — final `64d831a` sin Guardar, personajes 6, verificado
