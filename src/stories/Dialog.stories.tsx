import React from "react"

import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "@/shared/components/atoms/button"
import { DialogDefault } from "@/shared/components/molecules/DialogDefault"

const meta: Meta<typeof DialogDefault> = {
	title: "Molecules/Dialog",
	component: DialogDefault,
	parameters: {
		controls: {
			exclude: ["trigger", "content", "customActions"]
		}
	},
	argTypes: {},
	args: {
		trigger: <Button>Open Dialog</Button>,
		content: (
			<p>
				Numquam quos minus veritatis, aperiam iure facilis exercitationem totam laboriosam
				excepturi harum sunt aliquam ipsum. Perspiciatis earum alias laboriosam ad est
				ullam!
			</p>
		)
	} as any
}

export default meta

export const Default: StoryObj<typeof DialogDefault> = {
	render: (args) => <DialogDefault {...args} />
}
