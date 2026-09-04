# Architecture — Portfolio

## 1. Propósito

Este documento define la arquitectura técnica del portfolio personal.

El portfolio tiene dos objetivos principales:

1. Presentar al autor como desarrollador Fullstack con experiencia práctica construyendo aplicaciones web completas.

2. Servir como portfolio profesional tanto para oportunidades laborales como para proyectos freelance.

El portfolio está centrado principalmente en dos proyectos SaaS:

- AgendaOK — sistema de gestión de turnos para negocios de servicios.
- Morfis — sistema de menú digital para negocios gastronómicos.

También se incluyen proyectos secundarios realizados durante el proceso de aprendizaje.

Los proyectos SaaS tienen mayor protagonismo visual y contenido más detallado que los proyectos secundarios.

---

# 2. Stack tecnológico

## Framework

- Next.js
- App Router

## Lenguaje

- TypeScript

## UI

- React
- CSS Modules
- CSS global

## Contenido

- MDX
- @next/mdx

## Control de versiones

- Git
- GitHub

## Deployment

- Vercel

---

# 3. Principios de arquitectura

La arquitectura sigue los siguientes principios.

### Simplicidad

Se evita agregar complejidad que no esté justificada por una necesidad real.

No se incorporan librerías, patrones, servicios o abstracciones únicamente porque sean populares o estén disponibles.

### Separación de responsabilidades

Se mantiene separada:

- la estructura de las páginas;
- los componentes de interfaz;
- los datos;
- el contenido editorial;
- los estilos.

### Reutilización con criterio

Los componentes se extraen cuando existe una razón clara:

- reutilización;
- complejidad;
- separación de responsabilidades;
- legibilidad;
- mantenimiento.

No se crean componentes pequeños únicamente para cumplir una regla de reutilización.

### Comprensión del código

El proyecto busca mantener una arquitectura que pueda ser comprendida y mantenida por su autor.

---

# 4. Estructura actual

La estructura principal del proyecto utiliza Next.js App Router.

Actualmente la aplicación utiliza app/ directamente en la raíz del proyecto.

Conceptualmente:

app/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── FeaturedProjects/
│   ├── ProjectCard/
│   ├── LearningProjects/
│   ├── LearningProjectCard/
│   ├── CaseStudySection/
│   ├── CaseStudyLinks/
│   ├── TechStack/
│   └── TechStackDetails/
│
├── data/
│   └── projects.ts
│
├── proyectos/
│   ├── page.tsx
│   │
│   ├── agendaok/
│   │   ├── page.tsx
│   │   ├── agendaok.mdx
│   │   └── AgendaOk.module.css
│   │
│   └── morfis/
│       ├── page.tsx
│       ├── morfis.mdx
│       └── Morfis.module.css
│
├── sobre-mi/
│   └── page.tsx
│
├── contacto/
│   └── page.tsx
│
├── page.tsx
├── layout.tsx
├── layout.module.css
├── globals.css
└── mdx-components.tsx

La estructura podrá crecer a medida que se implementen nuevas funcionalidades.

---

# 5. app/

El directorio app/ contiene las rutas y páginas de la aplicación.

Next.js utiliza un sistema de routing basado en el sistema de archivos.

Actualmente las rutas principales son:

/
├── /sobre-mi
├── /proyectos
├── /proyectos/agendaok
├── /proyectos/morfis
└── /contacto

---

# 6. App Router

El proyecto utiliza el App Router de Next.js.

El App Router permite organizar la aplicación mediante:

- layouts;
- páginas;
- Server Components;
- Client Components;
- metadata;
- rutas;
- otras funcionalidades propias de Next.js.

No se utiliza el sistema antiguo de Pages Router.

---

# 7. Root Layout

El Root Layout está ubicado en:

app/layout.tsx

Es responsable de la estructura global de la aplicación.

Actualmente contiene conceptualmente:

<body>
├── Navbar
└── contenedor global
    └── contenido de la página

El contenido específico de cada ruta se representa mediante {children}.

El Root Layout también importa los estilos globales.

El Footer todavía no forma parte del layout actual y será incorporado posteriormente si corresponde.

---

# 8. Contenedor global

El contenido de las páginas se encuentra dentro de un contenedor global definido mediante el CSS Module del layout.

El objetivo del contenedor es:

- limitar el ancho máximo del contenido;
- mantener márgenes automáticos;
- proporcionar separación horizontal;
- mantener una estructura consistente entre páginas.

Actualmente el contenedor tiene un ancho máximo de 1200px y utiliza padding horizontal.

El Navbar se mantiene fuera de este contenedor para permitir que su borde inferior ocupe todo el ancho disponible.

