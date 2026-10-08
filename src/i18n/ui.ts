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
    "nav.about": "Sobre mí",

    // Títulos de sección
    "section.experience": "Experiencia laboral",
    "section.projects": "Proyectos",
    "section.skills": "Tecnologías",
    "section.about": "Sobre mí",

    // Hero / social
    "social.contact": "Contáctame",
    "social.copied": "¡Copiado!",
    "social.contact_aria": "Copiar email de contacto",
    "social.cv": "Descargar CV",

    // Proyectos
    "projects.code": "Código",
    "projects.preview": "Demo",

    // Toggles
    "lang.toggle_aria": "Cambiar idioma a inglés",
  },
  en: {
    // Navigation
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Technologies",
    "nav.about": "About",

    // Section titles
    "section.experience": "Work experience",
    "section.projects": "Projects",
    "section.skills": "Technologies",
    "section.about": "About me",

    // Hero / social
    "social.contact": "Contact me",
    "social.copied": "Copied!",
    "social.contact_aria": "Copy contact email",
    "social.cv": "Download CV",

    // Projects
    "projects.code": "Code",
    "projects.preview": "Preview",

    // Toggles
    "lang.toggle_aria": "Switch language to Spanish",
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
