import type { Lang } from "./types"

/**
 * Diccionario de textos de interfaz (labels, navegación, títulos de sección…).
 * El contenido (experiencia, proyectos, etc.) vive en src/data/*.
 */
const UI = {
  es: {
    // Navegación
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.skills": "Tecnologías",
    "nav.education": "Educación",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Títulos de sección
    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.skills": "Tecnologías",
    "section.education": "Educación e idiomas",
    "section.about": "Sobre mí",

    // Hero / social
    "hero.available": "Disponible para nuevos proyectos",
    "hero.cta_cv": "Ver mi CV",
    "social.contact": "Contáctame",

    // Proyectos
    "projects.code": "Código",
    "projects.preview": "Demo",

    // Educación
    "education.language": "Idiomas",

    // Toggles
    "lang.toggle_aria": "Cambiar idioma a inglés",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Hecho con Astro y Tailwind CSS.",
  },
  en: {
    // Navigation
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Technologies",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Section titles
    "section.experience": "Work experience",
    "section.projects": "Projects",
    "section.skills": "Technologies",
    "section.education": "Education & languages",
    "section.about": "About me",

    // Hero / social
    "hero.available": "Available for new projects",
    "hero.cta_cv": "View my CV",
    "social.contact": "Contact me",

    // Projects
    "projects.code": "Code",
    "projects.preview": "Preview",

    // Education
    "education.language": "Languages",

    // Toggles
    "lang.toggle_aria": "Switch language to Spanish",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with Astro and Tailwind CSS.",
  },
} as const

export type UIKey = keyof (typeof UI)["es"]

/** Devuelve una función de traducción para el idioma dado. */
export function getT(lang: Lang) {
  return (key: UIKey): string => UI[lang][key]
}

/** URL de la home del idioma indicado (ES = raíz, EN = /en/). */
export const homeFor = (lang: Lang): string => (lang === "es" ? "/" : "/en/")

/** Idioma opuesto al dado. */
export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es")
