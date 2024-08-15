/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
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
