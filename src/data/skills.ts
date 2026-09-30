import type { Localized } from "@/i18n/types"

export interface SkillGroup {
  title: Localized
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: { es: "Backend", en: "Backend" },
    items: ["Java", "Spring Boot", "Node.js", "Express", "JPA", "Hibernate", "PostgreSQL", "MySQL"],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    items: ["Git", "GitHub", "Docker", "Postman", "Shell", "Claude", "OpenCode"],
  },
]

/** Habilidades blandas (traducidas). */
export const softSkills: { title: Localized; items: Localized[] } = {
  title: { es: "Habilidades blandas", en: "Soft skills" },
  items: [
    { es: "Analítico", en: "Analytical" },
    { es: "Organizado", en: "Organized" },
    { es: "Atención al detalle", en: "Attention to detail" },
    { es: "Trabajo en equipo", en: "Teamwork" },
    { es: "Aprendizaje continuo", en: "Continuous learning" },
    { es: "Adaptabilidad", en: "Adaptability" },
  ],
}
