# 🎯 CHEATSHEET - Referencia Rápida OpenCode v2.0

## Antes de Cada Sesión (1 minuto)

### OpenCode SIEMPRE debe:
1. ✅ Leer `docs/contexto/forma-de-trabajo-con-el-usuario.md` (cómo trabajar contigo)
2. ✅ Leer brevemente los 8 docs (especialmente el relevante)
3. ✅ Validar que docs están actualizados (si no, alertar)
4. ✅ Entender que TODO requiere confirmación del usuario primero

### Orden de Lectura (por relevancia)
```
1. forma-de-trabajo-con-el-usuario.md  (2 min)  - Cómo trabajar contigo
2. glosario.md                          (2 min)  - Lenguaje
3. arquitectura.md                      (3 min)  - Estructura
4. convenciones.md                      (3 min)  - Reglas
5. decisiones.md                        (2 min)  - Por qué
6. flujo-de-trabajo.md                  (2 min)  - Cómo cambiar
7. errores-conocidos.md                 (2 min)  - Gotchas
8. historial.md                         (1 min)  - Cambios recientes
─────────────────────────────────────────────
TOTAL: ~15-17 minutos (lectura rápida)
```

---

## Para Cualquier Cambio (PROTOCOLO)

### Paso 1: COMUNICAR (1-2 min)
```
OPENCODE (a usuario):

"Entiendo que quieres [QUÉ].

Esto requeriría:
  • Cambio A en [archivo]
  • Cambio B en [archivo]
  • Cambio C en [archivo]

Impacto:
  • Afectaría [sistema X]
  • Requeriría actualizar [tests/docs]

Alternativas:
  1. [Opción 1]: [ventajas] [desventajas]
  2. [Opción 2]: [ventajas] [desventajas]

¿Procedo con opción 1? ✅/❌/🤔"
```

### Paso 2: VALIDAR (usuario responde)
```
USUARIO elige:
  ✅ = Sí, procede
  ❌ = No, cancela o cambia propuesta
  🤔 = Propone variación (volver a Paso 1)
```

### Paso 3: IMPLEMENTAR (variable)
```
Para CADA archivo/función importante:
  1. Hacer el cambio
  2. "Cambié esto. ¿Ok?" [mostrar resultado]
  3. Usuario: "Ok" o "Corrige X"
  4. Si error: PARAR Y REPORTAR ANTES DE CONTINUAR
```

### Paso 4: VERIFICAR (después cada cambio)
```
✅ Checklist de Calidad:
  - ¿Compila/funciona?
  - ¿Sigue convenciones?
  - ¿Hay imports muertos?
  - ¿Hay duplicación?
  - ¿Tests pasan?
  - ¿Documentación actualizada?
  - ¿No hay secretos?
  
Si encuentras problema: PAUSA Y REPORTA
```

### Paso 5: DOCUMENTAR (1-2 min)
```
SIEMPRE actualizar estos archivos:
  
  📝 docs/contexto/historial.md
     └─ Qué se hizo
  
  🤔 docs/contexto/decisiones.md (si aplica)
     └─ Nueva decisión: D-X
  
  ⚠️  docs/contexto/errores-conocidos.md (si encontró)
     └─ Nuevo issue o actualizar existente
  
  ✍️  docs/contexto/convenciones.md (si establece nueva)
     └─ Nueva convención
  
  🤝 docs/contexto/forma-de-trabajo-con-el-usuario.md (si aprendió)
     └─ Nueva preferencia del usuario

Formato entrada historial:
  ## [YYYY-MM-DD HH:MM] - [CATEGORÍA]
  **Resumen**: [1 línea]
  **Cambios**: [Puntos clave]
  **Lecciones**: [Qué aprendimos]
  **Impacto**: [Qué afecta]
```

### Paso 6: COMUNICAR RESULTADO (final)
```
OPENCODE (a usuario):

"✅ Listo!

Cambios realizados:
  • [Cambio 1] en [archivo]
  • [Cambio 2] en [archivo]
  • [Cambio 3] en [archivo]

Validaciones:
  ✅ Tests pasan
  ✅ Sin warnings de linter
  ✅ Sigue convenciones

Documentado en:
  📝 historial.md (entrada de hoy)
  🤔 decisiones.md (D-X: [título])
  ⚠️  errores-conocidos.md (actualizado)

Estado actual: [BREVE DESCRIPCIÓN]"
```

