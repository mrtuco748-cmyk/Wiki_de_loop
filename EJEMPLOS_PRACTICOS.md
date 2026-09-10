# 💡 Ejemplos Prácticos - OpenCode v2.0 en Acción

Estos ejemplos muestran cómo usar la plantilla en situaciones reales.

---

## Ejemplo 1: Proyecto React SPA Nuevo

### Contexto
- Proyecto nuevo (greenfield)
- Stack: React 18 + TypeScript + Vite
- Equipo: 1 developer (tú)
- Objetivo: App de tareas colaborativo
- Tiempo disponible: 2 horas

### Fase 1: Cuestionario Discovery (30 min)

```
OPENCODE: "Completemos el cuestionario para entender tu proyecto."

BLOQUE 1: Naturaleza
- ¿Qué tipo? → "Web app SPA"
- ¿Objetivo? → "App de tareas colaborativo, tipo Trello minimalista"
- ¿A quién? → "Usuarios finales, teams remotos"
- ¿Valor? → "Gestión simple de tareas en tiempo real"

BLOQUE 2: Escala
- ¿Cuántas personas? → "Solo yo por ahora"
- ¿Cuánto código? → "Espero ~10-15k LOC"
- ¿Producción? → "MVP first, luego producción"
- ¿Documentación? → "Estándar"
- ¿Testing? → "Jest, cobertura básica (60%+)"

BLOQUE 3: Stack
- ¿Lenguajes? → "JavaScript/TypeScript"
- ¿Frameworks? → "React 18, Vite, Zustand para estado"
- ¿Base datos? → "Firebase Realtime DB"
- ¿Infraestructura? → "Firebase Hosting"
- ¿Dependencias? → "Firebase SDK, Material-UI"

BLOQUE 4: Preferencias
- ¿Cómo quieres que OpenCode trabaje? → "Consultivo. Quiero opciones"
- ¿Velocidad? → "Incremental. Prefiero seguridad"
- ¿Naming? → "camelCase para variables, PascalCase para componentes"
- ¿Non-negociables? → "TypeScript SIEMPRE, sin any"
- ¿Herramientas? → "eslint + prettier, pytest"

BLOQUE 5: Contexto Negocio
- ¿Conceptos clave? → "Project, Task, User, Team, Comment"
- ¿Regulaciones? → "Ninguna especial"
- ¿User flows críticos? → 
  1. Login/signup
  2. Crear/editar task
  3. Colaboración en tiempo real
- ¿Partes frágiles? → "Todavía no, es nuevo"

BLOQUE 6: Historial
- ¿Nuevo? → "Sí, greenfield"
- ¿Estado? → "Day 1, solo setup"
- ¿Decisiones pasadas? → "Elegí Zustand porque es simple"
- ¿Gotchas? → "Ninguno todavía"
```

### Fase 2: OpenCode Genera Docs (10 min)

OpenCode crea los 8 archivos:

**arquitectura.md:**
```markdown
# Arquitectura

## Stack Tecnológico
- React 18.2
- TypeScript 5.1
- Vite 4.4
- Zustand (estado global)
- Firebase (auth + db + hosting)
- Material-UI (componentes)
- Jest (testing)

## Mapa de Carpetas
```
src/
├── components/        # Componentes React reutilizables
├── pages/            # Páginas (Project, Task, etc.)
├── store/            # Zustand stores
├── services/         # Firebase service calls
├── hooks/            # Custom hooks
├── types/            # TypeScript types
└── utils/            # Utilities
```

## Flujo de Datos
User (UI) → Component → Zustand Store → Firebase

## Lo que NO existe
- [ ] Autenticación con OAuth (social login)
- [ ] PWA (offline support)
- [ ] Analytics
- [ ] Notificaciones push
- [ ] Mobile app
```

