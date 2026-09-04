import { Metadata } from "next"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Contacto | Jorge Altamirano",
  description:
    "Contactá a Jorge Altamirano para oportunidades laborales, proyectos freelance y colaboraciones en desarrollo web.",
}

const Contacto = () => {
  return (
    <main className={styles.container}>
      <h1>Contacto</h1>

      <p className={styles.introduction}>
        ¿Tenés un proyecto en mente o querés contactarme por una oportunidad
        laboral? Estoy abierto a nuevos desafíos, tanto para incorporarme a un
        equipo de desarrollo como para participar en proyectos freelance.
      </p>

      <div className={styles.links}>
        <a href="mailto:alojorge13@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/jorge-alo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jorge-altamirano-87717b2aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://wa.me/5491144040093"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </main>
  )
}

export default Contacto