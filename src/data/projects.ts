import type { Localized } from "@/i18n/types"

export interface Project {
  image: string
  link?: string
  github?: string
  tags: string[]
  title: Localized
  description: Localized
}

export const projects: Project[] = [
  {
    image: "/projects/prendix-home.png",
    link: "https://prendix-nine.vercel.app/",
    github: "https://github.com/josueluque/prendix",
    tags: ["React", "TypeScript", "Supabase", "PWA", "Vercel"],
    title: { es: "Prendix", en: "Prendix" },
    description: {
      es: "Conteo colaborativo de prendas por talle, en tiempo real, para talleres de costura. Web App instalable (PWA) que reemplaza el cuaderno de papel: se comparte con un código de acceso, cada persona registra conteos por talle y los totales se calculan solos, con sincronización en tiempo real entre dispositivos mediante Supabase.",
      en: "Collaborative, real-time garment counting by size for sewing workshops. An installable Web App (PWA) that replaces the paper notebook: shared with an access code, each person records counts by size and totals are computed automatically, with real-time sync across devices via Supabase.",
    },
  },
  {
    image: "/projects/nubilist-placeholder.svg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker"],
    title: { es: "Nubilist", en: "Nubilist" },
    description: {
      es: "Tablero Kanban para gestionar pedidos con códigos de seguimiento únicos, búsqueda en tiempo real y drag & drop entre 4 estados. Proyecto personal full stack en monorepo: modelo de datos, capa de dominio aislada y testeada, API, interfaz y Docker, con autenticación (NextAuth) y panel de Storybook.",
      en: "Kanban board to manage orders with unique tracking codes, real-time search and drag & drop across 4 states. A full-stack personal project in a monorepo: data model, isolated and tested domain layer, API, UI and Docker, with authentication (NextAuth) and a Storybook panel.",
    },
  },
]
