import styles from "./TechStack.module.css"

type TechStackProps = {
  technologies: string[]
}

export const TechStack = ({ technologies }: TechStackProps) => {
  return (
    <div className={styles.container}>
      {technologies.map(technology => (
        <span key={technology}>
          {technology}
        </span>
      ))}
    </div>
  )
}