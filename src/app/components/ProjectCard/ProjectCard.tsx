import { FeaturedProject } from "@/app/shared/types/FeaturedProject"
import Link from "next/link"
import styles from './ProjectCard.module.css'

export const ProjectCard = ({ project }: { project: FeaturedProject }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}> {project.name} </h2>
      <p className={styles.description}> {project.description} </p>
      <ul className={styles.technologies}>
        {project.technologies.map(tec => (
          <li className={styles.technology} key={`${tec}-3`}> {tec} </li>
        )

        )}
      </ul>
      <div className={styles.links}>
        <a className={styles.primaryLink} target='_blank' rel="noopener noreferrer" href={project.demoUrl}> Demo </a>
        <a className={styles.link} target='_blank' rel="noopener noreferrer" href={project.repositoryUrl} >Repositorio en Github</a>
        <Link className={styles.link} href={project.caseStudyUrl} > Caso de estudio</Link>
      </div>


    </div>
  )
}
