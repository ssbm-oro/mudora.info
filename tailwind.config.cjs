const colors = require('tailwindcss/colors')
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
	"./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}"],

	theme: {
	"colors": {
			"accent": {
				"50": "#FAFBE9",
				"100": "#F4F8D3",
				"200": "#EBF2AB",
				"300": "#E0EB7F",
				"400": "#D5E453",
				"500": "#CCDD2A",
				"600": "#A5B41D",
				"700": "#7D8816",
				"800": "#555C0F",
				"900": "#282C07"
			},
			"primary": {
				"50": "#F9F6F1",
				"100": "#F1EBDF",
				"200": "#E2D7C0",
				"300": "#D6C6A4",
				"400": "#C7B284",
				"500": "#B99F65",
				"600": "#9E8348",
				"700": "#776336",
				"800": "#4D4023",
				"900": "#272012"
			},
			"warning": {
				"50": "#FEECEF",
				"100": "#FDD8DE",
				"200": "#FBB2BE",
				"300": "#F88B9D",
				"400": "#F6657D",
				"500": "#F43F5E",
				"600": "#E80D32",
				"700": "#AE0A25",
				"800": "#740719",
				"900": "#3A030C"
			},
			"surface": {
				"50": "#E5FAE7",
				"100": "#CBF5CE",
				"200": "#94EB99",
				"300": "#60E169",
				"400": "#2CD838",
				"500": "#1FA627",
				"600": "#198520",
				"700": "#126318",
				"800": "#0C4010",
				"900": "#062208"
			},
			'black': colors.black,
			'slate': colors.slate,
			'white': colors.white,
			'blue': colors.blue,
		},
		extend: {
			fontFamily: {
				serif: ["Hylia Serif Beta", "serif"],
				ganon: ["Return of Ganon", "ganon"]
			}
		}
	},

	plugins: [
		require('@tailwindcss/forms'),
	]
};

module.exports = config;
