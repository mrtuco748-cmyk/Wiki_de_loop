# 📦 Template Vacío - Archivos para Copiar a Cada Proyecto

Copia los siguientes archivos a tu proyecto después de responder el cuestionario.

---

## 📂 Estructura de Carpetas

```
mi-proyecto/
├── docs/
│   └── contexto/
│       ├── 1-arquitectura.md
│       ├── 2-convenciones.md
│       ├── 3-decisiones.md
│       ├── 4-glosario.md
│       ├── 5-flujo-de-trabajo.md
│       ├── 6-errores-conocidos.md
│       ├── 7-historial.md
│       └── 8-forma-de-trabajo-con-el-usuario.md
├── AGENTS.md
├── opencode.json
└── ... (resto del proyecto)
```

---

## 📄 Archivo 1: `docs/contexto/1-arquitectura.md`

```markdown
# Arquitectura del Proyecto

## Stack Tecnológico

### Lenguajes
- [COMPLETAR]

### Frameworks y Librerías
- [COMPLETAR]

### Herramientas y Utilidades
- [COMPLETAR]

### Base de Datos
- [COMPLETAR]

### Infraestructura
- [COMPLETAR]

### Versiones Clave
| Componente | Versión | Estado |
|---|---|---|
| [Completar] | [v.x.x] | [activo/deprecated/planning] |

---

## Mapa de Carpetas

```
[DIBUJAR LA ESTRUCTURA]
```

### Descripción de Carpetas Principales

#### `/src`
[DESCRIBIR]

#### `/tests`
[DESCRIBIR]

#### `/docs`
[DESCRIBIR]

#### `/config` (si existe)
[DESCRIBIR]

[AGREGAR MÁS SEGÚN SEA NECESARIO]

---

## Flujo de Datos

### Entrada de Información
[DESCRIBIR: ¿Cómo entra información? ¿APIs? ¿Archivos? ¿Usuarios?]

### Procesamiento
[DESCRIBIR: ¿Cómo se procesa? ¿Transformaciones? ¿Validaciones?]

### Almacenamiento
[DESCRIBIR: ¿Dónde se guarda? ¿Base de datos? ¿Archivos? ¿Caché?]

### Salida
[DESCRIBIR: ¿Cómo se devuelve? ¿APIs? ¿Reportes? ¿UI?]

### Diagrama ASCII (si es complejo)
```
[DIBUJAR FLUJO]
```

---

## Escalabilidad Actual

### Fortalezas
- [LISTAR]

### Cuellos de Botella
- [LISTAR]

### Capacidad de Crecimiento
- [DESCRIBIR: ¿Puede crecer? ¿Hasta dónde?]

---

## Lo Que NO Existe

### Features Esperables Faltantes
- [ ] [COMPLETAR]
- [ ] [COMPLETAR]
- [ ] [COMPLETAR]

### Infraestructura Faltante
- [ ] [COMPLETAR]
- [ ] [COMPLETAR]

### No-Funcionales Faltantes
- [ ] Logging centralizado
- [ ] Monitoring
- [ ] Alertas
- [ ] [COMPLETAR]

### Por Qué Falta

[EXPLICAR PARA CADA FEATURE]

---
```

## 📄 Archivo 2: `docs/contexto/2-convenciones.md`

