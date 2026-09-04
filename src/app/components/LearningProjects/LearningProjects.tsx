import { proyectosAprendisajes } from "@/app/data/projects"
import { LearningProjectCard } from "../LearningProjectCard.tsx/LearningProjectCard"
import styles from './LearningProjects.module.css'

export const LearningProjects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Proyectos de aprendizaje</h2>

      <div className={styles.projects}>
        {proyectosAprendisajes.map(proyecto => (
          <LearningProjectCard
            key={proyecto.name}
            project={proyecto}
          />
        ))}
      </div>
    </section>
  )
}
