import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div>
          <p className={styles.name}>Jorge Altamirano</p>
          <p className={styles.role}>Fullstack Web Developer</p>
        </div>

        <div className={styles.links}>
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

        <p className={styles.copyright}>
          © 2026 Jorge Altamirano
        </p>
      </div>
    </footer>
  )
}