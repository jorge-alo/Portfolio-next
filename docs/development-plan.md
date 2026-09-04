# Development Plan — Portfolio

## 1. Propósito

Este documento define el plan de desarrollo del portfolio personal.

El objetivo no es únicamente terminar un portfolio funcional y profesional.

El proyecto también será utilizado como una instancia de aprendizaje práctico para fortalecer la autonomía del desarrollador al programar.

El desarrollo se realizará progresivamente, priorizando la comprensión del código por encima de la velocidad de implementación.

---

# 2. Objetivos del desarrollo

El desarrollo tendrá cuatro objetivos principales:

1. Construir un portfolio profesional.
2. Demostrar experiencia práctica en desarrollo Fullstack.
3. Fortalecer conocimientos de React, TypeScript y Next.js.
4. Recuperar autonomía en la escritura y comprensión del código.

El portfolio deberá permitir presentar de manera clara:

- conocimientos técnicos;
- proyectos completos;
- capacidad para resolver problemas;
- experiencia construyendo aplicaciones reales;
- conocimientos de frontend;
- conocimientos de backend;
- capacidad para trabajar con bases de datos;
- capacidad para integrar servicios externos;
- capacidad para desplegar aplicaciones.

---

# 3. Estrategia general

El proyecto se desarrollará de forma incremental.

No se intentará construir todo el portfolio de una sola vez.

Cada etapa deberá producir una parte funcional del proyecto.

El proceso general será:

Planificar
   ↓
Implementar
   ↓
Probar
   ↓
Revisar
   ↓
Refactorizar cuando sea necesario
   ↓
Continuar

---

# 4. Desarrollo orientado al aprendizaje

Este proyecto tendrá un enfoque de aprendizaje práctico.

El desarrollador cuenta con experiencia previa utilizando:

- HTML;
- CSS;
- JavaScript;
- React;
- TypeScript;
- Node.js;
- Express;
- MySQL;
- Git;
- Vite.

El objetivo no es comenzar desde cero.

El objetivo es utilizar Next.js y las tecnologías relacionadas mientras se recupera fluidez escribiendo código manualmente.

---

# 5. Uso de inteligencia artificial

La inteligencia artificial será utilizada como herramienta de asistencia durante el desarrollo.

Su función principal será:

- explicar conceptos;
- responder preguntas;
- ayudar a razonar soluciones;
- revisar código;
- detectar errores;
- explicar mensajes de error;
- sugerir mejoras;
- orientar durante debugging;
- mostrar ejemplos cuando sean necesarios.

La IA no deberá reemplazar automáticamente el proceso de programación del desarrollador.

---

# 6. Regla principal de asistencia

Siempre que sea razonable, el desarrollador deberá intentar resolver primero el problema.

El flujo recomendado será:

Problema
   ↓
Comprender qué se necesita
   ↓
Pensar una solución
   ↓
Intentar escribir el código
   ↓
Probar
   ↓
Pedir asistencia
   ↓
Revisar y corregir

No se solicitará automáticamente una implementación completa para problemas que el desarrollador pueda resolver con orientación.

---

# 7. Niveles de ayuda

La asistencia podrá utilizar diferentes niveles.

## Nivel 1 — Pista

Se explica qué concepto o herramienta debería investigarse.

Ejemplo:

"Pensá qué hook de React permite mantener un valor que cambia."

El desarrollador intenta resolverlo.

---

## Nivel 2 — Orientación

Se explica la estrategia general sin proporcionar todo el código.

Ejemplo:

"Necesitás obtener el slug desde los parámetros de la ruta y utilizarlo para buscar el proyecto correspondiente."

El desarrollador implementa la solución.

---

## Nivel 3 — Revisión

El desarrollador proporciona su código.

La asistencia analiza:

- errores;
- problemas de lógica;
- tipos;
- estructura;
- buenas prácticas;
- oportunidades de mejora.

Primero se explicará el problema antes de proporcionar una solución completa.

---

## Nivel 4 — Ejemplo

Si el concepto es nuevo o existe un bloqueo importante, se podrá mostrar una implementación de referencia.

La implementación deberá ser explicada para que el desarrollador comprenda:

