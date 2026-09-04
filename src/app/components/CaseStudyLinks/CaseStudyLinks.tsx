import styles from "./CaseStudyLinks.module.css"

type CaseStudyLinksProps = {
  landingUrl: string
  demoUrl: string
  repositoryUrl: string
}

export const CaseStudyLinks = ({
  landingUrl,
  demoUrl,
  repositoryUrl,
}: CaseStudyLinksProps) => {
  return (
    <div className={styles.container}>
      <a
        href={landingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Landing Page
      </a>

      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver Demo
      </a>

      <a
        href={repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )
}