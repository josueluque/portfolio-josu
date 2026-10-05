import type { Localized, LocalizedBlocks } from "@/i18n/types"

interface Profile {
  name: string
  email: string
  github: string
  linkedin: string
  photo?: string
  role: Localized
  heroRoles: LocalizedBlocks
  heroTagline: Localized
  aboutText: LocalizedBlocks
}

export const profile: Profile = {
  name: "Josué",
  email: "jluqueherbas@gmail.com",
  github: "https://github.com/josueluque",
  linkedin: "https://www.linkedin.com/in/josueluque/",
  // Foto de perfil (en /public). Dejar vacío/undefined para ocultar la imagen.
  photo: "/josue.jpg",

  role: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },

  // Frases que rotan con efecto "máquina de escribir" en el Hero.
  heroRoles: {
    es: ["Desarrollador", "Ingeniería en Sistemas", "IA aplicada al desarrollo"],
    en: ["Developer", "Systems Engineering", "AI applied to development"],
  },

  // Línea corta profesional del Hero.
  heroTagline: {
    es: "Desarrollador de software. Diseño y desarrollo soluciones que aportan valor, incorporando tecnologías modernas y herramientas de IA con foco en calidad, seguridad, eficiencia y mantenibilidad.",
    en: "Software developer. I design and build solutions that add value, incorporating modern technologies and AI tools with a focus on quality, security, efficiency and maintainability.",
  },

  // Texto profesional completo de la sección "Sobre mí".
  aboutText: {
    es: [
      "Soy una persona analítica, organizada y curiosa, que disfruta aprender y asumir nuevos desafíos. Me gusta entender los problemas, buscar soluciones y prestar atención a los detalles.",
      "Valoro el trabajo en equipo, el intercambio de ideas y aprender de las personas que me rodean. Me motiva crear soluciones que aporten valor y tengan un propósito concreto.",
      "Fuera del ámbito profesional, disfruto de la música, salir en bicicleta y la fotografía. Son actividades que me permiten explorar nuevos intereses, ser creativo y encontrar un equilibrio en el día a día.",
    ],
    en: [
      "I'm an analytical, organized and curious person who enjoys learning and taking on new challenges. I like understanding problems, looking for solutions and paying attention to detail.",
      "I value teamwork, exchanging ideas and learning from the people around me. I'm motivated by creating solutions that add value and have a concrete purpose.",
      "Outside of work, I enjoy music, going out for bike rides and photography. These activities let me explore new interests, be creative and find balance in my day-to-day life.",
    ],
  },
}
