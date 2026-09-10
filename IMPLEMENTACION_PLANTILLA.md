# 📋 Guía de Implementación - Plantilla OPENCODE v2.0

## 🎯 Objetivo
Implementar la plantilla OPENCODE en tu proyecto existente o nuevo, estableciendo documentación de contexto que permita a OpenCode trabajar eficientemente desde el primer día.

---

## Fase 0: Antes de Empezar

### Checklist Previo
- [ ] Tienes acceso completo al repositorio
- [ ] Puedes crear carpetas y archivos en la raíz
- [ ] Entiendes la estructura actual de tu proyecto
- [ ] Tienes 1-2 horas libres para completar el cuestionario

### Decisión Crítica: ¿Proyecto Nuevo o Existing?

**NUEVO**: Completa OPENCODE_INIT.md desde cero. Salta a "Fase 1: Cuestionario"

**EXISTING**: Haz el cuestionario reflejando el estado ACTUAL del proyecto. Luego opencode analizará y generará docs.

---

## Fase 1: El Cuestionario Discovery (30-45 min)

### Paso 1.1 - Prepara tus respuestas
Abre `OPENCODE_INIT.md` y responde **TODAS** estas preguntas:

```
Bloque 1: Naturaleza del Proyecto
- ¿Qué tipo de proyecto es?
- ¿Cuál es el objetivo principal?
- ¿A quién va dirigido?
- ¿Qué problema resuelve?

Bloque 2: Escala y Complejidad
- ¿Cuántas personas?
- ¿Cuánto código?
- ¿Producción o experimental?
- ¿Nivel de documentación?
- ¿Nivel de testing?

Bloque 3: Stack Tecnológico
- Lenguajes
- Frameworks
- Base de datos
- Infraestructura
- Dependencias externas

Bloque 4: Preferencias de Trabajo
- Cómo quieres que opencode trabaje
- Velocidad: incremental vs rápido
- Reglas de naming
- Non-negotiables
- Herramientas obligatorias

Bloque 5: Contexto de Negocio
- Conceptos clave del dominio
- Regulaciones/restricciones
- Top 3 User Flows críticos
- Partes frágiles del código

Bloque 6: Historial y Contexto
- Nuevo o existing
- Estado actual
- Decisiones pasadas
- Zonas de dolor
```

### Paso 1.2 - Comunica tus respuestas a OpenCode
Comparte las respuestas (puedes:
- Copiarlas en el chat directo
- Compartir un archivo
- Responder punto por punto)

### Paso 1.3 - OpenCode valida y pregunta dudas
OpenCode pedirá aclaraciones si hay inconsistencias o ambigüedades.

**IMPORTANTE**: Si eres vago en las respuestas, OpenCode tendrá que asumir cosas, lo que es malo. Sé específico.

---

## Fase 2: Análisis Automático (5-10 min)

OpenCode:
1. **Escanea tu repositorio** (estructura, código, tests, commits, config)
2. **Identifica patrones** (qué frameworks usa, cómo nombra cosas, qué patrones sigue)
3. **Detecta problemas** (bugs, code smells, inconsistencias, deuda técnica)
4. **Mapea decisiones** (por qué hace así las cosas)

---

## Fase 3: Generación de Docs (5-10 min)

OpenCode genera estos 8 archivos en `docs/contexto/`:

```
docs/
├── contexto/
│   ├── 1. arquitectura.md           ← Estructura tech
│   ├── 2. convenciones.md           ← Reglas de código
│   ├── 3. decisiones.md             ← Por qué hace así
│   ├── 4. glosario.md               ← Lenguaje del proyecto
│   ├── 5. flujo-de-trabajo.md       ← Cómo trabaja
│   ├── 6. errores-conocidos.md      ← Gotchas y bugs
│   ├── 7. historial.md              ← Log de cambios
│   └── 8. forma-de-trabajo-con-el-usuario.md ← Config opencode
├── AGENTS.md                         ← Instrucciones para opencode
└── opencode.json                     ← Configuración JSON
```

---

## Fase 4: Validación (10-15 min)

