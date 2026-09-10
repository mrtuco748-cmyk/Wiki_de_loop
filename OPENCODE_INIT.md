# 🚀 OPENCODE - Sistema de Inicialización de Proyectos v2.0

## Fase 0: Cuestionario de Descubrimiento (ANTES de cualquier análisis)

Este cuestionario debe hacerse **UNA SOLA VEZ** al inicio del proyecto. Las respuestas se guardan en `opencode.json`.

### Bloque 1: Naturaleza del Proyecto
- **¿Qué tipo de proyecto es?** (web app, CLI tool, librería, mobile app, API, backend, monorepo, otro)
- **¿Cuál es el objetivo principal?** (descripción en 1-2 líneas)
- **¿A quién va dirigido?** (usuarios finales, desarrolladores, administradores, etc.)
- **¿Qué problema resuelve o qué valor aporta?**

### Bloque 2: Escala y Complejidad
- **¿Cuántas personas trabajan en esto?** (solo tú, equipo pequeño <5, equipo mediano 5-15, equipo grande)
- **¿Cuánto código estimado?** (< 5k LOC, 5-20k, 20-50k, 50-100k, > 100k)
- **¿Es producción o experimental?** (protipo, MVP, producción crítica, etc.)
- **¿Qué nivel de documentación necesitas?** (minimal, estándar, exhaustiva)
- **¿Qué nivel de testing es requerido?** (none, basic coverage, high coverage, 100% TDD)

### Bloque 3: Stack Tecnológico
- **Lenguajes principales** (lista)
- **Frameworks/librerías principales** (lista)
- **Base de datos** (ninguna, relacional, NoSQL, otro)
- **Infraestructura** (local, serverless, Docker, K8s, etc.)
- **¿Hay dependencias externas críticas?** (APIs terceros, servicios, etc.)

### Bloque 4: Preferencias de Trabajo
- **¿Cómo prefieres que opencode trabaje?** (propositivo, consultivo, solo ejecución)
- **¿Prefieres que los cambios sean incremental (paso a paso con validación) o rápido (batch)?**
- **¿Hay reglas de naming específicas que debo seguir?**
- **¿Qué convenciones son NON-NEGOCIABLES en este proyecto?**
- **¿Hay herramientas o procesos específicos que debo respetar?** (CI/CD, linters, formatters)

### Bloque 5: Contexto de Negocio/Dominio
- **¿Cuáles son los conceptos clave del dominio?** (ej: para ecommerce: carrito, pedido, envío, etc.)
- **¿Hay regulaciones o restricciones?** (GDPR, PCI-DSS, accesibilidad, etc.)
- **¿Cuáles son los User Flows críticos?** (el top 3 de acciones que debe soportar)
- **¿Hay partes del código que son especialmente frágiles o complejas?**

### Bloque 6: Historial y Contexto
- **¿Este es un proyecto nuevo o existing?**
- **Si es existing, ¿cuál es el estado actual?** (en desarrollo, mantenimiento, refactoring)
- **¿Hay decisiones pasadas que deba conocer?** (por qué se eligió este stack, qué se intentó, etc.)
- **¿Hay "zonas de dolor" conocidas?** (partes del código que causan bugs, que son lentas, etc.)

---

## Fase 1: Análisis Automático

Una vez completado el cuestionario, opencode:
1. Escanea TODO el repositorio (estructura, código, tests, commits, configuración)
2. Genera los 8 documentos de contexto (ver más abajo)
3. **PAUSA y presenta hallazgos** para validación del usuario

---

## Fase 2: Generación de Documentación Base

Se crean estos archivos en `docs/contexto/`:

### Documentos de Contexto (8 archivos obligatorios)

#### 1. `arquitectura.md`
- **Stack tecnológico** (detallado, con versiones si aplica)
- **Mapa de carpetas** (descripción breve de cada carpeta principal)
- **Flujo de datos** (cómo entra la información, se procesa, se guarda)
- **Diagramas ASCII** de flujos principales (si son complejos)
- **Sección "Lo que NO existe"** (features esperables que faltan: auth, logging, monitoring, etc.)
- **Escalabilidad actual** (¿puede crecer? ¿dónde está el cuello de botella?)