```markdown
# Convenciones del Proyecto

## Estilo de Código

### Naming Conventions

#### Variables
- Patrón: [camelCase|snake_case|SCREAMING_SNAKE_CASE]
- Ejemplos:
  ```
  [PONER EJEMPLOS REALES]
  ```

#### Funciones/Métodos
- Patrón: [camelCase|PascalCase]
- Prefijos especiales: [get_, set_, is_, has_, etc.]
- Ejemplos:
  ```
  [PONER EJEMPLOS REALES]
  ```

#### Clases/Tipos
- Patrón: [PascalCase]
- Sufijos especiales: [-Controller, -Service, -Interface, etc.]
- Ejemplos:
  ```
  [PONER EJEMPLOS REALES]
  ```

#### Constantes
- Patrón: [SCREAMING_SNAKE_CASE|camelCase]
- Ejemplos:
  ```
  [PONER EJEMPLOS REALES]
  ```

#### Archivos y Carpetas
- Patrón: [kebab-case|snake_case|camelCase]
- Convención: [un archivo por tipo|agrupar por feature]
- Ejemplos:
  ```
  [PONER EJEMPLOS REALES]
  ```

---

### Formato de Código

#### Indentación
- [Espacios|Tabs]: [2|4] caracteres
- Herramienta: [prettier|eslint|manual]

#### Línea Máxima
- Ancho máximo: [80|100|120|otro]

#### Espacios en Blanco
- Espacio alrededor de operadores: [sí|no]
- Espacio en brackets: [sí|no]
- Ejemplos:
  ```
  [PONER EJEMPLO CORRECTO]
  [PONER EJEMPLO INCORRECTO]
  ```

#### Comillas
- Usar: ["comillas dobles"|'comillas simples'|backticks]
- Excepciones: [LISTAR]

---

### Imports

#### Orden de Imports
```
1. [Librerías estándar]
2. [Librerías terceros]
3. [Imports locales]
4. [Imports relativos]
```

#### Ejemplos
```javascript
// ✅ CORRECTO
import fs from 'fs';
import React from 'react';
import { Helper } from './lib/helper';
import '../styles/main.css';

// ❌ INCORRECTO
import { Helper } from './lib/helper';
import React from 'react';
```

#### Reglas Especiales
- [Completar]

---

## Patrones Usados

### Patrones Architetónicos
- [Factory|Singleton|Observer|Strategy|etc.]: [DESCRIBIR USO]
- [AGREGAR MÁS]

### Patrones de Código
- [Higher-Order Components|Custom Hooks|Render Props|etc.]: [DESCRIBIR USO]
- [AGREGAR MÁS]

### Patrones de Estado
- [Props drilling|Context|Redux|Zustand|etc.]: [DESCRIBIR USO]

### Patrones de Asincronía
- [Promises|Async-Await|Generators|RxJS|etc.]: [DESCRIBIR USO]

---

## Patrones Prohibidos

### ❌ NO Hacer
- [Patrón 1]: Por qué [EXPLICACIÓN]
- [Patrón 2]: Por qué [EXPLICACIÓN]
- [AGREGAR MÁS]

### Alternativas Recomendadas
- Usar [Patrón A] en lugar de [Patrón Prohibido]

---

## Testing

### Framework
- Framework: [jest|vitest|mocha|pytest|otro]
- Versión: [vX.X]

### Convenciones
- Ubicación: [src/__tests__|tests/|test/]
- Naming: [test.ts|.test.ts|.spec.ts]
- Ejemplos:
  ```
  ✅ src/utils/__tests__/helper.test.ts
  ❌ tests/src-utils-helper.test.ts
  ```

### Cobertura
- Mínimo requerido: [X%]
- Estado actual: [X%]
- Comando: `[npm/yarn/pnpm] test:coverage`

### Patrón AAA (Arrange-Act-Assert)
```javascript
// ✅ CORRECTO
describe('function', () => {
  it('should do X when Y', () => {
    // Arrange
    const input = [SETUP];
    
    // Act
    const result = function(input);
    
    // Assert
    expect(result).toBe([EXPECTED]);
  });
});
```

### Tests por Tipo

#### Unit Tests
- [DESCRIBIR PATRÓN]

#### Integration Tests
- [DESCRIBIR PATRÓN]

#### E2E Tests (si existe)
- [DESCRIBIR PATRÓN]

---

## Commits

### Formato
- Estilo: [Conventional Commits|Semantic|Custom|otro]
- Patrón: `[type]: [message]`

### Tipos
- [feat]: Nueva feature
- [fix]: Bugfix
- [refactor]: Refactoring sin cambio funcional
- [docs]: Cambios de documentación
- [test]: Cambios en tests
- [chore]: Build, deps, etc.
- [AGREGAR MÁS SI APLICA]

### Ejemplos
```
✅ feat: add user authentication
✅ fix: resolve login redirect issue #123
✅ refactor: simplify data transformation logic
❌ update stuff
❌ fixed things
```

### Reglas
- [Primera línea < 50 caracteres]
- [Imperativo: "add", no "added" o "adds"]
- [Referencia issues: "closes #123"]
- [AGREGAR MÁS REGLAS]

---

## Excepciones y Irregularidades

### Dónde NO se Sigue la Convención
- [Archivo/Carpeta]: [EXPLICAR POR QUÉ]
- [AGREGAR MÁS]

### Por Qué
[JUSTIFICAR CADA EXCEPCIÓN]

### ¿Se Puede Cambiar?
- [ ] Sí, es deuda técnica
- [ ] No, hay una razón específica
- [ ] Tal vez, requiere refactoring grande

---
```

