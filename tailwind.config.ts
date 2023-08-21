import type { Config } from "tailwindcss"
const { nextui } = require("@nextui-org/react")

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("daisyui"),
		nextui({
			colors: {
				white: "#FFFFFF",
				blue: {
					50: "#e6f1fe",
					100: "#cce3fd",
					200: "#99c7fb",
					300: "#66aaf9",
					400: "#338ef7",
					500: "#006FEE",
					600: "#005bc4",
					700: "#004493",
					800: "#002e62",
					900: "#001731",
				},
				black: {
					400: "#A1A1AA",
				},
			},
			layout: {
				disabledOpacity: "0.3", // opacity-[0.3]
				radius: {
					small: "2px", // rounded-small
					medium: "4px", // rounded-medium
					large: "6px", // rounded-large
				},
				borderWidth: {
					small: "1px", // border-small
					medium: "1px", // border-medium
					large: "2px", // border-large
				},
			},
		}),
	],
}
export default config
