/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: {
					50: '#F4FBFA',
					100: '#D9F1EF',
					200: '#B6E3DF',
					300: '#85D0CC', // acento claro (hover dark mode)
					400: '#4FB8B4', // acento principal (más vivo)
					500: '#3C9D9A', // acento modo claro
					600: '#2E7B7E',
					700: '#1F4D5A', // acento oscuro
					900: '#153744',
					950: '#0F1F2B',
				},
			},
		},
	},
	plugins: [],
}
