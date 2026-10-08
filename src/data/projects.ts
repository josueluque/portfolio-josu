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
    image: "/projects/prendix.webp",
    link: "https://prendix-demo.vercel.app/",
    // github: "https://github.com/josueluque/prendix",
    tags: ["React", "TypeScript", "Supabase", "PWA"],
    title: { es: "Prendix", en: "Prendix" },
    description: {
      es: "App web instalable (PWA) para digitalizar el conteo de prendas por talle en talleres de costura, reemplazando el registro manual en papel. Permite crear y compartir conteos mediante un código de acceso, calcular totales automáticamente y mantener la información sincronizada en tiempo real entre dispositivos mediante Supabase.",
      en: "An installable web app (PWA) to digitize garment counting by size in sewing workshops, replacing manual paper records. It lets you create and share counts via an access code, calculate totals automatically, and keep information synced in real time across devices with Supabase.",
    },
  },
  {
    image: "/projects/nubilist.webp",
    github: "https://github.com/josueluque/nubilist-sgp",
    tags: ["Next.js", "TypeScript", "Prisma", "Docker", "PostgreSQL"],
    title: { es: "Nubilist", en: "Nubilist" },
    description: {
      es: "Sistema de gestión de pedidos diseñado para centralizar su seguimiento y facilitar la organización del trabajo mediante un tablero Kanban. Cada pedido cuenta con un código de seguimiento único, búsqueda en tiempo real y estados que pueden actualizarse mediante drag & drop. Proyecto Full Stack en monorepo, con autenticación, modelo de datos, capa de dominio aislada y testeada, API, Docker y Storybook.",
      en: "An order management system designed to centralize order tracking and streamline workflow through a Kanban board. Each order has a unique tracking code, real-time search, and statuses that can be updated via drag & drop. A full-stack project in a monorepo, with authentication, data model, an isolated and tested domain layer, API, Docker, and Storybook.",
    },
  },
]
