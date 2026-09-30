import type { Localized } from "@/i18n/types"

export interface EducationEntry {
  title: Localized
  org: Localized
}

export const education: EducationEntry[] = [
  {
    title: {
      es: "Ingeniería en Sistemas de Información",
      en: "Information Systems Engineering",
    },
    org: {
      es: "Universidad Tecnológica Nacional · Buenos Aires",
      en: "National Technological University · Buenos Aires",
    },
  },
  {
    title: {
      es: "Técnico en Tecnologías de la Información y la Comunicación",
      en: "Technician in Information and Communication Technologies",
    },
    org: {
      es: "Escuela técnica",
      en: "Technical school",
    },
  },
]

export const languages: { name: Localized; level: Localized }[] = [
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Nivel A2", en: "Level A2" },
  },
]
