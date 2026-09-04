import { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Sobre mí | Jorge Altamirano",
  description:
    "Conocé el recorrido, formación y experiencia de Jorge Altamirano como Fullstack Web Developer.",
}

const SobreMi = () => {
  return (
    <main className={styles.container}>
        <h1>Sobre mí</h1>
        <p>
          Soy Jorge Altamirano, desarrollador Fullstack enfocado en la creación de soluciones web completas y funcionales. Cuento con dos años de formación en la Tecnicatura en Programación de la UTN y tres años de experiencia estudiando y construyendo aplicaciones web por cuenta propia. Durante este recorrido he trabajado en el desarrollo de frontend, backend, APIs, bases de datos e integraciones, creando proyectos propios de principio a fin. Actualmente busco seguir creciendo profesionalmente, ya sea incorporándome a un equipo de desarrollo o participando en proyectos freelance donde pueda aportar mis conocimientos y continuar adquiriendo experiencia.
        </p>
      
      <section className={styles.section}>
        <h2>Mi recorrido</h2>
        <p> Mi formación como desarrollador se fue construyendo principalmente a través del estudio autodidacta y la práctica. A lo largo de estos años fui profundizando en el desarrollo web mediante cursos, documentación y, especialmente, la creación de proyectos propios. </p>
        <p>Comencé trabajando sobre los fundamentos del desarrollo frontend y progresivamente incorporé React y otras herramientas del ecosistema web. Luego amplié mis conocimientos hacia el backend, desarrollando APIs con Node.js y Express, trabajando con bases de datos MySQL, autenticación e integraciones con servicios externos.</p>
        <p>Este proceso me llevó a desarrollar aplicaciones cada vez más completas, donde no solo me ocupo de la interfaz, sino también de la lógica del servidor, la persistencia de datos y la comunicación entre las distintas partes del sistema.</p>
      </section>

      <section className={styles.section}>
        <h2>Comó trabajo</h2>
        <p>Me interesa entender primero el problema que hay detrás de una aplicación y, a partir de ahí, buscar una solución que sea funcional y adecuada a las necesidades del proyecto. Disfruto trabajar tanto en el frontend como en el backend, conectando las distintas partes de una aplicación para construir una solución completa.</p>
        <p>En mis proyectos busco aplicar buenas prácticas de desarrollo, mantener el código organizado y tomar decisiones técnicas que tengan sentido para cada caso. También considero importante seguir aprendiendo y adaptarme a nuevas herramientas y tecnologías cuando el proyecto lo requiere.</p>
        <p>Una de las partes que más disfruto del desarrollo es enfrentar un problema que no conozco, investigarlo, probar distintas alternativas y finalmente encontrar una solución que funcione.</p>
      </section>

      <section className={styles.section}>
        <h2>Un poco sobre mí</h2>
        <p>Fuera del desarrollo web, disfruto de dos actividades que forman parte importante de mi vida: el ajedrez y la música. El ajedrez me atrae por el análisis y la búsqueda de soluciones, mientras que la música me permite explorar mi lado más creativo.</p>
        <p>Creo que ambas actividades complementan mi forma de abordar el desarrollo: combinando lógica, paciencia, curiosidad y creatividad.</p>
      </section>
    </main>
  )
}

export default SobreMi