/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'floral-white': '#faf0e6', //background
				'leather': '#a06957',
				'chalky': '#efc997',
				'porsch': '#e7a660',
				'rust': '#594642',
				'rusty': '#57261a',
				'delRio': '#a58c8c',
				'shadyLady': '#b4aab4'
			},
			fontFamily: {
				serif: ['Merriweather', 'serif'],
				sans: ['Roboto', 'sans-serif'],
				raleway:['Raleway', 'sans-serif']
			},
		},
	},
	plugins: [],
}
