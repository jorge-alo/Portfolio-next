# API Specification — Portfolio

## 1. Propósito

Este documento define la estrategia de comunicación entre el portfolio y servicios externos.

El objetivo es establecer qué APIs serán utilizadas, cuáles no serán necesarias y cómo se gestionarán futuras integraciones.

---

# 2. Decisión principal

El portfolio no tendrá una API backend propia en su versión inicial.

No se crearán endpoints para:

- obtener proyectos;
- obtener casos de estudio;
- obtener información personal;
- administrar proyectos;
- administrar contenido.

Los datos del portfolio estarán almacenados dentro del propio proyecto y serán procesados por Next.js.

---

# 3. Justificación

El portfolio es principalmente un sitio de presentación y contenido.

No necesita inicialmente:

- autenticación;
- usuarios;
- sesiones;
- operaciones CRUD;
- datos en tiempo real;
- persistencia de información generada por visitantes;
- panel de administración;
- comunicación entre múltiples clientes.

Por lo tanto, crear una API propia agregaría complejidad sin una necesidad funcional real.

---

# 4. Fuente de datos

Los datos del portfolio estarán distribuidos entre:

- archivos TypeScript;
- archivos MDX;
- imágenes y recursos estáticos.

La aplicación podrá acceder a estos recursos directamente desde el entorno de Next.js.

No será necesario realizar solicitudes HTTP hacia un backend propio.

---

# 5. Flujo de datos

El flujo principal será:

Usuario
    ↓
Next.js
    ↓
Datos locales del proyecto
    ↓
Renderizado de la página
    ↓
Navegador

Para un caso de estudio:

Usuario
    ↓
/proyectos/agendaok
    ↓
Next.js
    ↓
Datos del proyecto + contenido MDX
    ↓
Página renderizada

---

# 6. API propia

No existirá inicialmente una API REST propia.

No se implementarán rutas como:

- GET /api/projects
- GET /api/projects/:slug
- POST /api/projects
- PUT /api/projects/:id
- DELETE /api/projects/:id

Estas operaciones no son necesarias para el funcionamiento inicial del portfolio.

---

# 7. Comunicación con servicios externos

Si el portfolio incorpora servicios externos en el futuro, cada integración deberá evaluarse individualmente.

Posibles ejemplos:

- servicio de envío de emails;
- analytics;
- formulario de contacto;
- servicio de newsletter;
- servicios relacionados con SEO;
- servicios de almacenamiento.

La incorporación de cualquier servicio externo deberá estar justificada por una necesidad real.

---

# 8. Formulario de contacto

El formulario de contacto no tendrá inicialmente un backend propio.

Si se implementa un formulario, podrá utilizarse un servicio externo especializado para procesar los mensajes.

El servicio concreto será seleccionado posteriormente según:

- facilidad de integración;
- seguridad;
- límites del servicio;
- costos;
- privacidad;
- experiencia de usuario.

No se implementará un backend únicamente para procesar un formulario simple si un servicio externo resulta suficiente.

---

# 9. Analytics

El portfolio podrá incorporar analytics en una etapa posterior.

La implementación deberá permitir conocer información como:

- páginas visitadas;
- proyectos consultados;
- procedencia general del tráfico;
- comportamiento básico de navegación.

La herramienta concreta no forma parte de la arquitectura inicial.

Analytics será considerado una funcionalidad adicional y no un requisito para la primera versión.

---

# 10. Integraciones externas de los proyectos

Es importante diferenciar el portfolio de los proyectos que se presentan dentro de él.

AgendaOK y Morfis poseen sus propias arquitecturas backend y sus propias integraciones.

Estas integraciones pertenecen a los proyectos SaaS y no al portfolio.

Por ejemplo:

AgendaOK:

- Node.js;
- Express;
- MySQL;
- Mercado Pago;
- Evolution Manager;
- WhatsApp.

Morfis:

- Node.js;
- Express;
- MySQL;
- Cloudinary;
- WhatsApp.

Estas tecnologías se mostrarán como parte de los casos de estudio y sirven para demostrar experiencia práctica en desarrollo Fullstack.