---

# 9. Server Components

Los componentes son Server Components por defecto.

Los componentes que no necesitan interacción del navegador permanecen como Server Components.

Esto permite aprovechar el modelo de rendering de Next.js y evitar JavaScript innecesario en el cliente.

Actualmente gran parte del portfolio puede funcionar con este modelo debido a que el contenido es principalmente estático.

---

# 10. Client Components

Se utilizarán Client Components solamente cuando exista una necesidad real de ejecución o interacción en el navegador.

Algunos ejemplos serían:

- useState;
- useEffect;
- event handlers;
- APIs del navegador;
- galerías interactivas;
- componentes con estado local.

Los Client Components deberán utilizar la directiva:

"use client"

No se utilizará "use client" innecesariamente.

Actualmente los componentes principales del portfolio no requieren Client Components.

---

# 11. Criterio para elegir Server Component o Client Component

La decisión seguirá principalmente este criterio:

¿Necesita estado o interacción del navegador?

            │
       ┌────┴────┐
       │         │
      No        Sí
       │         │
       ▼         ▼
 Server      Client
Component   Component

Un componente que solamente recibe datos y los muestra podrá permanecer como Server Component.

Un componente que necesita estado, eventos o APIs del navegador deberá convertirse en Client Component.

La arquitectura intenta mantener los Client Components lo más acotados posible.

---

# 12. components/

Los componentes reutilizables de interfaz se encuentran dentro de:

app/components/

Actualmente existen componentes relacionados con:

- Navbar;
- Hero;
- proyectos destacados;
- proyectos de aprendizaje;
- tarjetas de proyectos;
- casos de estudio;
- tecnologías.

Los componentes se organizan en carpetas cuando resulta conveniente separar:

- componente;
- CSS Module;
- archivos relacionados.

---

# 13. Componentes de proyectos

La sección de proyectos utiliza componentes reutilizables para evitar repetir estructuras de interfaz.

Entre ellos se encuentran:

- FeaturedProjects;
- ProjectCard;
- LearningProjects;
- LearningProjectCard.

Estos componentes reciben los datos de los proyectos y se encargan de representarlos visualmente.

La información específica de cada proyecto no se encuentra escrita directamente dentro de estos componentes.

---

# 14. Componentes de casos de estudio

Los casos de estudio utilizan componentes reutilizables.

Actualmente se dispone de:

CaseStudySection
CaseStudyLinks
TechStack
TechStackDetails

### CaseStudySection

Se utiliza para agrupar las diferentes secciones de contenido de un caso de estudio.

### CaseStudyLinks

Centraliza los enlaces principales del proyecto:

- Landing Page;
- Demo;
- GitHub.

### TechStack

Muestra las tecnologías principales mediante una lista de etiquetas.

### TechStackDetails

Permite organizar las tecnologías por categorías:

- Frontend;
- Backend;
- Base de datos;
- Infraestructura;
- Integraciones.

Estos componentes permiten mantener una presentación consistente entre AgendaOK y Morfis.

---

# 15. CSS y estilos

No se utiliza Tailwind CSS.

La estrategia de estilos utiliza:

- CSS Modules;
- globals.css;
- variables CSS.

Los estilos específicos de cada componente se mantienen en CSS Modules.

Ejemplo conceptual:

ProjectCard/
├── ProjectCard.tsx
└── ProjectCard.module.css

---

# 16. CSS Modules

CSS Modules permite mantener los estilos de los componentes aislados.

Por ejemplo, una clase como:

.card

dentro de:

ProjectCard.module.css

se utiliza desde el componente mediante:

import styles from "./ProjectCard.module.css"

y:

<div className={styles.card}>

Esto reduce conflictos entre nombres de clases y mantiene los estilos relacionados con cada componente.

---

# 17. globals.css

Los estilos globales están definidos en:

app/globals.css

Actualmente contiene principalmente:

- reset básico;
- box-sizing;
- variables CSS;
- fondo global;
- color global del texto;
- reglas generales del body.

La paleta actual utiliza variables como:

--background
--background-secondary
--text-primary
--text-secondary
--accent
--accent-hover
--border

Los estilos específicos de componentes no deben colocarse en globals.css si pueden mantenerse dentro de un CSS Module.

---

# 18. Datos de proyectos

Los datos estructurados de los proyectos se encuentran actualmente en:

app/data/projects.ts

El archivo centraliza la información utilizada por las tarjetas y secciones de proyectos.

Esto permite separar:

Datos
  ↓
Componentes
  ↓
Interfaz

