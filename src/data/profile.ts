import type { Localized } from "@/i18n/types"

interface Profile {
  name: string
  email: string
  phoneDisplay: string
  phoneHref: string
  github: string
  linkedin: string
  cv: string
  role: Localized
  heroTagline: Localized
  aboutText: Localized
}

export const profile: Profile = {
  name: "Josue Luque",
  email: "jluqueherbas@gmail.com",
  phoneDisplay: "+54 9 11 3301-6427",
  phoneHref: "+5491133016427",
  github: "https://github.com/josueluque",
  linkedin: "https://www.linkedin.com/in/josueluque/",
  cv: "/cv/cv-josueluque-2026.pdf",

  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },

  // Línea corta profesional del Hero.
  heroTagline: {
    es: "Desarrollador Full Stack — creo soluciones de software útiles, eficientes y fáciles de mantener, combinando frontend y backend con foco en calidad, seguridad y trabajo en equipo.",
    en: "Full Stack Developer — I build software solutions that are useful, efficient and easy to maintain, combining frontend and backend with a focus on quality, security and teamwork.",
  },

  // Texto profesional completo de la sección "Sobre mí".
  aboutText: {
    es: "Desarrollador Full Stack con experiencia en diseño, desarrollo y evolución de soluciones de software. Me caracterizo por ser analítico, organizado y atento a los detalles. Valoro el trabajo colaborativo y el aprendizaje continuo. Me motiva la posibilidad de crear soluciones que aporten valor mediante el uso de la tecnología. Busco seguir desarrollándome profesionalmente aportando soluciones y asumiendo nuevos desafíos.",
    en: "Full Stack Developer with experience in the design, development and evolution of software solutions. I am analytical, organized and attentive to detail. I value collaborative work and continuous learning. I'm motivated by the possibility of creating value through technology, and I keep growing professionally by delivering solutions and taking on new challenges.",
  },
}