## 📄 Archivo 3: `docs/contexto/3-decisiones.md`

```markdown
# Decisiones Técnicas

## Matriz de Decisiones

Cada decisión sigue este formato:

```
### D-N: [Título breve de la decisión]
- **Fecha**: YYYY-MM-DD
- **Contexto**: [Situación que llevó a la decisión]
- **Qué se decidió**: [1-2 líneas claras]
- **Por qué**: [Razones técnicas / negocio / contexto]
- **Alternativas descartadas**: 
  - [Alternativa A]: Por qué no
  - [Alternativa B]: Por qué no
- **Impacto**: [Qué cambió, qué afecta]
- **Tradeoffs**: [Qué ganamos vs qué perdemos]
- **Revisable**: [Sí/No] - ¿Puede cambiar en futuro?
- **Relacionado con**: [Archivos/componentes afectados]
```

---

## Decisiones Identificadas

### D-1: [COMPLETAR]
- **Fecha**: [YYYY-MM-DD]
- **Contexto**: [COMPLETAR]
- **Qué se decidió**: [COMPLETAR]
- **Por qué**: [COMPLETAR]
- **Alternativas descartadas**: 
  - [COMPLETAR]
- **Impacto**: [COMPLETAR]
- **Tradeoffs**: [COMPLETAR]
- **Revisable**: [Sí/No]

### D-2: [COMPLETAR]
[REPETIR ESTRUCTURA]

### D-N: ...

---

## Decisiones por Categoría

### Arquitectura
- [D-X]
- [D-Y]

### Stack Tecnológico
- [D-X]
- [D-Y]

### Patrones
- [D-X]

### CI/CD y Deployment
- [D-X]

### Data y Estado
- [D-X]

### Testing
- [D-X]

---

## Próximas Decisiones Pendientes
- [ ] [TEMA]: [DESCRIBIR DILEMA]
- [ ] [TEMA]: [DESCRIBIR DILEMA]

---
```

## 📄 Archivo 4: `docs/contexto/4-glosario.md`

```markdown
# Glosario del Proyecto

## Términos del Dominio (Negocio)

### [Término 1]
**Definición**: [DESCRIBIR EN CONTEXTO DEL PROYECTO]
**Sinónimos**: [SI EXISTEN]
**Dónde aparece**: [En qué archivos/componentes]
**Ejemplos**: [EJEMPLOS DE USO]

### [Término 2]
[REPETIR ESTRUCTURA]

---

## Entidades Principales

### Modelo/Entidad: [Nombre]
- **Descripción**: [QUÉ ES]
- **Propiedades principales**: 
  - `campo1`: [tipo] - [DESCRIPCIÓN]
  - `campo2`: [tipo] - [DESCRIPCIÓN]
- **Dónde se define**: [archivo]
- **Relaciones**: [Con qué otras entidades se relaciona]
- **Ejemplo**:
  ```javascript
  [CÓDIGO EJEMPLO]
  ```

### Modelo/Entidad: [Nombre]
[REPETIR ESTRUCTURA]

---

## Acrónimos y Siglas Internas

### Variables/Prefijos Comunes
- `usr_`: Usuario (ej: `usr_id`, `usr_email`)
- `auth_`: Autenticación
- `msg_`: Mensajes
- [AGREGAR MÁS]

### Acrónimos del Negocio
- **SLA**: [QUÉ SIGNIFICA EN TU CONTEXTO]
- **NPS**: [QUÉ SIGNIFICA EN TU CONTEXTO]
- [AGREGAR MÁS]

### Acrónimos Técnicos
- **API**: Application Programming Interface
- **JSON**: JavaScript Object Notation
- [AGREGAR MÁS ESPECÍFICOS DEL PROYECTO]

---

## Estados y Enumeraciones Comunes

### Estado de [Entidad]
- `DRAFT`: [DESCRIBIR]
- `ACTIVE`: [DESCRIBIR]
- `ARCHIVED`: [DESCRIBIR]
- [AGREGAR MÁS]

---

## Coloquialismos y Jerga Interna

Si en el team se usan términos especiales:
- **"[Término]"**: [QUÉ SIGNIFICA]
- [AGREGAR MÁS]

---
```

