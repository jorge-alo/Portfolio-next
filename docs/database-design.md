# Database Design — Portfolio

## 1. Propósito

Este documento define las decisiones relacionadas con el almacenamiento y la gestión de datos del portfolio personal.

El objetivo es documentar qué información necesita persistencia, dónde se almacenará y por qué se tomó la decisión de no utilizar una base de datos tradicional.

---

# 2. Decisión principal

El portfolio no utilizará una base de datos.

No se utilizarán sistemas como:

- MySQL
- PostgreSQL
- MongoDB
- Firebase
- Supabase

La información del portfolio estará almacenada dentro del propio repositorio mediante archivos TypeScript y MDX.

Esta decisión responde a las características del proyecto y busca mantener una arquitectura simple y adecuada a las necesidades reales.

---

# 3. Justificación

El portfolio es principalmente un sitio de contenido.

No necesita:

- cuentas de usuarios;
- autenticación;
- sesiones;
- datos generados por usuarios;
- información en tiempo real;
- operaciones CRUD;
- relaciones entre entidades almacenadas en una base de datos;
- panel de administración;
- persistencia de información enviada por visitantes.

El contenido del portfolio será actualizado ocasionalmente por su desarrollador mediante cambios en el código y el repositorio.

Por estas razones, incorporar una base de datos agregaría complejidad sin aportar un beneficio significativo.

---

# 4. Estrategia de almacenamiento

La información se dividirá en dos categorías principales:

1. Datos estructurados.
2. Contenido editorial.

La estrategia será:

- TypeScript para los datos estructurados.
- MDX para el contenido editorial.

Los datos estructurados representan información que la aplicación necesita para organizar y mostrar los proyectos.

El contenido editorial representa información extensa destinada a explicar los proyectos y las decisiones tomadas durante su desarrollo.

---

# 5. Datos estructurados

Los datos estructurados serán almacenados mediante archivos TypeScript.

Estos datos representan información que la aplicación necesita conocer para mostrar los proyectos.

Ejemplos:

- nombre del proyecto;
- slug;
- descripción corta;
- tecnologías;
- categoría;
- imagen principal;
- URL de la demo;
- URL del repositorio;
- URL de la landing page;
- referencia al contenido del caso de estudio.

Una estructura conceptual será:

src/
└── data/
    └── projects/
        ├── featured.ts
        └── learning.ts

---

# 6. Proyectos destacados

Los proyectos destacados serán:

- AgendaOK;
- Morfis.

Estos proyectos tendrán información más completa debido a que representan los principales proyectos del portfolio.

La información estructurada podrá incluir:

- id;
- name;
- slug;
- shortDescription;
- technologies;
- image;
- demoUrl;
- repositoryUrl;
- landingUrl;
- caseStudy.

La estructura final podrá modificarse durante el desarrollo si aparece una necesidad concreta.

No se agregarán propiedades que no sean utilizadas.

---

# 7. Proyectos secundarios

Los proyectos secundarios tendrán una estructura más simple.

Estos proyectos pueden incluir:

- calculadoras;
- relojes;
- carruseles;
- landing pages;
- ejercicios;
- pequeños proyectos realizados durante el aprendizaje.

No todos estos proyectos necesitan las mismas propiedades que AgendaOK y Morfis.

Por ejemplo, un proyecto secundario podría necesitar únicamente:

- id;
- name;
- description;
- technologies;
- image;
- demoUrl;
- repositoryUrl.

El modelo deberá mantenerse simple y adaptarse a las necesidades reales de estos proyectos.

---

# 8. Contenido editorial

El contenido extenso de los proyectos no estará almacenado dentro de los objetos TypeScript.

Los casos de estudio utilizarán MDX.

La estructura conceptual será:

content/
└── projects/
    ├── agendaok.mdx
    └── morfis.mdx

Estos archivos contendrán el contenido editorial de cada caso de estudio.

---

# 9. Información contenida en los casos de estudio

Los casos de estudio podrán contener información como:

- visión general;
- problema;
- público objetivo;
- funcionalidades;
- stack tecnológico;
- decisiones técnicas;
- desafíos;
- soluciones;
- arquitectura;
- aprendizajes;
- resultados;
- imágenes;
- enlaces;
- demostraciones.

Esta información puede ser mucho más extensa que la información estructurada de un proyecto.

Por ese motivo se mantiene separada.

---

# 10. Relación entre datos y contenido

Los datos estructurados y el contenido editorial estarán relacionados mediante el slug del proyecto.

Por ejemplo:

Proyecto:
slug = "agendaok"

Contenido:
content/projects/agendaok.mdx

Y:

Proyecto:
slug = "morfis"

Contenido:
content/projects/morfis.mdx

El slug funcionará como identificador común entre ambas fuentes.

La relación conceptual será:

featured.ts
    ↓
slug = "agendaok"
    ↓
agendaok.mdx

Y:

featured.ts
    ↓
slug = "morfis"
    ↓
morfis.mdx

---

# 11. Ventajas de esta separación

Separar los datos estructurados del contenido editorial permite:

- mantener los componentes más simples;
- modificar el contenido sin modificar la estructura de los componentes;
- reutilizar los datos en diferentes partes del portfolio;
- utilizar el mismo sistema para diferentes casos de estudio;
- mantener TypeScript enfocado en datos estructurados;
- mantener MDX enfocado en contenido editorial.

Esto también facilita la evolución futura del proyecto.

---

# 12. TypeScript como sistema de tipos

Los datos estructurados estarán tipados mediante TypeScript.

Los tipos permitirán definir qué propiedades necesita cada tipo de proyecto.

Conceptualmente existirán diferentes estructuras para:

- FeaturedProject;
- LearningProject.

FeaturedProject representará un proyecto completo que tendrá:

- caso de estudio;
- links;
- tecnologías;
- información técnica;
- contenido detallado.

LearningProject representará un proyecto pequeño que podrá tener:

- descripción;
- tecnologías;
- demo;
- repositorio.

TypeScript permitirá detectar durante el desarrollo problemas como:

- propiedades inexistentes;
- tipos incorrectos;
- datos faltantes;
- estructuras inconsistentes.

No se utilizará un objeto genérico sin tipado para representar todos los proyectos.

---

# 13. No duplicación de información

Se intentará evitar almacenar la misma información en múltiples lugares.

Por ejemplo, si el nombre de un proyecto ya existe en los datos estructurados, no será necesario duplicarlo innecesariamente en otro archivo de configuración.

La información deberá tener una fuente de verdad clara.

Esto será especialmente importante para:

- nombres;
- slugs;
- URLs;
- tecnologías;
- imágenes.

---

# 14. Imágenes

Las imágenes del portfolio serán almacenadas inicialmente como archivos del proyecto.

Una estructura posible será:

public/
└── images/
    ├── projects/
    │   ├── agendaok/
    │   └── morfis/
    └── profile/

Las imágenes utilizadas en los casos de estudio deberán estar optimizadas para web.

Si en el futuro existe una necesidad concreta de utilizar un servicio externo de almacenamiento de imágenes, la arquitectura podrá evolucionar.

---

# 15. Información personal

La información personal presentada en el portfolio no requiere una base de datos.

Ejemplos:

- nombre;
- presentación;
- descripción profesional;
- tecnologías;
- formación;
- experiencia en proyectos;
- enlaces profesionales.

Esta información podrá formar parte de:

- páginas;
- componentes;
- datos estructurados;
- contenido editorial.

La ubicación concreta se decidirá según la naturaleza de cada información.

---

# 16. Contacto

El portfolio no almacenará inicialmente los mensajes enviados desde un formulario de contacto.

Si se implementa un formulario, deberá utilizarse un servicio externo o mecanismo apropiado para procesar el envío.

El portfolio no tendrá una tabla de contactos propia.

La implementación concreta del contacto será definida en la arquitectura y/o especificación de API si posteriormente resulta necesaria.

---

# 17. Estado de la aplicación

El portfolio no requiere un sistema de estado global.

