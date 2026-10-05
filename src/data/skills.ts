import type { Localized } from "@/i18n/types"

export interface SkillItem {
  name: string
  icon: string
}

export interface SkillGroup {
  title: Localized
  items: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { es: "Frontend", en: "Frontend" },
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: { es: "Backend", en: "Backend" },
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "springboot" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: { es: "Herramientas", en: "Tools" },
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "Shell", icon: "terminal" },
      { name: "Claude", icon: "claude" },
      { name: "OpenCode", icon: "opencode" },
    ],
  },
]
