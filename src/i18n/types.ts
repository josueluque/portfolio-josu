export type Lang = "es" | "en"

/** Un texto disponible en ambos idiomas. */
export type Localized = Record<Lang, string>

/** Un texto multi-párrafo disponible en ambos idiomas. */
export type LocalizedBlocks = Record<Lang, string[]>

/** Devuelve el valor del idioma activo de un objeto Localized. */
export const pick = (value: Localized, lang: Lang): string => value[lang]