**convenciones.md:**
```markdown
# Convenciones

## Naming
- Variables: `camelCase` (const userName = "...")
- Funciones: `camelCase` (const handleTaskCreate = () => {})
- Componentes: `PascalCase` (function TaskCard() {})
- Archivos: `kebab-case` (task-card.tsx)
- Constantes: `SCREAMING_SNAKE_CASE` (const MAX_TASKS = 100)

## Imports
1. React
2. Third-party libs
3. Components
4. Hooks
5. Types
6. Utils

✅ CORRECTO:
import React from 'react';
import { useState } from 'react';
import { useTask } from '@/hooks';
import { TaskCard } from '@/components';
import type { Task } from '@/types';
import { formatDate } from '@/utils';

## Patterns
- Custom Hooks para lógica reutilizable
- Zustand para estado global
- TypeScript para todo (no any!)
- Componentes funcionales + hooks
```

**decisiones.md:**
```markdown
# Decisiones

## D-1: Usar Zustand en lugar de Redux
- **Qué**: Elegir Zustand para estado global
- **Por qué**: Más simple, menos boilerplate, perfecto para MVP
- **Alternativas**: Redux (demasiado complejo), Recoil (más complejo)
- **Impacto**: Desarrollo rápido, código limpio
- **Revisable**: Sí, si escalamos podemos cambiar a Redux

## D-2: Firebase como Backend
- **Qué**: Usar Firebase para auth, DB, hosting
- **Por qué**: Sin backend propio (MVP), fácil deploy
- **Alternativas**: Backend Node.js (más trabajo), Supabase (buena alternativa)
- **Impacto**: Dependencia de Firebase, costo bajo
- **Revisable**: Sí, si necesitamos control más fino
```

**glosario.md:**
```markdown
# Glosario

## Términos Negocio
- **Project**: Contenedor de tareas, pertenece a un team
- **Task**: Item de trabajo individual, tiene estado (todo/in-progress/done)
- **Team**: Grupo de usuarios que colaboran
- **Comment**: Feedback en una task

## Entidades Principales
### Project
- `id`: Identificador único
- `name`: Nombre del proyecto
- `teamId`: Equipo al que pertenece
- `createdAt`: Fecha de creación
- `tasks`: Array de tasks

### Task
- `id`: Identificador único
- `projectId`: Proyecto al que pertenece
- `title`: Título del task
- `status`: "todo" | "in-progress" | "done"
- `assignedTo`: Usuario asignado
- `dueDate`: Fecha de entrega
```

**flujo-de-trabajo.md:**
```markdown
# Flujo de Trabajo

## Setup Inicial
```bash
git clone <repo>
cd task-app
npm install
npm run dev  # http://localhost:5173
```

## Hacer un Cambio
1. `git checkout -b feature/[nombre]`
2. Hacer cambios + tests
3. `npm run lint` + `npm run test`
4. Push + PR
5. Code review
6. Merge

## Deploy
```bash
npm run build
firebase deploy
```

## Checklist PR
- [ ] Tests pasan
- [ ] TypeScript sin errores
- [ ] eslint/prettier limpio
- [ ] Documentación actualizada
```

**errores-conocidos.md:**
```markdown
# Errores Conocidos

### MEDIA - TypeScript any en Firebase calls
- **Dónde**: src/services/firebase.ts
- **Problema**: Respuestas de Firebase tienen types débiles
- **Impacto**: Poco, pero no ideal
- **Fix**: Crear tipos personalizados para responses

### BAJA - No hay error handling consistente
- **Dónde**: Servicios Firebase
- **Problema**: Algunos errores se ignoran
- **Impacto**: Usuario no sabe si falló algo
- **Fix**: Crear hook useAsync con error handling

### BAJA - No hay tests de integración
- **Dónde**: Proyecto entero
- **Problema**: Solo unit tests
- **Impacto**: Bugs en integración pasan desapercibidos
- **Fix**: Agregar tests de integración con Playwright
```

**historial.md:**
```markdown
# Historial

## [2024-01-10 14:00] - DISCOVERY
**Resumen**: Setup inicial de proyecto OpenCode

**Cambios**: 
- Respondio cuestionario discovery
- Configuró docs de contexto

**Lecciones**:
- Zustand elegido por simpleza
- Firebase para MVP sin backend

**Impacto**:
- Proyecto documentado desde day 1
- OpenCode entiende arquitectura

**Documentado en**: decisiones.md (D-1, D-2), arquitectura.md
```