No existen datos de usuario o información persistente que necesite sincronizarse entre múltiples páginas.

Los componentes interactivos podrán utilizar estado local mediante React cuando sea necesario.

Ejemplos:

- menú móvil;
- galería de imágenes;
- filtros de proyectos;
- interacciones visuales.

Este estado será temporal y no se almacenará en una base de datos.

---

# 18. Datos dinámicos

El portfolio utilizará principalmente datos estáticos.

Los datos dinámicos solamente serán incorporados si existe una necesidad concreta.

No se implementará una solución dinámica simplemente para demostrar una tecnología.

La prioridad será mantener una arquitectura adecuada al tamaño y propósito del proyecto.

---

# 19. Evolución futura

La ausencia de una base de datos es una decisión para la versión inicial del portfolio.

No significa que el proyecto no pueda evolucionar.

En el futuro podría evaluarse incorporar una fuente de datos externa si aparecen necesidades como:

- CMS;
- administración de contenido desde una interfaz;
- contenido generado por usuarios;
- múltiples administradores;
- publicación frecuente de contenido;
- comentarios;
- sistema de contacto avanzado;
- analytics almacenados;
- funcionalidades dinámicas.

Cualquier incorporación deberá justificarse por una necesidad real.

---

# 20. Migración futura

Si en el futuro se incorpora una base de datos, la arquitectura deberá permitir migrar los datos existentes.

Actualmente los datos estructurados estarán separados del contenido editorial.

Esto facilita que, en caso de necesitar una fuente de datos diferente, la información pueda migrarse sin modificar necesariamente toda la interfaz del portfolio.

La migración deberá realizarse únicamente cuando exista una necesidad concreta.

---

# 21. Seguridad

Al no existir una base de datos ni cuentas de usuarios, el portfolio tendrá una superficie de ataque menor relacionada con almacenamiento de datos.

No se almacenarán:

- contraseñas;
- tokens de usuarios;
- información personal de visitantes;
- datos sensibles;
- información privada.

Las claves o secretos relacionados con servicios externos, si fueran necesarios, deberán manejarse mediante variables de entorno y nunca almacenarse directamente en el repositorio.

---

# 22. Backup y control de versiones

Los datos y contenidos del portfolio estarán versionados mediante Git.

El repositorio funcionará como fuente principal del contenido.

Los cambios podrán recuperarse mediante el historial de Git.

El repositorio remoto en GitHub proporcionará una copia adicional del proyecto.

---

# 23. Principio de simplicidad

La decisión de no utilizar una base de datos sigue uno de los principios principales de la arquitectura:

> No agregar complejidad si el problema no la necesita.

Una base de datos es una herramienta adecuada cuando existe información que necesita persistencia, consultas, relaciones, actualización frecuente o interacción de usuarios.

El portfolio actual no presenta esas necesidades.

Por lo tanto, almacenar los datos dentro del propio proyecto es una solución suficiente.

---

# 24. Resumen de decisiones

| Área | Decisión |
|---|---|
| Base de datos | No utilizar |
| Datos estructurados | TypeScript |
| Contenido editorial | MDX |
| Proyectos destacados | AgendaOK y Morfis |
| Proyectos secundarios | Estructura simplificada |
| Identificación de proyectos | slug |
| Imágenes | Inicialmente locales |
| Estado global | No utilizar inicialmente |
| Persistencia de usuarios | No |
| Autenticación | No |
| CRUD | No |
| API propia | No |
| Control de versiones | Git + GitHub |
| Fuente principal de contenido | Repositorio |
| CMS | No inicialmente |
| Evolución | Según necesidades reales |

---

# 25. Conclusión

El portfolio utilizará una estrategia de almacenamiento simple basada en archivos del propio proyecto.

TypeScript será utilizado para los datos estructurados y MDX para el contenido editorial.

Esta arquitectura evita introducir una base de datos innecesaria y mantiene el proyecto fácil de entender, desarrollar y mantener.

La solución podrá evolucionar en el futuro si las necesidades del portfolio cambian.