#### 2. `convenciones.md`
- **Estilo de código** (naming: camelCase, snake_case, PascalCase, etc.)
- **Formato** (indentación, espacios, líneas máx, etc.)
- **Imports** (orden, cómo se organizan)
- **Patrones usados** (Factory, Singleton, Provider, BLoC, Custom Hooks, etc.)
- **Patrones prohibidos** (qué NO usar)
- **Tests** (framework, ubicación, formato de nombres, cobertura)
- **Commits** (formato: Conventional Commits? Otro?)
- **Excepciones/Irregularidades** (dónde no se sigue la convención y por qué)

#### 3. `decisiones.md`
Estructura: para cada decisión importante (mínimo 5-10):
```
### D-N: [Título breve de la decisión]
- **Fecha**: YYYY-MM-DD
- **Qué se decidió**: [1-2 líneas claras]
- **Por qué**: [razones técnicas, de negocio, contexto]
- **Alternativas descartadas**: [qué se consideró y por qué no]
- **Impacto**: [qué cambió, qué afecta]
- **Revisable**: [sí/no] - ¿puede cambiar en el futuro?
```

#### 4. `glosario.md`
- **Términos del dominio** (negocio, no técnicos)
  ```
  - **Término**: Definición breve en contexto del proyecto
  ```
- **Entidades principales** (modelos, conceptos del sistema)
- **Siglas internas** (variables comunes, prefijos, ej: `usr_` para usuario)
- **Acrónimos del negocio** (ej: SLA, NPS, CAC, etc.)

#### 5. `flujo-de-trabajo.md`
- **Setup inicial** (cómo clonar, instalar, correr localmente)
- **Pasos para hacer un cambio**:
  1. Branching strategy (main, develop, feature/..., etc.)
  2. Testing antes de push
  3. Commit message format
  4. PR/MR process
  5. Code review checklist
- **Checklist de "terminado"** (qué debe cumplir TODO PR)
- **Proceso de deploy** (si existe)
  - Ambientes (dev, staging, prod)
  - Triggers (manual, automático, approval)
  - Rollback procedure
- **Troubleshooting** (errores comunes y cómo resolverlos)

#### 6. `errores-conocidos.md`
Lista de problemas existentes:
- **Bugs activos** (comportamiento inesperado)
- **Code smells** (duplicación, funciones largas, etc.)
- **Inconsistencias** (donde el código no sigue sus propias reglas)
- **Gotchas** (cosas no obvias que causan problemas)
- **Deuda técnica** (refactors pendientes, librerías desactualizadas, etc.)
- **Secretos expuestos** (API keys, tokens encontrados)
- **Performance issues** (bottlenecks conocidos)
- **Security concerns** (validaciones débiles, inyecciones posibles, etc.)

Formato:
```
### [Severidad] - [Nombre del problema]
- **Dónde**: archivo/función
- **Qué pasa**: descripción clara
- **Por qué es problema**: impacto
- **Solución temporal**: workaround si existe
- **Fix permanente**: qué se necesita hacer
- **Prioridad**: CRÍTICA / ALTA / MEDIA / BAJA
```

#### 7. `historial.md`
**Formato inicial (vacío, listo para llenar)**
```markdown
# Historial de Cambios y Aprendizajes

## [YYYY-MM-DD] - [Categoría: DECISIÓN|BUG|REFACTOR|APRENDIZAJE|DISCOVERY]
**Resumen**: [1 línea]
**Cambios realizados**: [puntos clave]
**Lecciones**: [qué aprendimos]
**Impacto**: [qué afecta]
**Relacionado con**: [archivo de contexto afectado]

---
```

#### 8. `forma-de-trabajo-con-el-usuario.md`
**Configuración de la relación opencode-usuario**
```markdown
# Forma de Trabajo con el Usuario

## 🎯 Modo de Operación
[DEFINIR: propositivo / consultivo / ejecución / mixto]

## 📋 Checklist Antes de Cada Acción Significativa
- [ ] Leer los 8 docs de contexto (especialmente el relevante)
- [ ] Identificar qué cambiaría
- [ ] Comunicar al usuario ANTES de actuar
- [ ] Esperar confirmación explícita (sí/no/modificar)
- [ ] Listar alternativas si hay varias opciones
- [ ] Validar cambios post-ejecución con el usuario

## ⚙️ Configuración Específica del Usuario
[Se llena en primera sesión]
- Preferencias de velocidad: ___
- Preferencias de detalle: ___
- Reglas NO-NEGOCIABLES: ___
- Herramientas obligatorias: ___

## 📝 Documentación Automática
- Después de cada acción significativa, actualizar:
  - `historial.md`: qué se hizo
  - `decisiones.md`: si fue una decisión
  - `errores-conocidos.md`: si se descubrieron problemas
  - `convenciones.md`: si se establecen nuevas convenciones

---
```

