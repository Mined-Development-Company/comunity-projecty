import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "../shared/components/atoms/button"

const meta: Meta<typeof Button> = {
	title: "Atoms/Button",
	component: Button,
	args: {
		children: "Button",
		variant: "default",
		size: "sm"
	},
	argTypes: {
		variant: {
			options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
			control: { type: "select" }
		},
		asChild: {
			control: {
				disable: true
			}
		},
		size: {
			options: ["default", "sm", "lg"],
			control: { type: "select" }
		}
	}
}

export default meta

type Story = StoryObj<typeof Button>

function renderStore(args: Story) {
	return <Button {...args} />
}

export const Default: Story = {
	args: {
		variant: "default",
		children: "Button"
	},

	render: renderStore
}

export const Secondary: Story = {
	args: { variant: "secondary" },
	render: renderStore
}

export const OutlineGreen: Story = {
	args: { variant: "outline-green" },
	render: renderStore
}

export const Outline: Story = { args: { variant: "outline" }, render: renderStore }
export const Ghost: Story = { args: { variant: "ghost" }, render: renderStore }
export const Link: Story = { args: { variant: "link" }, render: renderStore }
