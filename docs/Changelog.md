# Changelog

Registro de cambios importantes realizados durante el desarrollo del portfolio.

---

## [Unreleased]

### Added

- Desarrollo de la estructura inicial del portfolio.
- Configuración de Next.js con App Router y TypeScript.
- Navbar principal.
- Hero de la página de inicio.
- Sistema de tipos para proyectos destacados.
- Sistema de tipos para proyectos de aprendizaje.
- Datos de proyectos centralizados en `data/projects.ts`.
- Componente `ProjectCard`.
- Componente `FeaturedProjects`.
- Componente `LearningProjectCard`.
- Componente `LearningProjects`.
- Sección de proyectos destacados.
- Sección de proyectos de aprendizaje.
- Proyecto de aprendizaje de control de gastos.
- Proyecto de aprendizaje de carrito de compras.
- Integración de MDX para los casos de estudio.
- Caso de estudio de AgendaOK.
- Caso de estudio de Morfis.
- Componente reutilizable `CaseStudySection`.
- Componente reutilizable `CaseStudyLinks`.
- Componente reutilizable `TechStack`.
- Componente reutilizable `TechStackDetails`.

### Changed

- Se reorganizó la navegación utilizando rutas con `next/link`.
- Se establecieron rutas principales:
  - `/`
  - `/proyectos`
  - `/sobre-mi`
  - `/contacto`
- Se establecieron rutas para los casos de estudio:
  - `/proyectos/agendaok`
  - `/proyectos/morfis`
- Se estableció una estructura diferenciada entre proyectos destacados y proyectos de aprendizaje.
- Se incorporaron CSS Modules para los estilos específicos de los componentes.
- Se definió una paleta de colores global mediante variables CSS.
- Se incorporó un contenedor global para limitar el ancho del contenido.
- Se agregó diseño responsive inicial para el Hero y las grillas de proyectos.
- Se creó una estructura reutilizable para los casos de estudio mediante componentes MDX.
- Se agregaron enlaces a Landing, Demo y GitHub en los casos de estudio.

### Fixed

- Se corrigió la estructura del `layout.tsx` para mantener el contenido dentro de `<body>`.
- Se corrigió el problema de hidratación provocado por una estructura HTML incorrecta.
- Se corrigieron las rutas que contenían espacios.
- Se corrigieron las keys faltantes en listas de proyectos.
- Se corrigieron problemas de casing en nombres de archivos y componentes.
- Se corrigieron problemas de parsing de MDX provocados por bloques de código dentro de componentes JSX.

---

## Convenciones

Los cambios se agrupan utilizando las siguientes categorías:

- **Added** — nuevas funcionalidades o componentes.
- **Changed** — modificaciones de funcionalidades o estructura existente.
- **Fixed** — correcciones de errores.
- **Removed** — funcionalidades o elementos eliminados.

El changelog registra cambios relevantes del proyecto y no modificaciones menores de estilos o código interno.