Los componentes no necesitan tener información específica de cada proyecto escrita directamente dentro de su JSX.

---

# 19. Modelo de datos

Los proyectos destacados y los proyectos de aprendizaje tienen necesidades diferentes.

Por este motivo se utilizan tipos separados.

Actualmente existen:

FeaturedProject
LearningProject

### FeaturedProject

Representa un proyecto completo que dispone de:

- nombre;
- descripción;
- tecnologías;
- demo;
- repositorio;
- caso de estudio.

### LearningProject

Representa proyectos secundarios realizados durante el aprendizaje.

Puede contener:

- nombre;
- descripción;
- tecnologías;
- demo;
- repositorio.

TypeScript permite detectar inconsistencias en estos datos durante el desarrollo.

---

# 20. Proyectos destacados

Los proyectos destacados actuales son:

- AgendaOK;
- Morfis.

Estos proyectos representan las principales evidencias de experiencia práctica del portfolio.

Sus datos se encuentran centralizados en:

app/data/projects.ts

Cada proyecto destacado dispone actualmente de:

- nombre;
- descripción;
- tecnologías;
- URL de demo;
- URL del repositorio;
- URL del caso de estudio.

---

# 21. Proyectos de aprendizaje

Los proyectos secundarios son almacenados en una colección independiente dentro de:

app/data/projects.ts

Actualmente se incluyen proyectos como:

- Control de gastos;
- Carrito de compras.

Estos proyectos tienen menor protagonismo que los SaaS y no requieren un caso de estudio individual.

---

# 22. Separación entre datos y contenido editorial

El portfolio diferencia entre datos estructurados y contenido editorial.

### Datos estructurados

Información como:

- nombre;
- descripción;
- tecnologías;
- URLs;
- referencias a páginas.

Esta información se representa mediante TypeScript.

### Contenido editorial

Información extensa como:

- visión general;
- problema;
- solución;
- funcionalidades;
- desafíos técnicos;
- arquitectura;
- decisiones.

Esta información se almacena en MDX.

Conceptualmente:

Proyecto
   │
   ├── Datos estructurados
   │       └── TypeScript
   │
   └── Contenido editorial
           └── MDX

---

# 23. Contenido de los casos de estudio

Los casos de estudio de AgendaOK y Morfis utilizan MDX.

Actualmente los archivos se encuentran junto a sus respectivas páginas:

app/
└── proyectos/
    ├── agendaok/
    │   └── agendaok.mdx
    │
    └── morfis/
        └── morfis.mdx

Esta organización permite mantener juntos:

- página;
- contenido;
- estilos;

de cada caso de estudio.

---

# 24. MDX

MDX permite combinar Markdown con componentes React.

Por ejemplo:

# Morfis

## Visión General

Morfis es un SaaS...

También permite utilizar componentes React como TechStack para representar información estructurada.

Esto permite utilizar Markdown para contenido editorial y React para elementos que necesitan una presentación específica.

Los componentes React dentro de MDX solamente se utilizan cuando aportan valor al contenido.

MDX no se utiliza para reemplazar componentes normales de la aplicación.

---

# 25. Configuración de MDX

La integración se realiza mediante @next/mdx.

La configuración se encuentra en:

next.config.ts

Conceptualmente:

Next.js
   │
   ▼
@next/mdx
   │
   ▼
Archivos .mdx
   │
   ▼
Componentes React

También existe:

mdx-components.tsx

para definir los componentes disponibles dentro del sistema MDX.

---

# 26. Casos de estudio

Actualmente existen dos casos de estudio:

/proyectos/agendaok
/proyectos/morfis

Cada caso de estudio tiene una página propia.

### AgendaOK

app/proyectos/agendaok/
├── page.tsx
├── agendaok.mdx
└── AgendaOk.module.css

### Morfis

app/proyectos/morfis/
├── page.tsx
├── morfis.mdx
└── Morfis.module.css

---

# 27. Páginas de casos de estudio

Las páginas de caso de estudio utilizan una estructura simple.

Conceptualmente:

import Content from "./content.mdx"

const ProjectPage = () => {
  return (
    <main>
      <Content />
    </main>
  )
}

export default ProjectPage

La página se encarga principalmente de:

- cargar el contenido MDX;
- aplicar el CSS Module correspondiente;
- representar el contenido.

La mayor parte del contenido editorial permanece dentro del archivo MDX.

---

# 28. Estructura de los casos de estudio

Los casos de estudio utilizan una estructura similar.

Actualmente pueden contener:

- título;
- descripción;
- tecnologías;
- enlaces;
- visión general;
- problema;
- solución;
- funcionalidades;
- desafío técnico;
- arquitectura.