- qué hace;
- por qué funciona;
- qué alternativas existen;
- qué partes puede modificar.

---

## Nivel 5 — Solución completa

Se utilizará únicamente cuando:

- exista un bloqueo importante;
- el problema sea demasiado complejo;
- sea necesario avanzar después de varios intentos;
- se trate de código repetitivo;
- exista una razón práctica para hacerlo.

Incluso en estos casos, el código deberá ser comprendido antes de incorporarlo al proyecto.

---

# 8. Prohibición de copiar código sin comprenderlo

No se incorporará código generado por IA simplemente porque funcione.

Antes de utilizar una solución generada, el desarrollador deberá poder explicar al menos:

- qué hace;
- por qué funciona;
- qué datos recibe;
- qué devuelve;
- qué dependencias utiliza;
- qué ocurriría si se modifica una parte importante.

El objetivo es evitar que el portfolio sea construido sin que su autor pueda defender técnicamente sus decisiones.

---

# 9. Preguntas durante el desarrollo

Durante el desarrollo, el desarrollador podrá detenerse para preguntar sobre cualquier concepto.

Por ejemplo:

- ¿por qué este componente es Server Component?
- ¿por qué necesitamos "use client"?
- ¿qué diferencia existe entre server y browser?
- ¿por qué usamos CSS Modules?
- ¿qué hace esta función?
- ¿por qué TypeScript marca este error?
- ¿por qué esta información está en data/?
- ¿por qué este contenido está en MDX?

Las explicaciones deberán priorizar la comprensión conceptual antes que la implementación.

---

# 10. Etapas de desarrollo

El proyecto se dividirá en etapas.

## Etapa 1 — Inicialización

Objetivo:

Crear y configurar correctamente el proyecto Next.js.

Tareas:

- crear proyecto;
- configurar TypeScript;
- configurar App Router;
- verificar ejecución local;
- configurar Git;
- crear estructura inicial;
- comprobar build.

Resultado esperado:

Proyecto Next.js funcionando correctamente.

---

## Etapa 2 — Estructura base

Objetivo:

Construir la estructura principal del portfolio.

Tareas:

- Root Layout;
- Navbar;
- Footer;
- estructura de páginas;
- estilos globales;
- estructura de componentes;
- estructura de datos;
- estructura de contenido.

Resultado esperado:

Arquitectura inicial funcionando y navegable.

---

## Etapa 3 — Página principal

Objetivo:

Construir la Home del portfolio.

La página deberá comunicar rápidamente:

- quién es el desarrollador;
- qué tipo de desarrollo realiza;
- tecnologías principales;
- proyectos destacados;
- llamada a la acción.

Se priorizará la claridad sobre la cantidad de elementos visuales.

---

## Etapa 4 — Sección de proyectos

Objetivo:

Crear la sección donde se presentarán los proyectos.

Deberá diferenciar entre:

### Proyectos destacados

- AgendaOK;
- Morfis.

### Proyectos secundarios

- calculadora;
- reloj;
- carrusel;
- landing pages;
- otros proyectos de aprendizaje.

Los proyectos destacados tendrán mayor presencia visual.

---

## Etapa 5 — Caso de estudio AgendaOK

Objetivo:

Presentar AgendaOK como evidencia principal de experiencia Fullstack.

La página deberá utilizar el contenido ya documentado del proyecto.

Deberá mostrar:

- visión general;
- problema;
- solución;
- funcionalidades;
- stack;
- arquitectura;
- desafíos técnicos;
- decisiones;
- resultados;
- aprendizajes;
- demo;
- repositorio;
- landing page.

---

## Etapa 6 — Caso de estudio Morfis

Objetivo:

Presentar Morfis como segundo proyecto principal.

La página deberá utilizar el contenido ya documentado del proyecto.

Deberá mostrar:

- visión general;
- problema;
- solución;
- funcionalidades;
- stack;
- arquitectura;
- desafíos técnicos;
- decisiones;
- resultados;
- aprendizajes;
- demo;
- repositorio;
- landing page.

---

## Etapa 7 — Sobre mí

Objetivo:

Presentar al desarrollador de manera profesional.

