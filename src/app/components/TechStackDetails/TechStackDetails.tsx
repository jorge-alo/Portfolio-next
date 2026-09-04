import styles from "./TechStackDetails.module.css"

type TechStackDetailsProps = {
  frontend: string[]
  backend: string[]
  database: string[]
  infrastructure: string[]
  integrations: string[]
}

export const TechStackDetails = ({
  frontend,
  backend,
  database,
  infrastructure,
  integrations,
}: TechStackDetailsProps) => {
  return (
    <div className={styles.container}>

      <div>
        <h3>Frontend</h3>
        {frontend.map(technology => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div>
        <h3>Backend</h3>
        {backend.map(technology => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div>
        <h3>Base de datos</h3>
        {database.map(technology => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div>
        <h3>Infraestructura</h3>
        {infrastructure.map(technology => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div>
        <h3>Integraciones</h3>
        {integrations.map(technology => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

    </div>
  )
}