### Documentos de Configuración (2 archivos)

#### 9. `AGENTS.md`
**Instrucciones para opencode (lee esto en CADA sesión)**

```markdown
# 🤖 AGENTS.md - Instrucciones para OpenCode

## Protocolo de Inicio (En cada sesión nueva)

### 1️⃣ Carga Contextual
- [ ] Leer `docs/contexto/forma-de-trabajo-con-el-usuario.md` PRIMERO
- [ ] Leer todos los 8 docs de contexto en este orden:
  1. `glosario.md` (entender el lenguaje del proyecto)
  2. `arquitectura.md` (entender la estructura)
  3. `convenciones.md` (entender las reglas)
  4. `decisiones.md` (entender el por qué)
  5. `flujo-de-trabajo.md` (entender cómo se trabaja)
  6. `errores-conocidos.md` (entender las trampas)
  7. `historial.md` (entender la evolución)
  8. Revisar cambios recientes si existen

### 2️⃣ Validación de Contexto
- Si algún doc está vacío o incompleto, AVISAR al usuario
- Si hay inconsistencias entre docs, ALERTAR
- Si hay cambios en el código no reflejados en docs, ACTUALIZAR

### 3️⃣ Modo de Operación
- **SIEMPRE preguntar antes de cambios mayores**
- **NUNCA asumir preferencias del usuario**
- Si `forma-de-trabajo-con-el-usuario.md` está vacío:
  - Hacer las preguntas del Bloque 4 y 6 de OPENCODE_INIT.md
  - Guardar respuestas en ese archivo
  - Esperar confirmación antes de continuar

### 4️⃣ Proceso de Cambios (PASO A PASO)

Para CUALQUIER cambio significativo:

1. **COMUNICAR**: Qué quiero hacer
   - Mostrar el cambio propuesto
   - Explicar impacto
   - Listar alternativas

2. **VALIDAR**: Esperar confirmación del usuario
   - ✅ = proceder
   - ❌ = cancelar, preguntar qué cambiar
   - 🤔 = usuario propone variación, volver a paso 1

3. **IMPLEMENTAR**: Hacer el cambio
   - Seguir convenciones del proyecto
   - Parar después de cada archivo/función importante
   - Mostrar resultado

4. **VERIFICAR**: Validar lo hecho
   - ¿Compila/funciona?
   - ¿Sigue convenciones?
   - ¿Tiene errores obvios?
   - **PARAR Y REPORTAR errores/concerns ANTES de continuar**

5. **DOCUMENTAR**: Actualizar contexto
   - Agregar entrada a `historial.md`
   - Actualizar `decisiones.md` si aplica
   - Actualizar `errores-conocidos.md` si aplica
   - Actualizar `convenciones.md` si establece nuevas

### 5️⃣ Checklist de Calidad (Hacer ANTES de dar por terminado)

Validar:
- [ ] El código sigue convenciones del proyecto
- [ ] No hay imports muertos
- [ ] No hay duplicación de lógica
- [ ] No hay valores hardcodeados (excepto constantes)
- [ ] Los cambios afectan a los tests (¿qué hay que actualizar?)
- [ ] Los commits tienen mensaje claro
- [ ] No hay secretos o datos sensibles expuestos
- [ ] La documentación está actualizada
- [ ] No hay code smells obvios

---

## Modo Escalado (para cambios complejos)

Si el cambio afecta múltiples archivos o es arquitectónico:

1. **Crear plan detallado** (mostrar al usuario)
2. **Desglosar en pasos pequeños**
3. **Validar después de cada paso**
4. **Documentar transversalmente** (qué cambió dónde)
5. **Hacer testing manual** (si hay que probar la integración)

---

## Reglas NO-NEGOCIABLES

- **Basarse SOLO en lo que ve en el repo**
- **Documentar TODO lo que se hace**
- **Preguntar ANTES, no después**
- **Validar SIEMPRE la calidad**
- **No asumir nada**: preguntar en caso de duda

---
```