La estructura podrá ampliarse posteriormente con:

- decisiones técnicas;
- resultados;
- aprendizajes;
- capturas;
- galerías;
- demostraciones.

---

# 29. Arquitectura de AgendaOK y Morfis

Los proyectos mostrados en el portfolio son aplicaciones independientes del propio portfolio.

El portfolio no ejecuta sus backends.

Su función es presentar:

- contexto;
- funcionalidades;
- arquitectura;
- tecnologías;
- enlaces;
- experiencias públicas.

Las capacidades de backend, bases de datos, APIs e integraciones se demuestran principalmente mediante estos proyectos externos.

---

# 30. Base de datos

El portfolio no utiliza una base de datos propia.

No se utiliza:

- MySQL;
- PostgreSQL;
- MongoDB;
- Firebase;
- Supabase.

Los datos del portfolio están almacenados dentro del repositorio.

La decisión se debe a que el portfolio:

- no necesita usuarios;
- no necesita autenticación;
- no necesita contenido generado por usuarios;
- no necesita datos en tiempo real;
- cambia su contenido con poca frecuencia.

Agregar una base de datos introduciría complejidad innecesaria.

---

# 31. API

El portfolio no tiene actualmente una API propia.

No existe una necesidad real de crear endpoints para obtener:

- proyectos;
- casos de estudio;
- información personal.

Los datos y contenidos forman parte del proyecto y son procesados directamente por Next.js.

---

# 32. Rendering

El portfolio aprovecha el modelo de Server Components de Next.js.

El contenido principalmente estático puede permanecer en el servidor.

Los Client Components solamente serán incorporados cuando exista una necesidad real de:

- estado;
- eventos;
- APIs del navegador;
- interacción.

No se utilizará Client-side rendering innecesariamente.

---

# 33. Performance

El portfolio deberá mantenerse rápido y liviano.

Se priorizarán:

- Server Components;
- reducción de JavaScript enviado al navegador;
- imágenes optimizadas;
- carga de recursos solamente cuando sean necesarios;
- CSS organizado;
- pocas dependencias externas;
- ausencia de librerías innecesarias.

Las optimizaciones más avanzadas se realizarán durante las etapas posteriores.

---

# 34. Imágenes

Cuando se incorporen imágenes al portfolio se priorizará su optimización.

Cuando corresponda se utilizará el componente de imágenes de Next.js.

Las imágenes deberán:

- tener dimensiones apropiadas;
- utilizar texto alternativo;
- evitar tamaños innecesariamente grandes;
- mantener una buena relación entre calidad y peso.

Las capturas de AgendaOK y Morfis serán especialmente importantes para los casos de estudio.

---

# 35. Responsive Design

El portfolio utiliza CSS responsive mediante:

- Flexbox;
- CSS Grid;
- media queries;
- unidades relativas;
- layouts fluidos.

Actualmente existe responsive inicial en diferentes componentes.

La revisión responsive completa del sitio todavía está pendiente.

El objetivo final es garantizar una experiencia correcta en:

- teléfonos;
- tablets;
- notebooks;
- monitores de escritorio.

---

# 36. Accesibilidad

La accesibilidad se considerará durante el desarrollo.

Se utilizarán buenas prácticas como:

- HTML semántico;
- jerarquía correcta de headings;
- textos alternativos;
- labels adecuados;
- navegación mediante teclado;
- estados de foco;
- botones y enlaces correctamente utilizados;
- contraste adecuado.

La revisión completa de accesibilidad todavía está pendiente.

---

# 37. SEO

El portfolio utilizará las capacidades de metadata de Next.js.

Se deberán definir:

- títulos;
- descripciones;
- metadata específica por página;
- Open Graph;
- imágenes para compartir;
- URLs apropiadas;
- información semántica cuando corresponda.

La implementación SEO todavía está pendiente.

---

# 38. URLs

Las URLs principales son simples y descriptivas:

/
/sobre-mi
/proyectos
/proyectos/agendaok
/proyectos/morfis
/contacto

Los nombres utilizan slugs simples y consistentes.

No se utilizarán URLs innecesariamente complejas.

---

# 39. Deployment

El deployment objetivo será Vercel.

El repositorio será alojado en GitHub.

El flujo esperado es:

Desarrollo local
       ↓
      Git
       ↓
    GitHub
       ↓
    Vercel
       ↓
  Producción

El deployment todavía forma parte de las tareas pendientes del MVP.

---

# 40. Control de versiones

Se utilizará Git para controlar los cambios del proyecto.

El repositorio estará alojado en GitHub.

Los commits deberán representar cambios coherentes.