---

## Checklist de Calidad (Validar ANTES de dar por terminado)

```
CHECKLIST UNIVERSAL:

Código & Estructura:
  □ Sigue las convenciones del proyecto
  □ No hay imports muertos
  □ No hay duplicación de lógica
  □ No hay valores hardcodeados (excepto constantes)
  □ No hay code smells obvios
  □ Nombres claros y consistentes

Tests:
  □ Tests existentes aún pasan
  □ Nuevos tests agregados (si aplica)
  □ Cobertura aceptable (ver convenciones.md)
  □ Sin warnings en test runner

Documentación:
  □ Código tiene comentarios donde es necesario
  □ Cambios reflejados en docs de contexto
  □ README actualizado (si aplica)
  □ No hay docs desactualizados

Seguridad:
  □ No hay secretos expuestos (API keys, tokens)
  □ Validaciones de entrada presentes
  □ No hay vulnerabilidades obvias

Performance:
  □ Sin querys N+1
  □ Sin loops anidados inecesarios
  □ Sin memory leaks obvios

Committing:
  □ Mensaje de commit sigue formato (Conventional Commits)
  □ Referencia issues si aplica
  □ Sin cambios sin-relacionados en mismo commit
```

---

## Reglas de ORO (NO NEGOCIABLES)

```
🔴 NUNCA:
  • Hacer cambios sin confirmación previa
  • Asumir lo que el usuario prefiere
  • Dejar code smells o bugs sin reportar
  • Olvidar actualizar documentación
  • Romper convenciones sin explicar

🟢 SIEMPRE:
  • Comunicar ANTES de actuar
  • Validar DESPUÉS de cada paso
  • Documentar TODO lo que hace
  • Preguntar en caso de duda
  • Reportar problemas INMEDIATAMENTE

🟡 SI ALGO NO ESTÁ CLARO:
  • Preguntar al usuario
  • Revisar los 8 docs
  • Revisar histórico de commits
  • No asumir, preguntar
```

---

## Matriz de Decisiones Rápidas

### "¿Debo cambiar [X]?"

```
Usuario pidió → Requiere confirmación?
────────────────────────────────────
Agregar línea de código        → SÍ
Cambiar función existente      → SÍ
Crear archivo nuevo            → SÍ
Cambiar convención             → SÍ + Documentar
Arreglir typo                  → Depende (si es en doc, SÍ; si es en código, SÍ también por seguridad)
Agregar comentario             → NO (es mejora de calidad)
Refactorizar                   → SÍ (confirmar alcance)
Cualquier cosa mayor           → SÍ SIEMPRE
```

### "¿He validado bien el cambio?"

```
Pregúntate:
  □ ¿Compila/funciona el código?
  □ ¿Pasan todos los tests?
  □ ¿No hay warnings?
  □ ¿Cambios afectan tests existentes?
  □ ¿Documentación está actualizada?
  □ ¿El usuario entiende qué pasó?
  
Si TODAS son SÍ → Proceder
Si ALGUNA es NO → Detener y reportar
```

---

## Categorías de Historial (para historial.md)

```
DECISIÓN    → Se tomó decisión importante
             └─ Documentar también en decisiones.md con D-X

BUG         → Se encontró / arregló un bug
             └─ Documentar también en errores-conocidos.md

REFACTOR    → Se refactorizó código
             └─ Puede afectar convenciones.md si establece patrón nuevo

FEATURE     → Se agregó feature nueva
             └─ Puede afectar arquitectura.md

APRENDIZAJE → Se descubrió algo importante sobre el proyecto
             └─ Agregar a errores-conocidos.md o decisiones.md si aplica

DISCOVERY   → Se identificó problema/oportunidad
             └─ Agregar a errores-conocidos.md
```

---

## Velocidad de Trabajo Según Config

### 🐢 INCREMENTAL (Paso a paso, seguro)
```
1. Cambio pequeño
2. "¿Ok?"
3. Usuario: "Ok"
4. Cambio pequeño
5. "¿Ok?"
... (repite)

Ventaja: Seguro, usuario tiene control total
Desventaja: Lento para cambios grandes
Uso: Datos críticos, refactors grandes, áreas sensibles
```