La sección deberá comunicar:

- experiencia de aprendizaje;
- formación;
- tecnologías;
- enfoque profesional;
- experiencia construyendo proyectos completos;
- interés profesional.

No se utilizará la palabra "Junior" como elemento principal de la identidad profesional del portfolio.

La presentación deberá posicionar al desarrollador como:

**Fullstack Developer**

El nivel profesional podrá contextualizarse en el contenido cuando resulte necesario, especialmente en procesos laborales.

---

## Etapa 8 — Contacto

Objetivo:

Facilitar que un reclutador o potencial cliente pueda ponerse en contacto.

Podrá incluir:

- email;
- GitHub;
- LinkedIn;
- formulario de contacto;
- otros canales profesionales.

La implementación del formulario será evaluada según su complejidad y necesidad.

---

## Etapa 9 — Responsive y accesibilidad

Objetivo:

Asegurar una experiencia correcta en diferentes dispositivos.

Se revisarán:

- mobile;
- tablet;
- desktop;
- navegación;
- tamaños de texto;
- imágenes;
- interacción;
- teclado;
- contraste;
- HTML semántico.

---

## Etapa 10 — SEO

Objetivo:

Preparar el portfolio para buscadores y compartir enlaces.

Se implementarán:

- metadata;
- títulos;
- descripciones;
- Open Graph;
- URLs claras;
- metadata específica de proyectos;
- imágenes sociales cuando corresponda.

---

## Etapa 11 — Performance

Objetivo:

Optimizar la experiencia de carga.

Se revisará:

- imágenes;
- JavaScript enviado al cliente;
- Server Components;
- Client Components;
- dependencias;
- CSS;
- carga de recursos.

No se realizarán optimizaciones prematuras.

Primero se construirá una versión funcional y luego se optimizará donde exista una necesidad real.

---

## Etapa 12 — Revisión final

Antes del deployment se realizará una revisión general.

Se comprobará:

- funcionalidad;
- responsive;
- accesibilidad;
- SEO;
- performance;
- enlaces;
- navegación;
- errores;
- metadata;
- contenido;
- ortografía;
- consistencia visual.

---

## Etapa 13 — Deployment

Objetivo:

Publicar el portfolio.

Flujo:

Desarrollo local
   ↓
Git
   ↓
GitHub
   ↓
Vercel
   ↓
Producción

Después del deployment se verificará:

- navegación;
- imágenes;
- metadata;
- responsive;
- enlaces;
- demos;
- repositorios.

---

# 11. Orden de implementación

El orden general será:

1. Inicialización del proyecto.
2. Configuración y estructura.
3. Layout global.
4. Navbar.
5. Footer.
6. Home.
7. Datos de proyectos.
8. Sección de proyectos.
9. Página dinámica de proyectos.
10. Integración de MDX.
11. Caso de estudio AgendaOK.
12. Caso de estudio Morfis.
13. Proyectos secundarios.
14. Sobre mí.
15. Contacto.
16. Responsive.
17. Accesibilidad.
18. SEO.
19. Performance.
20. Revisión.
21. Deployment.

El orden podrá modificarse si durante el desarrollo aparece una razón técnica para hacerlo.

---

# 12. Desarrollo por tareas pequeñas

Las etapas grandes se dividirán en tareas pequeñas.

Por ejemplo:

Etapa:

Navbar

Tareas:

1. Crear componente.
2. Definir estructura HTML.
3. Crear estilos.
4. Agregar navegación.
5. Probar en desktop.
6. Probar en mobile.
7. Revisar accesibilidad.

No se intentará completar componentes complejos en una sola operación.

---

# 13. Ciclo de cada tarea

Cada tarea seguirá aproximadamente este ciclo:

### 1. Entender

Determinar exactamente qué debe hacer la tarea.

### 2. Pensar

Identificar:

- componentes necesarios;
- datos necesarios;
- conceptos involucrados;
- posibles problemas.

### 3. Implementar

El desarrollador intentará escribir la solución.

### 4. Probar

Se ejecutará la aplicación y se verificará el comportamiento.

### 5. Revisar

Se analizará:

