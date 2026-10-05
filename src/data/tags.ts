import React from "@/components/icons/React.astro"
import NextJS from "@/components/icons/NextJS.astro"
import TypeScript from "@/components/icons/TypeScript.astro"
import PostgreSQL from "@/components/icons/PostgreSQL.astro"
import Docker from "@/components/icons/Docker.astro"
import Supabase from "@/components/icons/Supabase.astro"
import Prisma from "@/components/icons/Prisma.astro"
import PWA from "@/components/icons/PWA.astro"

export interface Tag {
  name: string
  class: string
  icon: any
}

export const TAGS: Record<string, Tag> = {
  React: { name: "React", class: "bg-[#20232A] text-white", icon: React },
  TypeScript: { name: "TypeScript", class: "bg-[#2D3748] text-white", icon: TypeScript },
  "Next.js": { name: "Next.js", class: "bg-black text-white", icon: NextJS },
  PostgreSQL: { name: "PostgreSQL", class: "bg-[#2F3B47] text-white", icon: PostgreSQL },
  Docker: { name: "Docker", class: "bg-[#1D2A35] text-white", icon: Docker },
  Supabase: { name: "Supabase", class: "bg-[#1C1C1C] text-white", icon: Supabase },
  Prisma: { name: "Prisma", class: "bg-[#2D3748] text-white", icon: Prisma },
  PWA: { name: "PWA", class: "bg-[#5A0FC8] text-white", icon: PWA },
}