### Paso 4.1 - OpenCode presenta hallazgos

Te mostrará:
- **Resumen**: "Tu proyecto es X, usa Y stack, tiene Z características"
- **Hallazgos clave**: Patrones identificados, problemas encontrados
- **Gaps**: Qué falta (tests, CI/CD, auth, logging, etc.)

### Paso 4.2 - Tú validas
Para CADA documento:
1. ¿Esto es correcto?
2. ¿Qué está incompleto?
3. ¿Qué está mal?
4. ¿Qué falta?

Usa este formato:
```
## ✅ arquitectura.md
- [x] Stack correcto
- [x] Mapa de carpetas claro
- [ ] Falta descripción de flujo de datos
- [ ] "Lo que NO existe" está incompleto
- 🔧 Cambio: La arquitectura es MVC, no hexagonal

## ✅ convenciones.md
- [x] Naming correcto
- [ ] Falta describir excepciones
- 🔧 Cambio: El proyecto NO usa TypeScript, borremos eso

...
```

### Paso 4.3 - OpenCode ajusta
Actualiza los docs basado en tu feedback. Itera hasta que todo sea ✅.

---

## Fase 5: Setup de Preferencias (5-10 min)

OpenCode completa:

### Archivo: `docs/contexto/forma-de-trabajo-con-el-usuario.md`

```markdown
# Forma de Trabajo con el Usuario

## 🎯 Modo de Operación
[Tú eliges]:
- 🚀 PROPOSITIVO: "Creo que deberías hacer X. Aquí está implementado. ¿Ok?"
- 💬 CONSULTIVO: "Quieres hacer X. Aquí hay 3 opciones. ¿Cuál prefieres?"
- ⚡ EJECUCIÓN: "Entendido. Haré X. Listo!" (después me avisa)
- 🔄 MIXTO: Combina según la situación

## ⏱️ Velocidad de Cambios
[Tú eliges]:
- 🐢 INCREMENTAL: Paso a paso, validando cada paso (lento, seguro)
- 🚂 RÁPIDO: Hace varias cosas, me avisa al final (rápido, menos control)
- 🎯 FLEXIBLE: Depende de la complejidad

## 📝 Nivel de Detalle
[Tú eliges]:
- 📋 MINIMAL: Solo lo esencial
- 📖 ESTÁNDAR: Lo importante
- 🔬 EXHAUSTIVO: Todo, incluyendo alternativas descartadas

## 🚫 Non-Negotiables
[Tú defines]:
- Herramientas que DEBE usar
- Reglas que NUNCA puede romper
- Áreas que NUNCA puede tocar
- Convenciones sagradas

## 🛠️ Herramientas Mandatorias
[Tú defines]:
- Linter: eslint / prettier / otros
- Testing: jest / vitest / otros
- CI/CD: GitHub Actions / GitLab CI / otros
- Formato de commits: Conventional / Otros

## 📊 Preferencias Generales
[Completar]:
- Prefieres que esté en [propositivo/consultivo/ejecución]: ___
- Cambios [incremental/rápido]: ___
- Detalle [minimal/estándar/exhaustivo]: ___
- Frecuencia de actualizaciones: [cada paso/final/cada N pasos]: ___
- Quiero que NO haga X bajo ninguna circunstancia: ___

```

### Archivo: `opencode.json`

Se llena automáticamente con:
- Tus respuestas al cuestionario (descubrimiento)
- Configuración de operación (forma de trabajo)
- Metadata del proyecto
- Checklist de calidad

---

## Fase 6: Primera Prueba (10-20 min)

### Paso 6.1 - Dale una tarea pequeña a OpenCode

Ejemplo:
```
"Necesito agregar un archivo README.md con instrucciones de setup"
```

### Paso 6.2 - Valida que siga el protocolo
OpenCode debe:
1. ✅ Leer los 8 docs (o avisar si faltan)
2. ✅ Preguntar antes de actuar ("¿Procedo así?")
3. ✅ Hacer cambios paso a paso
4. ✅ Validar después ("No hay errores obvios")
5. ✅ Documentar todo (actualizar historial.md, etc.)

