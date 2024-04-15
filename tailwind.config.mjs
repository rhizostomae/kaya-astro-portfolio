/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'omnes': ['Omnes', 'sans-serif'],
			  },
			colors: {
				customred: '#ff3350', 
			},
		},
	},
	plugins: [],
}
