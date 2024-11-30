import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

export default {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				// text
				"content-primary": "#FAFAFA",
				"content-secondary": "#DCDCDC",
				"content-tertiary": "#BDBDBE",
				"content-quaternary": "#ACACAD",
				//shape
				"content-shape-primary": "#0C0D14",
				"content-shape-secondary": "#0F1018",
				"content-shape-tertiary": "#161627",
				"content-shape-quaternary": "#21222E",
				// green color
				"green-hard": "#06BF28",
				"green-mid": "#18C040",
				"green-light": "#2DC651",
				"green-soft": "#40CB61",
				// orange color
				"orange-hard": "#FE981B",
				"orange-mid": "#FD9E29",
				"orange-light": "#FFAE4B",
				"orange-soft": "#FFBD6D",
				// red color
				"red-hard": "#EA1F1F",
				"red-mid": "#EB2E2E",
				"red-light": "#ED3D3D",
				"red-soft": "#EE4C4C",
				// blue color
				"blue-hard": "#0A33FF",
				"blue-mid": "#143AFF",
				"blue-light": "#2849FF",
				"blue-soft": "#3C5AFF",
				// border color
				"input-mid": "#595A67",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			}
		}
	},
	plugins: [animate]
} satisfies Config
