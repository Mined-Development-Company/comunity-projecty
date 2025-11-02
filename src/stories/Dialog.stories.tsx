import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "../shared/components/atoms/button"
import { Dialog } from "../shared/components/molecules/dialog"

const meta: Meta<typeof Dialog> = {
	title: "Molecules/Dialog",
	component: Dialog,
	parameters: {
		controls: {
			exclude: ["trigger", "children", "customActions"]
		}
	},
	argTypes: {},
	args: {
		trigger: <Button>Open Dialog</Button>,
		title: "Lorem ipsum",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		children: (
			<p>
				Numquam quos minus veritatis, aperiam iure facilis exercitationem totam laboriosam
				excepturi harum sunt aliquam ipsum. Perspiciatis earum alias laboriosam ad est
				ullam!
			</p>
		),
		layout: "WithCloseAction"
	}
}

export default meta

export const Default: StoryObj<typeof Dialog> = {
	render: (args) => <Dialog {...args} />
}
