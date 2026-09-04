import { Metadata } from "next"
import MorfisContent from "./morfis.mdx"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Morfis | Caso de estudio | Jorge Altamirano",
  description:
    "Caso de estudio de Morfis, un SaaS de menú digital para negocios gastronómicos desarrollado con React, Node.js, Express y MySQL.",

  openGraph: {
    title: "Morfis | Caso de estudio | Jorge Altamirano",
    description:
      "Caso de estudio de Morfis, un SaaS de menú digital para negocios gastronómicos desarrollado con React, Node.js, Express y MySQL.",
    type: "article",
  },
}

const Morfis = () => {
  return (
    <main className={styles.caseStudy}>
      <MorfisContent />
    </main>
  )
}

export default Morfis