- código;
- tipos;
- estructura;
- errores;
- posibles mejoras.

### 6. Documentar

Cuando una decisión sea importante, podrá documentarse.

### 7. Continuar

Una vez comprendida y validada la tarea, se pasará a la siguiente.

---

# 14. Uso de Git durante el desarrollo

Se utilizará Git durante todo el proyecto.

Se recomienda realizar commits después de completar unidades lógicas de trabajo.

Ejemplos:

- feat: create base layout
- feat: add navbar
- feat: add projects section
- feat: add AgendaOK case study
- feat: add MDX support
- fix: correct mobile navigation
- refactor: simplify project data
- style: improve project cards

Los commits deberán representar cambios comprensibles.

---

# 15. Debugging

Los errores serán utilizados como oportunidades de aprendizaje.

Cuando aparezca un error se intentará seguir este proceso:

1. Leer el mensaje de error.
2. Identificar dónde ocurre.
3. Determinar qué esperaba el programa.
4. Compararlo con lo que realmente está ocurriendo.
5. Formular una hipótesis.
6. Probar una solución.
7. Verificar el resultado.
8. Pedir asistencia si es necesario.

No se buscará simplemente eliminar el error sin comprender su causa.

---

# 16. Documentación técnica

Durante el desarrollo se utilizarán los documentos existentes como referencia.

Documentos:

- product-spec.md
- architecture.md
- database-design.md
- api-spec.md
- development-plan.md

Si una decisión importante cambia durante el desarrollo, el documento correspondiente deberá actualizarse.

La documentación no deberá convertirse en una carga innecesaria.

Solo se documentarán decisiones que aporten valor.

---

# 17. Criterios para considerar una tarea terminada

Una tarea podrá considerarse terminada cuando:

- funciona correctamente;
- no presenta errores conocidos;
- el código es comprensible;
- TypeScript no presenta errores relacionados;
- se verificó el comportamiento;
- cumple el objetivo definido;
- el desarrollador comprende la implementación.

Una tarea no se considerará terminada únicamente porque "funciona".

---

# 18. Criterios para considerar el portfolio terminado

La primera versión estará terminada cuando:

- todas las páginas principales funcionen;
- AgendaOK esté presentado correctamente;
- Morfis esté presentado correctamente;
- los proyectos secundarios estén incluidos;
- el diseño sea responsive;
- exista navegación funcional;
- el SEO básico esté implementado;
- los enlaces funcionen;
- no existan errores críticos;
- el proyecto esté desplegado;
- el código pueda ser explicado por su autor.

---

# 19. Alcance de la primera versión

La primera versión priorizará:

- calidad;
- claridad;
- profesionalismo;
- performance;
- responsive;
- accesibilidad;
- presentación de proyectos.

No se intentará incorporar todas las funcionalidades posibles.

El objetivo es publicar un portfolio sólido y profesional.

---

# 20. Funcionalidades fuera del alcance inicial

No forman parte del desarrollo inicial:

- CMS;
- base de datos;
- autenticación;
- dashboard;
- API propia;
- sistema de usuarios;
- comentarios;
- sistema de publicaciones;
- funcionalidades sociales;
- backend complejo.

Estas funcionalidades podrán evaluarse posteriormente.

---

# 21. Resultado esperado

Al finalizar el proyecto, el portfolio deberá transmitir claramente:

"Soy un desarrollador Fullstack que ha construido aplicaciones web completas y puede explicar las decisiones técnicas detrás de ellas."

Los proyectos principales deberán funcionar como evidencia práctica de las capacidades del desarrollador.

AgendaOK y Morfis tendrán un papel central en esta demostración.

Los proyectos secundarios servirán como complemento y evidencia de práctica.

---

# 22. Filosofía del proyecto

El proyecto seguirá tres principios principales:

### Construir

Crear un producto real y profesional.

### Comprender

Entender el código y las decisiones técnicas.

### Mejorar

Utilizar cada etapa como una oportunidad para fortalecer las habilidades del desarrollador.

El objetivo final no será solamente tener un portfolio publicado.

El objetivo será terminar el proyecto siendo un desarrollador más autónomo y capaz de explicar lo que construyó.