import type { Localized } from "@/i18n/types"

export interface ExperienceEntry {
  current?: boolean
  title: Localized
  company: string
  date: Localized
  description: Localized
}

export const experience: ExperienceEntry[] = [
  {
    current: true,
    title: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    company: "ForIT Software Factory",
    date: {
      es: "Abril 2026 — Actualidad · Remoto",
      en: "April 2026 — Present · Remote",
    },
    description: {
      es: "Desarrollo de soluciones web para gestión escolar y herramientas internas. Trabajé junto a un equipo en la evolución de un sistema de gestión escolar para alumnos, familias, docentes, comunicaciones y facturación, con una dinámica autogestionada para organizar el trabajo y tomar decisiones técnicas junto a los referentes del proyecto. Realicé análisis de seguridad, identificación y corrección de vulnerabilidades en distintos módulos del sistema, incluyendo funcionalidades relacionadas con pagos. También colaboré en el desarrollo de una plataforma interna de reconocimiento entre colaboradores.",
      en: "Development of web solutions for school management and internal tools. I worked alongside a team on the evolution of a school management system for students, families, teachers, communications and invoicing, with a self-managed dynamic to organize the work and make technical decisions together with the project stakeholders. I carried out security analysis, identifying and remediating vulnerabilities across different modules of the system, including payment-related features. I also collaborated on the development of an internal recognition platform for colleagues.",
    },
  },
  {
    title: {
      es: "Analista Desarrollador",
      en: "Developer Analyst",
    },
    company: "Tecno Acción S.A.",
    date: {
      es: "Diciembre 2024 — Junio 2025 · Presencial · Jornada parcial",
      en: "December 2024 — June 2025 · On-site · Part-time",
    },
    description: {
      es: "Desarrollo y mantenimiento de sistemas internos orientados a operaciones y procesos administrativos. Implementé funcionalidades de gestión de juegos por cliente, con filtros y controles de habilitación, y desarrollé una pantalla de gestión de sorteos que permite crear sorteos y visualizar su estado, incorporando paginación para mejorar el rendimiento y manejo de grandes volúmenes de datos. Trabajo con Java y Spring Boot, integrando y desplegando funcionalidades mediante Docker.",
      en: "Development and maintenance of internal systems focused on operations and administrative processes. I implemented per-client game management features, with filters and enablement controls, and built a raffles management screen that supports creating raffles and viewing their status, incorporating pagination to improve performance and the handling of large volumes of data. I work with Java and Spring Boot, integrating and deploying features through Docker.",
    },
  },
  {
    title: {
      es: "Desarrollador Java",
      en: "Java Developer",
    },
    company: "UTN Buenos Aires",
    date: {
      es: "Agosto 2023 — Diciembre 2023 · Híbrido · Contrato de prácticas",
      en: "August 2023 — December 2023 · Hybrid · Internship contract",
    },
    description: {
      es: "Desarrollo de funcionalidades backend para una aplicación web destinada a una cámara empresaria del sector alimentario: operaciones CRUD con Java, Spring Boot, JPA e Hibernate, diseño e implementación de APIs REST, validación de endpoints con Postman y gestión de información con MySQL, trabajando bajo metodología Scrum y colaborando mediante Git y GitHub.",
      en: "Development of backend features for a web application for a business chamber in the food industry: CRUD operations with Java, Spring Boot, JPA and Hibernate, design and implementation of REST APIs, endpoint validation with Postman and data management with MySQL, working under the Scrum methodology and collaborating through Git and GitHub.",
    },
  },
]