**forma-de-trabajo-con-el-usuario.md:**
```markdown
# Forma de Trabajo

## Modo Elegido: CONSULTIVO
Quiero ver opciones, elegir, entender impacto.

## Velocidad: INCREMENTAL
Prefiero paso a paso, validar en el camino.

## Preferencias Clave:
- No usen `any` en TypeScript NUNCA
- Quiero que me muestren alternativas
- Tests ANTES de deploy
- Documentar decisiones arquitectónicas

## Non-Negotiables:
- TypeScript estricto
- Tests de componentes críticos
- Commits con mensaje claro
- Sin hardcoded secrets
```
```

### Fase 3: Validación (5 min)

```
OPENCODE: "Generé 8 docs. Validemos:

✅ arquitectura.md - ¿Correcto? ¿Falta algo?
✅ convenciones.md - ¿Las reglas de naming son claras?
✅ decisiones.md - ¿D-1 y D-2 están bien?
✅ glosario.md - ¿Entidades principales definidas?
✅ flujo-de-trabajo.md - ¿Proceso claro?
✅ errores-conocidos.md - ¿Ya hay gotchas?
✅ historial.md - ¿Listo para llenar?
✅ forma-de-trabajo-con-el-usuario.md - ¿Preferencias claras?

¿Cambios? ¿Correcciones?"

USUARIO: "Todo bien. Pero en glosario agrega 'Comment',
        y en flujo-de-trabajo falta comando de test"

OPENCODE: "Actualizo..." [realiza cambios]

OPENCODE: "Listo! ✅ Proyecto documentado y listo para empezar"
```

### Fase 4: Primera Tarea (30 min)

```
USUARIO: "Empecemos. Necesito la estructura base de componentes"

OPENCODE:
"Entiendo. Voy a crear:
  • src/components/ con estructura base
  • TaskCard, ProjectList, TaskForm
  • Types necesarios
  • Ejemplo de test para 1 componente

¿Así? Opciones:
  1. Generar TODO de una vez (rápido)
  2. Paso a paso (seguro)

Recomiendo #2 (INCREMENTAL, como preferiste)"

USUARIO: "✅ Paso a paso"

OPENCODE:
"Cré component base. Aquí está:

[MUESTRA CÓDIGO]

¿Ok? ✅/❌"

USUARIO: "✅ Ok"

[REPITE para cada componente]

OPENCODE:
"✅ Listo!

Creé:
  • src/components/TaskCard.tsx (50 LOC)
  • src/components/ProjectList.tsx (40 LOC)
  • src/components/TaskForm.tsx (70 LOC)
  • src/components/__tests__/TaskCard.test.tsx (30 LOC)
  • src/types/task.ts

Tests pasan: ✅
TypeScript: ✅
Imports limpios: ✅

Documentado en: historial.md [FEATURE - Componentes base]"
```

---

## Ejemplo 2: Proyecto Node.js API Existente

### Contexto
- Proyecto existente, 2 años en producción
- Stack: Node.js, Express, PostgreSQL
- Equipo: 3 developers
- Problemas: Inconsistencias de código, deuda técnica
- Objetivo: Documentar estado actual, mejorar

### Fase 1: Cuestionario (20 min)

```
[Más breve porque ya existe]

USUARIO responde:
- Tipo: "Backend API REST"
- Código: "50k LOC"
- Equipo: "3 developers"
- Estado: "Producción, mantenimiento"
- Problemas conocidos:
  * Inconsistencias de naming
  * Tests esparcidos (50% cobertura)
  * Migraciones DB manuales (ej: error)
  * Logging inconsistente
  * Deuda técnica en auth
