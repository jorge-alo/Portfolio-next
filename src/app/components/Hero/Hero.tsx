import Link from "next/link"

import styles from './Hero.module.css'


export const Hero = () => {
    return (
        <section className={styles.hero}>
            <h1 className={styles.title}>Jorge Altamirano</h1>
            <p className={styles.subtitle}>Fullstack Web Developer</p>
            <p className={styles.description}>
                Construyo aplicaciones web completas, desde interfaces modernas y funcionales hasta APIs, bases de datos e integraciones, enfocándome en resolver problemas reales.
            </p>

            <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/proyectos">Ver proyectos</Link>
                <Link className={styles.secondaryButton} href="/contacto">Contactarme</Link>
            </div>

        </section>

    )

}
