import { LearningProject } from "@/app/shared/types/LearningProject"
import styles from './LearningProjectCard.module.css'

export const LearningProjectCard = ({ project }: { project: LearningProject }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{project.name}</h2>

      <p className={styles.description}>
        {project.description}
      </p>

      <ul className={styles.technologies}>
        {project.technologies.map(tec => (
          <li className={styles.technology} key={tec}>
            {tec}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a
          className={styles.primaryLink}
          target="_blank"
          href={project.demoUrl}
        >
          Demo
        </a>

        <a
          className={styles.link}
          target="_blank"
          href={project.repositoryUrl}
        >
          Repositorio en Github
        </a>
      </div>
    </div>
  )
}