No forman parte del backend del portfolio.

---

# 11. Enlaces externos

El portfolio podrá enlazar hacia recursos externos relacionados con los proyectos.

Ejemplos:

- landing page;
- demo;
- repositorio de GitHub;
- documentación;
- perfiles profesionales.

Estos enlaces no representan integraciones API.

Son simplemente enlaces de navegación.

---

# 12. Seguridad

Aunque el portfolio no tenga una API propia, se deberán seguir buenas prácticas de seguridad.

No se deberán incluir en el repositorio:

- claves API;
- tokens;
- contraseñas;
- secretos;
- credenciales privadas.

Las variables sensibles deberán gestionarse mediante variables de entorno.

---

# 13. Variables de entorno

Si una integración externa requiere una clave o secreto, se utilizarán variables de entorno.

Por ejemplo, conceptualmente:

NEXT_PUBLIC_...

para valores que realmente deban estar disponibles en el navegador.

Y variables sin el prefijo público para valores que deban permanecer exclusivamente en el servidor.

Las variables sensibles nunca deberán exponerse deliberadamente al cliente.

---

# 14. Server-side y Client-side

Las comunicaciones con servicios externos deberán ejecutarse en el entorno apropiado.

Si una operación requiere mantener una clave privada, deberá realizarse en el servidor.

Si una funcionalidad puede ejecutarse de forma segura en el navegador y no requiere secretos, podrá utilizarse un Client Component cuando sea necesario.

La decisión deberá basarse en:

- seguridad;
- necesidad de interactividad;
- exposición de credenciales;
- arquitectura del servicio externo.

---

# 15. Manejo de errores

Las integraciones externas deberán contemplar posibles errores.

Ejemplos:

- servicio no disponible;
- timeout;
- respuesta inválida;
- límite de solicitudes;
- error de autenticación;
- error de red.

El usuario deberá recibir una respuesta apropiada cuando una integración falle.

No se deberán mostrar al usuario detalles internos o información sensible del error.

---

# 16. Evolución de la API

La ausencia de una API propia corresponde a la versión inicial del portfolio.

Si en el futuro aparecen funcionalidades que requieran comunicación cliente-servidor, se podrá incorporar una API.

Algunos ejemplos:

- sistema de contacto propio;
- autenticación;
- administración de contenido;
- CMS personalizado;
- contenido dinámico;
- estadísticas propias.

En ese caso deberá actualizarse este documento y definirse:

- endpoints;
- métodos HTTP;
- parámetros;
- request bodies;
- respuestas;
- códigos de estado;
- autenticación;
- manejo de errores.

---

# 17. Principio de simplicidad

La arquitectura seguirá el principio:

> No crear una API simplemente porque el proyecto utiliza Next.js.

Una API debe existir cuando resuelve una necesidad real de comunicación entre sistemas o clientes.

En la versión inicial del portfolio esa necesidad no existe.

Por lo tanto, la ausencia de una API propia es una decisión arquitectónica deliberada.

---

# 18. Resumen de decisiones

| Área | Decisión |
|---|---|
| API propia | No inicialmente |
| REST API | No |
| Endpoints internos | No inicialmente |
| Base de datos | No |
| Datos | TypeScript + MDX |
| Formulario de contacto | Servicio externo si es necesario |
| Analytics | Futuro |
| APIs externas | Solo si existe una necesidad |
| Autenticación | No |
| Usuarios | No |
| CRUD | No |
| Secretos | Variables de entorno |
| Backend propio | No inicialmente |
| Evolución | Según necesidades reales |

---

# 19. Conclusión

El portfolio no necesita una API backend propia para cumplir sus objetivos iniciales.

Next.js será responsable de renderizar las páginas y acceder a los datos almacenados dentro del proyecto.

Las integraciones externas se incorporarán únicamente cuando exista una necesidad concreta.

Esta decisión mantiene la arquitectura simple, reduce infraestructura innecesaria y permite concentrar el desarrollo en el objetivo principal del portfolio: demostrar las capacidades del desarrollador mediante una experiencia web profesional y los casos de estudio de AgendaOK y Morfis.