## 📄 Archivo 5: `docs/contexto/5-flujo-de-trabajo.md`

```markdown
# Flujo de Trabajo y Desarrollo

## Setup Inicial

### Requisitos Previos
- [Node.js v18+]
- [npm/yarn/pnpm]
- [Base de datos: [tipo]]
- [Otras herramientas: [lista]]

### Clonar y Instalar
```bash
git clone [REPO_URL]
cd [PROJECT_NAME]
[npm|yarn|pnpm] install
```

### Variables de Entorno
```bash
cp .env.example .env
# Editar .env con tus valores
```

### Correr Localmente
```bash
[npm|yarn|pnpm] dev
# O el comando que corresponda
```

### Verificar Setup
```bash
[npm|yarn|pnpm] test
# Debe pasar todos los tests
```

---

## Pasos para Hacer un Cambio

### 1. Crear Rama
```bash
git checkout -b [tipo]/[descripción-breve]
# Ejemplo: git checkout -b feature/user-authentication
```

**Convención de ramas**:
- `feature/[descripción]`: Nueva feature
- `bugfix/[descripción]`: Bugfix
- `refactor/[descripción]`: Refactoring
- `docs/[descripción]`: Documentación
- `hotfix/[descripción]`: Fixes críticos en prod

### 2. Hacer Cambios
- Seguir convenciones de código (ver `2-convenciones.md`)
- Escribir/actualizar tests
- Documentar cambios significativos

### 3. Testing Local
```bash
# Correr tests
[npm|yarn|pnpm] test

# Verificar linting
[npm|yarn|pnpm] lint