Ejemplos:

feat: add projects section
feat: add AgendaOK case study
fix: correct mobile navigation
style: improve hero layout
refactor: extract project card

No es necesario seguir estrictamente una convención específica mientras los commits sean comprensibles y consistentes.

---

# 41. Complejidad progresiva

El proyecto comenzó con una arquitectura simple.

No se incorporaron:

- bases de datos;
- APIs innecesarias;
- autenticación;
- CMS;
- state management global;
- librerías de UI innecesarias.

Las funcionalidades nuevas se incorporarán únicamente cuando exista una necesidad concreta.

La arquitectura podrá evolucionar si el proyecto lo requiere.

---

# 42. Objetivo profesional de la arquitectura

La arquitectura está diseñada para que el portfolio comunique las siguientes capacidades:

- desarrollo frontend;
- React;
- Next.js;
- TypeScript;
- responsive design;
- arquitectura de aplicaciones;
- organización de código;
- documentación técnica;
- integración de contenido;
- uso de Server Components;
- comprensión de backend y bases de datos mediante proyectos reales.

Las capacidades backend no necesitan estar implementadas dentro del portfolio.

Se demuestran principalmente mediante:

- AgendaOK;
- Morfis.

---

# 43. Prioridad visual de los proyectos

El portfolio no presenta todos los proyectos con la misma importancia.

La jerarquía será:

Perfil profesional
       ↓
Proyectos destacados
       ↓
AgendaOK
Morfis
       ↓
Proyectos de aprendizaje
       ↓
Control de gastos
Carrito de compras
...

El objetivo es que un reclutador o potencial cliente pueda identificar rápidamente los proyectos más relevantes.

---

# 44. Decisiones descartadas

Durante el desarrollo se descartaron algunas decisiones inicialmente contempladas.

## Dynamic Routes para casos de estudio

Inicialmente se contempló:

app/proyectos/[slug]/page.tsx

La implementación actual utiliza páginas individuales:

app/proyectos/agendaok/page.tsx
app/proyectos/morfis/page.tsx

La decisión permite mantener cada caso de estudio directamente organizado junto con su contenido y estilos.

No existe actualmente la necesidad de introducir una ruta dinámica.

## Directorio independiente para contenido MDX

Inicialmente se contempló:

content/projects/

La implementación actual mantiene los archivos MDX junto a cada caso de estudio.

Esto facilita localizar:

- página;
- contenido;
- estilos;

de cada proyecto.

---

# 45. Estado actual de la arquitectura

Actualmente se encuentran implementados:

- Next.js;
- App Router;
- TypeScript;
- Root Layout;
- Navbar;
- Hero;
- navegación mediante next/link;
- CSS Modules;
- globals.css;
- variables CSS;
- datos centralizados de proyectos;
- tipos FeaturedProject y LearningProject;
- proyectos destacados;
- proyectos de aprendizaje;
- integración de MDX;
- CaseStudySection;
- CaseStudyLinks;
- TechStack;
- TechStackDetails;
- caso de estudio de AgendaOK;
- caso de estudio de Morfis.

La arquitectura todavía continuará evolucionando mientras se implementen:

- Sobre mí;
- Contacto;
- Footer;
- SEO;
- responsive completo;
- accesibilidad;
- deployment.

---

# 46. Evolución futura

La arquitectura podrá evolucionar si aparecen nuevas necesidades.

Posibles evoluciones:

- nuevos casos de estudio;
- más componentes interactivos;
- galerías de imágenes;
- videos;
- mejoras de SEO;
- analytics;
- CMS;
- contenido dinámico;
- nuevas integraciones.

Estas funcionalidades no forman parte de la arquitectura actual.

Cualquier incorporación deberá evaluarse según su necesidad real.

---

# 47. Resumen de decisiones

| Área | Decisión |
|---|---|
| Framework | Next.js |
| Routing | App Router |
| Lenguaje | TypeScript |
| UI | React |
| Server Components | Por defecto |
| Client Components | Solo cuando sean necesarios |
| Estilos | CSS Modules + globals.css |
| Tailwind | No utilizar |
| Datos | TypeScript |
| Contenido largo | MDX |
| MDX | @next/mdx |
| Base de datos | No |
| API propia | No |
| Casos de estudio | AgendaOK y Morfis |
| Rutas de casos de estudio | Páginas individuales |
| Proyectos secundarios | Sin página individual inicialmente |
| SEO | Metadata de Next.js |
| Responsive | CSS responsive |
| Versionado | Git + GitHub |
| Deployment | Vercel |
| Filosofía | Simplicidad y evolución progresiva |