```

### Fase 2: OpenCode Analiza (15 min)

OpenCode:
1. Escanea el repo
2. Identifica patrones (naming, estructura)
3. Encuentra problemas (no pasan todos los tests)
4. Genera 8 docs basado en lo que VE

### Fase 3: Generación de Docs (10 min)

**errores-conocidos.md genera cosas como:**
```markdown
### CRÍTICA - Auth con JWT sin refresh
- **Dónde**: src/middleware/auth.ts
- **Problema**: Token JWT expira, no hay refresh
- **Impacto**: Usuarios logueados pierden sesión en X horas
- **Síntomas**: Logout inesperado
- **Causa**: Auth rudimentario del proyecto
- **Workaround**: Re-login
- **Fix**: Implementar refresh token flow

### ALTA - Inconsistencia en error handling
- **Dónde**: Controladores varios
- **Problema**: Algunos lanzan errores, otros devuelven null
- **Impacto**: Cliente no sabe si falló
- **Fix**: Crear middleware de error centralizado

### MEDIA - Logging inconsistente
- **Dónde**: src/routes/
- **Problema**: Log.info en algunos endpoints, nada en otros
- **Impacto**: Debugging difícil
- **Fix**: Usar middleware de logging
```

**decisiones.md genera:**
```markdown
### D-1: Express en lugar de FastAPI/Koa/Hapi
- **Fecha**: 2022-01-15
- **Contexto**: Startup, necesitaba rápido algo simple
- **Qué se decidió**: Express para backend API
- **Por qué**: Ecosistema maduro, muchos recursos
- **Alternativas**: Koa (más moderno, menos maduro), Hapi (overkill)
- **Impacto**: Código mantiene Express hoy
- **Tradeoff**: Simple pero no tiene validación de schema robusta
- **Revisable**: Sí, podría migrar a Nest.js

### D-2: PostgreSQL sin ORM
- **Contexto**: Querían control fino
- **Qué**: Usar SQL puro en lugar de Sequelize/Typeorm
- **Por qué**: Queries custom, control total
- **Impacto**: Más control, más trabajo manual
- **Problema**: Migraciones son frágiles, duplicación de SQL
- **Revisable**: Sí, podrían adoptar Typeorm
```

### Fase 4: Presentación (10 min)

```
OPENCODE: "Analicé tu proyecto. Hallazgos:

✅ Stack: Node.js + Express + PostgreSQL (entiendo)
✅ Estructura: Manejable pero inconsistente
⚠️ Tests: 50% cobertura (debajo de ideal)
🔴 Problemas:
  1. CRÍTICA: Auth sin refresh token
  2. ALTA: Error handling inconsistente
  3. MEDIA: Logging fragmentado
  4. MEDIA: SQL duplicado (candidates para refactor)

📚 Documentación generada:
  • arquitectura.md: 10 routers, 50k LOC identificados
  • convenciones.md: Naming mixto encontrado
  • decisiones.md: D-1 (Express), D-2 (No ORM)
  • errores-conocidos.md: 8 issues listados
  • flujo-de-trabajo.md: Setup + PR process
  • glosario.md: Entidades de dominio
  • historial.md: Setup inicial
  • forma-de-trabajo-con-el-usuario.md: A completar

¿Validar juntos? Empezamos con errores-conocidos.md"
```

### Fase 5: Iteración

```
USUARIO: "La crítica de Auth es real. Otros dos okay.
         En convenciones, falta mencionar nuestro pattern de validation"

OPENCODE: 
"Actualizo:

• Cambio prioridad de Auth a CRÍTICA (correcto)
• Agrego a convenciones.md nuevo pattern de validation
• Pregunta: ¿Quieres que prioricemos arreglir Auth primero?
  ✅ Sí, es crítica
  ⏭️ Después, otros cambios primero
  🤔 Propongo algo diferente"

[Itera hasta validar]
```

### Fase 6: Uso Posterior

```
USUARIO: "Necesito refactorizar el auth"