# Verificar formatting
[npm|yarn|pnpm] format
```

**Debe pasar TODO** ✅

### 4. Commit
```bash
git add [archivos]
git commit -m "[tipo]: [mensaje] [#issue]"
```

Formato: Ver `2-convenciones.md` > Commits

### 5. Push
```bash
git push origin [rama]
```

### 6. Pull Request
- [ ] Título claro y descriptivo
- [ ] Descripción del cambio
- [ ] Referencia a issues: "Closes #123"
- [ ] Checklist completado
- [ ] Tests pasando
- [ ] Sin conflictos

### 7. Code Review
- [ ] Almenos 1 aprobación (o [N] según requiera el proyecto)
- [ ] Cambios solicitados abordados
- [ ] CI/CD en verde

### 8. Merge
```bash
# Merge en main/develop
# Eliminar rama
git branch -d [rama]
```

---

## Checklist de "Terminado"

### Antes de Hacer Push
- [ ] Código escrito y funcionando
- [ ] Nuevos tests agregados / existentes actualizados
- [ ] Cobertura de tests aceptable (ver `2-convenciones.md`)
- [ ] Sin warnings de linter
- [ ] Formato de código correcto
- [ ] Commits con mensaje claro
- [ ] Sin archivos sin commitear

### Antes de PR
- [ ] Sin conflictos con main/develop
- [ ] Título y descripción claros
- [ ] Referencias a issues
- [ ] Checklist de PR completado
- [ ] Screenshots/videos si aplica (UI changes)

### Antes de Merge
- [ ] Aprobación(es) de review
- [ ] CI/CD pasando
- [ ] Conversaciones resueltas
- [ ] Tests pasando
- [ ] No hay deuda técnica crítica agregada

---

## Proceso de Deploy

### Ambientes
- **Development**: [DESCRIBIR]
- **Staging**: [DESCRIBIR]
- **Production**: [DESCRIBIR]

### Trigger de Deploy
- [Manual]
- [Automático en merge a main]
- [Otro: DESCRIBIR]

### Pasos de Deploy

#### A Staging
```bash
[COMANDOS/PASOS]
```

#### A Producción
```bash
[COMANDOS/PASOS]
```

### Checklist de Deploy
- [ ] Todos los tests pasan
- [ ] Staging verificado
- [ ] Migrations aplicadas (si aplica)
- [ ] Backups realizados (si aplica)
- [ ] Alertas monitoreadas
- [ ] Plan de rollback claro

### Rollback
Si algo sale mal:
```bash
[COMANDOS PARA ROLLBACK]
```

**Condiciones de rollback**:
- [Listar]

---

## Troubleshooting

### Problema: [DESCRIBIR]
**Síntomas**: [SÍNTOMAS]
**Causa**: [CAUSA]
**Solución**:
```bash
[PASOS]
```

### Problema: [DESCRIBIR]
[REPETIR ESTRUCTURA]

---

## Recursos Útiles
- [Link a documentación interna]
- [Link a wiki]
- [Link a design docs]
- [Contacto de personas clave]

---
```

## 📄 Archivo 6: `docs/contexto/6-errores-conocidos.md`

```markdown
# Errores Conocidos y Deuda Técnica

## Formato de Registro

```
### [SEVERIDAD] - [Nombre del problema]
- **Dónde**: [Archivo/Función/Componente]
- **Qué pasa**: [Descripción clara del problema]
- **Impacto**: [Cómo afecta a usuarios/desarrolladores]
- **Síntomas**: [Cómo se manifiesta]
- **Causa raíz**: [Por qué pasa]
- **Workaround**: [Solución temporal si existe]
- **Fix permanente**: [Qué hace falta]
- **Prioridad**: [CRÍTICA|ALTA|MEDIA|BAJA]
- **Esfuerzo estimado**: [BAJO|MEDIO|ALTO]
- **Asignado a**: [Usuario o "Sin asignar"]
- **Estado**: [ABIERTO|EN PROGRESO|BLOQUEADO]
```

---

## Bugs Activos

### CRÍTICA - [Nombre del bug]
- **Dónde**: [COMPLETAR]
- **Qué pasa**: [COMPLETAR]
- **Impacto**: [COMPLETAR]
- **Workaround**: [COMPLETAR]
- **Fix**: [COMPLETAR]
- **Prioridad**: CRÍTICA

### ALTA - [Nombre del bug]
[REPETIR ESTRUCTURA]

---

## Code Smells

### Duplicación de Lógica
- **Ubicación**: [archivo1] y [archivo2]
- **Descripción**: [QUÉ ESTÁ DUPLICADO]
- **Refactor**: [CÓMO ARREGLARLO]
- **Prioridad**: MEDIA

---

## Inconsistencias

### [Nombre de inconsistencia]
- **Dónde se ve**: [ARCHIVOS]
- **Qué es inconsistente**: [DESCRIBIR]
- **Por qué ocurre**: [EXPLICACIÓN]
- **Cómo fix**: [SOLUCIÓN]

---

## Gotchas (Cosas No Obvias)

### [Nombre del gotcha]
- **Descripción**: [DESCRIBIR LA TRAMPA]
- **Cuándo ocurre**: [EN QUÉ SITUACIONES]
- **Cómo evitar**: [RECOMENDACIONES]
- **Ejemplo**: [CÓDIGO]

---

## Deuda Técnica

### Refactors Pendientes
- [ ] [Descripción]: En [archivo]. Esfuerzo: [BAJO|MEDIO|ALTO]
- [ ] [Descripción]: En [archivo]. Esfuerzo: [BAJO|MEDIO|ALTO]

### Librerías Desactualizadas
| Librería | Versión Actual | Última | Estado |
|---|---|---|---|
| [LIB] | [v.1.0] | [v.2.0] | [SEGURA|DEPRECADA|INSEGURA] |

### Configuración Mejorable
- [Descripción]
- [Descripción]

---

## Secretos y Seguridad

### Secretos Expuestos Históricos
- [ ] [Describir]: Encontrado en [commit/branch]. Revocado: [SÍ/NO]

### Vulnerabilidades Conocidas
- [ ] [CVE/Descripción]: En [librería]. Impacto: [BAJO|MEDIO|ALTO]

### Validaciones Débiles
- **En**: [Función/Endpoint]
- **Problema**: [DESCRIBIR]
- **Riesgo**: [Inyección SQL, XSS, etc.]
- **Fix**: [SOLUCIÓN]

---

## Performance Issues

### Bottleneck: [Nombre]
- **Ubicación**: [Función/Endpoint]
- **Síntomas**: [Se pone lento cuando...]
- **Causa**: [ANÁLISIS]
- **Workaround**: [SI EXISTE]
- **Fix**: [OPTIMIZACIÓN NECESARIA]

---

## Últimas Actualizaciones
- Última revisión: YYYY-MM-DD
- Revisado por: [NOMBRE]
- Próxima revisión programada: YYYY-MM-DD

---
```

