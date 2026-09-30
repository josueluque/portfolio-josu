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
      es: "Full Stack Developer · Sistema de Gestión Escolar",
      en: "Full Stack Developer · School Management System",
    },
    company: "ForIT Software Factory",
    date: {
      es: "Junio 2026 — Actualidad · Remoto",
      en: "June 2026 — Present · Remote",
    },
    description: {
      es: "Desarrollo y mantenimiento de un sistema de gestión para instituciones educativas con funcionalidades orientadas a la gestión de alumnos, familias, docentes, actividades, comunicaciones y facturación. Análisis y corrección de vulnerabilidades de seguridad en módulos de pagos y facturación, auditorías técnicas y planes de acción junto al equipo, con Docker para el entorno de desarrollo y herramientas de IA para acelerar el análisis técnico.",
      en: "Development and maintenance of a management system for educational institutions, with features for managing students, families, teachers, activities, communications and invoicing. Analysis and remediation of security vulnerabilities in payments and invoicing modules, technical audits and action plans with the team, using Docker for the development environment and AI tools to speed up technical analysis.",
    },
  },
  {
    title: {
      es: "Full Stack Developer · Plataforma Interna de Reconocimiento",
      en: "Full Stack Developer · Internal Recognition Platform",
    },
    company: "ForIT Software Factory",
    date: {
      es: "Abril 2026 — Junio 2026 · Remoto",
      en: "April 2026 — June 2026 · Remote",
    },
    description: {
      es: "Desarrollo de una plataforma interna orientada al reconocimiento y feedback entre colaboradores: funcionalidades de interacción mediante badges, likes, comentarios y feedback, desarrolladas con React y Node.js. Trabajo colaborativo mediante Git, Pull Requests y code reviews, participando en el análisis, desarrollo y mejora continua de funcionalidades.",
      en: "Development of an internal platform focused on recognition and feedback among colleagues: interaction features through badges, likes, comments and feedback, built with React and Node.js. Collaborative work through Git, Pull Requests and code reviews, taking part in the analysis, development and continuous improvement of features.",
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
