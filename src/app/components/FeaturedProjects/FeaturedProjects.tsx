import { proyectos } from "@/app/data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"
import styles from './FeaturedProjects.module.css'


export const FeaturedProjects = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Proyectos destacados</h2>

      <div className={styles.projects}>
        {proyectos.map(proyecto => (
          <ProjectCard
            key={proyecto.name}
            project={proyecto}
          />
        ))}
      </div>
    </section>
  )
}
