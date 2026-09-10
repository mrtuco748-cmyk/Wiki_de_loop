# Flujo de Trabajo — Wiki_de_loop

## Setup Inicial
```bash
git clone <repo>
cd Wiki_de_loop
# Sin deps, abrir index.html directo o:
npx serve .
```

## Hacer un Cambio
1. `git checkout -b feature/descripcion`
2. Editar `index.html` (respetar secciones CSS/JS marcadas)
3. Probar en browser (desktop + móvil 768px)
4. Verificar localStorage no se corrompe (Application → Local Storage)
5. Commit Conventional: `feat: add export JSON`
6. Push + PR

## Checklist Terminado
- [ ] Funciona sin consola errors
- [ ] Responsive probado (chrome devtools móvil)
- [ ] localStorage persiste tras reload
- [ ] `escapeHtml` usado si se renderiza input usuario
- [ ] No se agregó lib sin D-X

## Deploy
- Manual: drag `index.html` a Netlify / GitHub Pages (branch `main`)
- Futuro: `npm run build` si se migra a Vite

## Troubleshooting
- **localStorage lleno (QuotaExceeded):** borrar `loop_characters` o reducir imágenes base64.
- **Canvas no dibuja:** verificar `currentChar` y `drawSkillTree()` llamado tras `openChar`.
- **Hotspots no se ven:** revisar `viewHotspots[currentView]` y `renderHotspots`.
