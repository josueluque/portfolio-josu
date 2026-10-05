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
      es: "Desarrollo full stack de productos a medida: un sistema de gestión escolar (alumnos, familias, docentes, comunicaciones y facturación), con análisis y corrección de vulnerabilidades en módulos de pagos, y una plataforma interna de reconocimiento entre colaboradores (badges, likes y feedback). Trabajo con React, Node.js, Docker y herramientas de IA, colaborando mediante Git, Pull Requests y code reviews.",
      en: "Full stack development of custom products: a school management system (students, families, teachers, communications and invoicing), including analysis and remediation of vulnerabilities in payment modules, and an internal recognition platform for colleagues (badges, likes and feedback). Working with React, Node.js, Docker and AI tools, collaborating through Git, Pull Requests and code reviews.",
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
      es: "Desarrollo y mantenimiento de sistemas internos orientados a la gestión de operaciones y procesos administrativos. Desarrollé funcionalidades para el sistema de liquidaciones (gestión de juegos por cliente) y la pantalla de gestión de sorteos del sistema LotLine con paginación, utilizando Java y Spring Boot, e integrando y desplegando funcionalidades con Docker.",
      en: "Development and maintenance of internal systems focused on managing operations and administrative processes. I developed features for the settlements system (per-client game management) and the raffles management screen of the LotLine system with pagination, using Java and Spring Boot, and integrating and deploying features with Docker.",
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
