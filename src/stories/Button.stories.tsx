import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "@/shared/components/atoms/button"

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
			options: ["default", "sm", "lg", "icon"],
			control: { type: "select" }
		}
	}
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		variant: "default",
		children: "Button"
	},
	render: (args) => <Button {...args} />
}

export const Secondary: Story = { args: { variant: "secondary" } }
export const Outline: Story = { args: { variant: "outline" } }
export const OutlineGreen: Story = { args: { variant: "outline-green" } }
export const Ghost: Story = { args: { variant: "ghost" } }
export const Link: Story = { args: { variant: "link" } }
