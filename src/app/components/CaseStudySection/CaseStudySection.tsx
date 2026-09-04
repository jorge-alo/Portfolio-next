import styles from "./CaseStudySection.module.css"

type CaseStudySectionProps = {
  title: string
  children: React.ReactNode
}

export const CaseStudySection = ({
  title,
  children,
}: CaseStudySectionProps) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}