OPENCODE:
1. Lee forma-de-trabajo-con-el-usuario.md (modo: consultivo)
2. Lee errores-conocidos.md (ve que es CRÍTICA)
3. Lee decisiones.md (entiende por qué es así)
4. Propone: "Voy a implementar refresh token flow.
   Esto requeriría:
   • Crear endpoint POST /refresh
   • Actualizar middleware auth
   • Cambios en cliente (actualizar tokens)
   
   ¿Procedo? Opciones:
   1. Completo (refresh token + rotation)
   2. Básico (solo refresh token)
   
   Recomiendo #1 (más seguro)"

USUARIO: "✅ Opción 1, pero incremental"

OPENCODE: Implementa paso a paso, validando cada cambio
```

---

## Ejemplo 3: Monorepo (Backend + Frontend + Mobile)

### Contexto
- Monorepo con 3 packages: backend (Node), frontend (React), mobile (React Native)
- Equipo: 8 developers (3 backend, 3 frontend, 2 mobile)
- Complejidad: ALTA

### Estructura de Docs

```
docs/
├── contexto/
│   ├── 1-arquitectura.md          ← Stack completo + inter-package
│   ├── 2-convenciones.md          ← Reglas globales + por package
│   ├── 3-decisiones.md            ← Decisiones de monorepo
│   ├── 4-glosario.md              ← Términos compartidos
│   ├── 5-flujo-de-trabajo.md      ← Workflow monorepo
│   ├── 6-errores-conocidos.md     ← Issues globales + por package
│   ├── 7-historial.md             ← Cambios importantes
│   └── 8-forma-de-trabajo-con-el-usuario.md
├── backend/
│   └── contexto/
│       └── [8 docs específicos backend]
├── frontend/
│   └── contexto/
│       └── [8 docs específicos frontend]
└── mobile/
    └── contexto/
        └── [8 docs específicos mobile]

AGENTS.md                           ← Raíz
opencode.json                       ← Raíz
```

### opencode.json (Monorepo)

```json
{
  "projectMetadata": {
    "name": "TaskApp",
    "type": "monorepo",
    "packages": [
      {"name": "backend", "type": "api"},
      {"name": "frontend", "type": "web-app"},
      {"name": "mobile", "type": "mobile-app"}
    ]
  },
  "agentConfig": {
    "contextPath": "docs/contexto",
    "packageContexts": {
      "backend": "packages/backend/docs/contexto",
      "frontend": "packages/frontend/docs/contexto",
      "mobile": "packages/mobile/docs/contexto"
    },
    "validationLevel": "strict"
  }
}
```

### Forma de Trabajo (Monorepo)

```
OPENCODE:
1. Lee docs/contexto/ (global)
2. Lee docs de package relevante
3. Entiende dependencias inter-package
4. Valida que cambios no rompan contrato

USUARIO: "Necesito agregar campo 'priority' a Task"

OPENCODE:
1. Impacta: Backend (modelo), Frontend (form + display), Mobile (UI)
2. Propone: "Esto afectaría 3 packages. Plan:
   • Backend: Agregar campo a schema + migración
   • Frontend: Agregar input + display
   • Mobile: Agregar UI
   
   ¿Procedo? Orden recomendado:
   1. Backend primero (API changes)
   2. Frontend
   3. Mobile
   
   ¿Así?"
   
USUARIO: ✅ Procede

OPENCODE: Implementa con pasos explícitos
```

---

## Resumen de Flujos

### Pequeño Proyecto (1 dev, 10k LOC)
- Cuestionario: 20 min
- Generación: 5 min
- Validación: 5 min
- **Total: 30 min**

### Mediano Proyecto (5 devs, 50k LOC)
- Cuestionario: 30 min
- Generación: 10 min
- Validación: 15 min
- Iteraciones: 10-20 min
- **Total: 1-2 horas**

### Grande (10+ devs, 100k+ LOC) o Monorepo
- Cuestionario: 45 min
- Generación: 15-20 min
- Validación: 20-30 min
- Iteraciones: 30-60 min
- **Total: 2-3 horas**

---

**Estos ejemplos muestran la plantilla en acción. Adapta según tu proyecto. ✨**
