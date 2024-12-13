import type { Preview } from "@storybook/react"

import "../src/shared/styles/globals.css"

const preview: Preview = {
	parameters: {
		theme: "dark",
		layout: "centered",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
}

export default preview
