
import { Metadata } from 'next'
import { FeaturedProjects } from '../components/FeaturedProjects/FeaturedProjects'
import { LearningProjects } from '../components/LearningProjects/LearningProjects'

export const metadata: Metadata = {
  title: "Proyectos | Jorge Altamirano",
  description:
    "Proyectos web desarrollados por Jorge Altamirano, incluyendo aplicaciones SaaS y proyectos de aprendizaje con React, Node.js, Express y MySQL.",
}

const Proyectos = () => {
  return (
    <main>
        <FeaturedProjects/>
        <LearningProjects/>
    </main>

  )
}

export default Proyectos