### Paso 6.3 - Feedback inicial
¿Funcionó bien? ¿Qué cambiaría?

---

## Fase 7: En Adelante (Cada Sesión)

### Protocolo Estándar

**Sesión N:**
```
TÚ: "Necesito hacer X"

OPENCODE: 
  1. Lee los 8 docs (forma-de-trabajo, glosario, arquitectura...)
  2. Valida contexto (¿docs actualizados? ¿cambios sin documentar?)
  3. Propone plan: "Voy a hacer A, B, C. ¿Ok?"
  4. TÚ: Confirmas o modificas
  5. OPENCODE: Implementa paso a paso
     - Cada paso: "Hice esto. ¿Ok?" + valida calidad
     - Si encuentra problemas: "⚠️ DETENTE. Encontré X"
  6. Al final: "Listo! Cambios: [resumen]. Documentado en historial.md"
  7. Actualiza automáticamente:
     - historial.md (qué se hizo)
     - decisiones.md (si fue decisión)
     - errores-conocidos.md (si encontró bugs)
     - forma-de-trabajo-con-el-usuario.md (si aprendió preferencias)
```

---

## 🎯 Checklist de Implementación Completa

- [ ] Respondiste TODO el cuestionario (Bloque 1-6)
- [ ] OpenCode analizó tu repositorio
- [ ] Se generaron 8 docs + 2 de config
- [ ] Validaste los 8 docs (¿correctos, completos?)
- [ ] Completaste `forma-de-trabajo-con-el-usuario.md`
- [ ] Completaste `opencode.json`
- [ ] Hiciste una prueba pequeña con OpenCode
- [ ] Todo está en `docs/contexto/` + raíz del proyecto
- [ ] Archivos en git (si usas git)

---

## 🚀 Próximos Pasos

Una vez todo validado:

1. **Usa OpenCode normalmente**
   - Dale tareas ("Agregar feature X", "Refactorizar Y", "Revisar Z")
   - Él seguirá el protocolo del AGENTS.md
   - Todos los cambios se documentarán automáticamente

2. **Mantén docs actualizados**
   - Cada sesión, OpenCode valida contexto
   - Si hay cambios sin documentar, los captura
   - Si hay inconsistencias, alerta

3. **Evoluciona tu proceso**
   - Si algo en el protocolo no funciona, cámbialo
   - Agrega reglas nuevas a `forma-de-trabajo-con-el-usuario.md`
   - Documenta lecciones en `historial.md`

---

## 🐛 Troubleshooting

### "OpenCode no sigue el protocolo"
- Revisa que haya leído `AGENTS.md` y `forma-de-trabajo-con-el-usuario.md`
- Tal vez esos archivos tienen instrucciones conflictivas
- Clarifica prioridades en `forma-de-trabajo-con-el-usuario.md`

### "Los docs están desactualizados"
- OpenCode debe validar cada sesión
- Si no lo hace, agrega a su checklist de inicio
- Documenta en `historial.md` qué se desincronizó

### "No sé qué debería estar en [documento X]"
- Mira los ejemplos en `OPENCODE_INIT.md`
- Pregunta a OpenCode ("¿Qué debería tener arquitectura.md?")
- Itera hasta que tenga sentido

### "Quiero cambiar el protocolo"
- Todo es configurable en `forma-de-trabajo-con-el-usuario.md` y `opencode.json`
- Documenta el cambio en `historial.md`
- OpenCode leerá las nuevas reglas en la próxima sesión

---

## 📞 Soporte y Mejoras

Si algo no funciona o hay preguntas:

1. Revisa `OPENCODE_INIT.md` (instrucciones principales)
2. Revisa `AGENTS.md` (protocolo de OpenCode)
3. Revisa `docs/contexto/forma-de-trabajo-con-el-usuario.md` (tu configuración)
4. Pregunta a OpenCode ("¿Estoy usando bien el sistema?")
5. Documenta el issue en `errores-conocidos.md`

---

**¡Listo para empezar! 🚀**