### 🚂 RÁPIDO (Batch, menos interrupciones)
```
1. Plan grande
2. "Voy a hacer A, B, C. ¿Ok?"
3. Usuario: "Ok"
4. Hago A, B, C
5. "Listo, aquí está todo"

Ventaja: Rápido, menos interrupción
Desventaja: Menos control durante proceso
Uso: Features simples, cambios menores
```

### 🎯 FLEXIBLE (Depende de complejidad)
```
Simple (< 5 min)          → Rápido
Mediano (5-30 min)        → Mitad y mitad
Complejo (> 30 min)       → Incremental

Criterio: Riesgo + Complejidad
```

---

## Señales de Alerta (PARAR INMEDIATAMENTE)

```
⚠️  Si encuentras:
  • Secretos expuestos (API keys, tokens, credentials)
  • Código malicioso o sospechoso
  • Vulnerabilidades de seguridad claras
  • Bugs críticos en funcionalidad existente
  • Cambio que rompe tests existentes
  • Cambio que no sigue convenciones
  • Código que no compila
  • Lógica que no tiene sentido
  • Imports circulares
  • Funciones > 50 líneas sin refactor
  
→ REPORTAR AL USUARIO INMEDIATAMENTE
→ NO CONTINUAR HASTA RESOLVER
```

---

## Cuando NO Encontraste Problema Pero Sospechas

```
Estrategia: Reportar + Preguntar

"Noté que [CÓDIGO] podría ser [PROBLEMA POTENCIAL].
Esto probablemente no afecta hoy, pero en el futuro podría:
  • [Riesgo 1]
  • [Riesgo 2]

¿Debería refactorizar esto ahora o lo documentamos como deuda técnica?
  ✅ Arreglarlo ahora (esfuerzo: [X])
  📝 Documentar en errores-conocidos.md para después
  ⏭️  Ignorar por ahora"
```

---

## Conversación con Usuario (Ejemplos)

### ❌ MAL
```
OPENCODE: "Listo, agregué la feature."
```

### ✅ BIEN
```
OPENCODE: "Quieres agregar autenticación. 

Propongo:
  1. Crear archivo auth/middleware.ts
  2. Integrar en main.ts
  3. Actualizar tests

¿Procedo? ✅/❌"

[Usuario confirma]

OPENCODE: "Creé middleware. ¿Ok?" [muestra código]
[Usuario confirma]

OPENCODE: "Listo! Agregué:
  • auth/middleware.ts (50 líneas)
  • Actualicé main.ts
  • Tests pasan
  • Documentado en historial.md"
```

---

## Debugging de Problemas

### "OpenCode no sigue el protocolo"
```
REVISAR EN ORDEN:
1. ¿Leyó forma-de-trabajo-con-el-usuario.md? 
   (Si no, agregarle al inicio de AGENTS.md)
2. ¿Hay instrucciones conflictivas?
   (Revisar AGENTS.md vs forma-de-trabajo)
3. ¿El usuario fue claro en sus preferencias?
   (Preguntarle a usuario qué espera)
```

### "Los docs están desactualizados"
```
SOLUCIÓN:
1. OpenCode valida cada sesión (debe estar en protocolo)
2. Si docs no coinciden con código:
   "Detecté cambios sin documentar: [lista]
    Actualizo docs? ✅/❌"
3. Documentar discrepancia en historial.md
```

### "No sé si esto está bien"
```
REGLA: Cuando en duda, PREGUNTAR al usuario
No asumir nunca que algo está bien sin validación explícita
```

---

## Resumen de 1 Minuto

```
ANTES:
  □ Leer forma-de-trabajo-con-el-usuario.md
  □ Leer docs relevantes
  □ Validar contexto

DURANTE (para TODO cambio):
  □ Comunicar primero
  □ Esperar confirmación
  □ Implementar paso a paso
  □ Validar cada paso
  □ Reportar problemas INMEDIATAMENTE

DESPUÉS:
  □ Documentar en historial.md
  □ Actualizar otros docs si aplica
  □ Comunicar resultado al usuario

REGLA ORO: PREGUNTAR ANTES, VALIDAR DESPUÉS
```

---

**Imprime esto. Tenlo a mano. Refiere aquí cuando en duda. ✨**