#### 10. `opencode.json`
**Configuración del agente y contexto**

```json
{
  "projectMetadata": {
    "name": "[SE LLENA EN INIT]",
    "description": "[SE LLENA EN INIT]",
    "type": "[web-app|api|cli|library|mobile|monorepo|other]",
    "createdAt": "YYYY-MM-DD",
    "version": "0.0.1"
  },
  
  "discoveryAnswers": {
    "bloque1": {
      "projectType": "[RESPUESTA]",
      "mainObjective": "[RESPUESTA]",
      "targetAudience": "[RESPUESTA]",
      "valueProposition": "[RESPUESTA]"
    },
    "bloque2": {
      "teamSize": "[RESPUESTA]",
      "estimatedLOC": "[RESPUESTA]",
      "environment": "[prototipo|MVP|producción]",
      "documentationLevel": "[minimal|estándar|exhaustiva]",
      "testingLevel": "[none|basic|high|100%]"
    },
    "bloque3": {
      "languages": "[ARRAY]",
      "frameworks": "[ARRAY]",
      "database": "[RESPUESTA]",
      "infrastructure": "[RESPUESTA]",
      "externalDependencies": "[RESPUESTA]"
    },
    "bloque4": {
      "workStyle": "[propositivo|consultivo|ejecución]",
      "changeSpeed": "[incremental|rápido|flexible]",
      "namingRules": "[RESPUESTA]",
      "nonNegotiables": "[ARRAY]",
      "mandatoryTools": "[ARRAY]"
    },
    "bloque5": {
      "domainConcepts": "[ARRAY]",
      "regulations": "[ARRAY]",
      "criticalUserFlows": "[ARRAY]",
      "fragileAreas": "[ARRAY]"
    },
    "bloque6": {
      "projectStatus": "[new|existing]",
      "currentState": "[RESPUESTA]",
      "historicalDecisions": "[ARRAY]",
      "painPoints": "[ARRAY]"
    }
  },

  "agentConfig": {
    "version": "2.0",
    "contextPath": "docs/contexto",
    "contextFiles": [
      "forma-de-trabajo-con-el-usuario.md",
      "glosario.md",
      "arquitectura.md",
      "convenciones.md",
      "decisiones.md",
      "flujo-de-trabajo.md",
      "errores-conocidos.md",
      "historial.md"
    ],
    "validateBeforeEachAction": true,
    "autoDocumentChanges": true,
    "requiredApprovals": true,
    "validationLevel": "strict"
  },

  "qualityChecklist": {
    "codeConventions": true,
    "deadImports": true,
    "duplicateLogic": true,
    "hardcodedValues": true,
    "testImpact": true,
    "commitMessages": true,
    "secretsExposed": false,
    "codeSmells": true
  },

  "lastSession": "YYYY-MM-DD HH:MM",
  "lastUpdated": "YYYY-MM-DD"
}
```

---

## Fase 3: Validación y Feedback

Después de generar los 8 docs + 2 de config:

### Presentación al Usuario (PAUSA)
1. **Resumen de hallazgos** (qué encontré)
2. **Documentos generados** (qué se creó)
3. **Preguntas de validación**:
   - ¿Esto es correcto?
   - ¿Qué está incompleto?
   - ¿Qué está mal?
   - ¿Qué falta?
4. **Ajustes iterativos** (actualizar basado en feedback)

---

## Fase 4: En Adelante (Cada Sesión)

```
USER: "Necesito hacer X"
  ↓
OPENCODE: Lee los 8 docs (2 min)
  ↓
OPENCODE: "¿Entiendo que quieres hacer X. Esto impactaría Y y Z. ¿Procedo así? [Propone alternativa]"
  ↓
USER: Confirma / Modifica
  ↓
OPENCODE: Implementa paso a paso
  ↓
OPENCODE: Valida cada paso (busca bugs, code smells, inconsistencias)
  ↓
OPENCODE: "Listo! Cambio: [resumen]. Afecta a: [archivos]. Documentado en: [historia]"
```

---