## 📄 Archivo 7: `docs/contexto/7-historial.md`

```markdown
# Historial de Cambios y Aprendizajes

## Formato de Entrada

```markdown
## [YYYY-MM-DD HH:MM] - [Categoría]
**Resumen**: [1 línea clara]

**Cambios realizados**:
- [Punto 1]
- [Punto 2]

**Lecciones aprendidas**:
- [Lección 1]
- [Lección 2]

**Impacto**:
- [Qué cambió en el sistema]
- [Qué afecta esta acción]

**Relacionado con**:
- `decisiones.md`: D-X
- `convenciones.md`: [SECCIÓN]
- `errores-conocidos.md`: [ISSUE]

**Cambios en docs**:
- Actualizado: [ARCHIVO]
- Actualizado: [ARCHIVO]
```

---

## Registro de Cambios

### [Fecha] - [Categoría]
**Resumen**: [COMPLETAR]
**Cambios realizados**: [COMPLETAR]
**Lecciones**: [COMPLETAR]
**Impacto**: [COMPLETAR]
**Relacionado con**: [COMPLETAR]

---

## Categorías de Entrada
- **DECISIÓN**: Se tomó una decisión importante
- **BUG**: Se encontró y/o arregló un bug
- **REFACTOR**: Se refactorizó código
- **FEATURE**: Se agregó feature nueva
- **APRENDIZAJE**: Se descubrió algo importante
- **DISCOVERY**: Se identificó un problema/oportunidad

---

## Próximo Check-in
Fecha: [YYYY-MM-DD]
Responsable: [NOMBRE]
Objetivos: [LISTAR]

---
```

## 📄 Archivo 8: `docs/contexto/8-forma-de-trabajo-con-el-usuario.md`

