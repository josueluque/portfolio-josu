/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** URL pública del CV. El botón "Descargar CV" del hero solo aparece si está definida. */
  readonly PUBLIC_CV_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
