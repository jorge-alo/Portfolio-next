
import { FeaturedProject } from "../shared/types/FeaturedProject";
import { LearningProject } from "../shared/types/LearningProject";

export const proyectos: FeaturedProject[] = [
    {
        name: 'AgendaOk',
        description: 'AgendaOK es un SaaS destinado a automatizar la gestión de turnos y reservas para negocios de servicios personales como barberías, peluquerías y estéticas.El sistema permite a los clientes reservar turnos online y a los negocios gestionar su agenda desde un panel administrativo.',
        technologies: ['React',
            'Vite',
            'CSS Modules',
            'Node.js',
            'Express',
            'MySQL'],
        image: '/projects/agendaok-agenda.png',
        demoUrl: 'https://app.agendaok.com.ar/the-barba',
        repositoryUrl: 'https://github.com/jorge-alo/Agenda-Estilista-Client',
        caseStudyUrl: '/proyectos/agendaok'
    },
    {
        name: 'Morfis',
        description: "Morfis es un SaaS de menú digital destinado a restaurantes, bares y otros negocios gastronómicos. Permite administrar productos y precios mediante un panel y ofrecer al cliente un menú web desde el cual puede armar un pedido y enviarlo por WhatsApp.",
        technologies: ['React',
            'Vite',
            'CSS',
            'Node.js',
            'Express',
            'MySQL'],
        image: '/projects/morfis-menu.png',
        demoUrl: 'https://www.morfis.com.ar/morfis',
        repositoryUrl: 'https://github.com/jorge-alo/Morfys',
        caseStudyUrl: '/proyectos/morfis'
    }
]

export const proyectosAprendisajes: LearningProject[] = [
    {
        name: 'Control de gastos',
        description: 'Aplicación web para registrar y organizar gastos personales, permitiendo visualizar los movimientos y llevar un mejor control de las finanzas.',
        technologies: ['React',
            'Vite',
            'CSS',
            'Node.js',
            'Express',
            'MySQL'],
        demoUrl: 'https://control-de-gastos-tawny.vercel.app/',
        repositoryUrl: 'https://github.com/jorge-alo/control-de-gastos'
    },
    {
        name: 'Web de compras',
        description: "Aplicación web de compras en la que el usuario puede seleccionar productos, gestionar su carrito y confirmar una orden, practicando el manejo de estado y la interacción entre distintos componentes.",
        technologies: ['React',
            'Vite',
            'CSS',
        ],
        demoUrl: 'https://jorge-alo.github.io/product-list-with-cart-main/',
        repositoryUrl: 'https://github.com/jorge-alo/product-list-with-cart-main',
    },
    {
        name: 'Landing page sha',
        description: "Este proyecto tiene como objetivo construir una plataforma web moderna para presentar SHA como una solución profesional de automatización operativa enfocada en seguridad, disciplina y trazabilidad.",
        technologies: ['Next.js',
            'React',
            'TypeScript', 'CSS', 'Modules',
            'Hook Form',
            'Zod',
            'TanStack Query'
        ],
        demoUrl: 'https://sha-dusky.vercel.app/',
        repositoryUrl: ' https://github.com/jorge-alo/sha',
    }
]