```markdown
# Forma de Trabajo con el Usuario

## 🎯 Modo de Operación General
**Elegido**: [propositivo|consultivo|ejecución|mixto]

### Descripción
[EXPLICAR QUÉ SIGNIFICA PARA ESTE PROYECTO]

### Ejemplos de Interacción
```
[EJEMPLO 1]
[EJEMPLO 2]
```

---

## ⏱️ Velocidad de Cambios
**Elegida**: [incremental|rápido|flexible]

### Qué Significa
[EXPLICAR]

### Por Qué Esta Elección
[JUSTIFICACIÓN]

---

## 📝 Nivel de Detalle
**Elegida**: [minimal|estándar|exhaustivo]

### Qué Incluir/Excluir
- Incluir: [LISTA]
- Excluir: [LISTA]

---

## 🚫 Reglas NO-NEGOCIABLES

### Herramientas Mandatorias
- [Herramienta 1]: [POR QUÉ]
- [Herramienta 2]: [POR QUÉ]

### Convenciones Sagradas
- [Convención 1]: [POR QUÉ]
- [Convención 2]: [POR QUÉ]

### Áreas Intocables
- [Archivo/Área 1]: [POR QUÉ]
- [Archivo/Área 2]: [POR QUÉ]

### Reglas de Negocio Críticas
- [Regla 1]: [POR QUÉ]
- [Regla 2]: [POR QUÉ]

---

## 🛠️ Herramientas Obligatorias

| Categoría | Herramienta | Configuración | Comando |
|---|---|---|---|
| Linter | [eslint/prettier/other] | [Link config] | `[cmd]` |
| Testing | [jest/vitest/other] | [Link config] | `[cmd]` |
| CI/CD | [GitHub/GitLab/other] | [Link config] | [Manual/Auto] |
| Format | [prettier/other] | [Link config] | `[cmd]` |

---

## 📊 Preferencias Específicas

### Preferencia 1
**Qué es**: [DESCRIBIR]
**Valor**: [RESPUESTA]
**Por qué**: [JUSTIFICACIÓN]

### Preferencia 2
[REPETIR]

---

## 📋 Checklist Antes de Cada Acción Significativa

- [ ] Leer los 8 docs de contexto (especialmente el relevante)
- [ ] Identificar qué cambiaría
- [ ] Comunicar al usuario ANTES de actuar
- [ ] Esperar confirmación explícita (✅/❌/🤔)
- [ ] Listar alternativas si hay varias opciones
- [ ] Validar cambios post-ejecución

---

## 🔄 Feedback Loop

### Frecuencia de Actualizaciones
[Cada paso|Final|Cada N pasos|Otro]: [RESPUESTA]

### Cómo Reportar Issues
[DESCRIBIR PROCESO]

### Cómo Hacer Feature Requests
[DESCRIBIR PROCESO]

---

## 📝 Documentación Automática

Después de cada acción significativa, actualizar:
- [ ] `historial.md`: Qué se hizo
- [ ] `decisiones.md`: Si fue una decisión (referencia a D-X)
- [ ] `errores-conocidos.md`: Si se descubrieron problemas
- [ ] `convenciones.md`: Si se establece algo nuevo
- [ ] Este archivo: Si la forma de trabajo cambió

---

## Última Actualización
Fecha: [YYYY-MM-DD]
Actualizado por: [NOMBRE]
Cambios principales: [LISTA]

---
```

## 📄 Archivo 9: `AGENTS.md` (Raíz del Proyecto)

[Copiar desde `OPENCODE_INIT.md` - Sección "4️⃣ Proceso de Cambios"]

---

## 📄 Archivo 10: `opencode.json` (Raíz del Proyecto)

[Copiar desde `OPENCODE_INIT.md` - Sección `opencode.json`]

---

## 🚀 Cómo Usar Este Template

1. **Copia los 10 archivos** a tu proyecto (estructura de carpetas arriba)
2. **Completa los campos `[COMPLETAR]`** basado en tu proyecto
3. **Reemplaza `[EJEMPLO]`** con valores reales de tu proyecto
4. **Elimina secciones `[OPCIONAL]`** que no apliquen
5. **Agrega secciones nuevas** si tu proyecto es único

---

## 📌 Orden Recomendado de Llenado

1. Primero: `4-glosario.md` (establecer lenguaje)
2. Segundo: `1-arquitectura.md` (estructura)
3. Tercero: `2-convenciones.md` (reglas)
4. Cuarto: `3-decisiones.md` (por qué)
5. Quinto: `5-flujo-de-trabajo.md` (cómo trabaja)
6. Sexto: `6-errores-conocidos.md` (gotchas)
7. Séptimo: `8-forma-de-trabajo-con-el-usuario.md` (cómo trabajamos)
8. Octavo: `7-historial.md` (vacío, listo para llenar)
9. Noveno: `AGENTS.md` y `opencode.json` en raíz

---
```
