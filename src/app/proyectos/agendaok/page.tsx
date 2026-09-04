import { Metadata } from "next"
import AgendaOkContent from "./agendaok.mdx"
import styles from './page.module.css'


export const metadata: Metadata = {
  title: "AgendaOK | Caso de estudio | Jorge Altamirano",
  description:
    "Caso de estudio de AgendaOK, un SaaS de gestión de turnos y reservas desarrollado con React, Node.js, Express y MySQL.",

  openGraph: {
    title: "AgendaOK | Caso de estudio | Jorge Altamirano",
    description:
      "Caso de estudio de AgendaOK, un SaaS de gestión de turnos y reservas desarrollado con React, Node.js, Express y MySQL.",
    type: "article",
  },
}
const AgendaOk = () => {
  return (
    <main className={styles.caseStudy}>
      <AgendaOkContent />
    </main>
  )
}

export default AgendaOk