import { type Meta, type StoryObj } from "@storybook/react"

import { Badge } from "@/shared/components/atoms/badge/badge"

const meta: Meta<typeof Badge> = {
	title: "Atoms/Badge",
	component: Badge
}

export default meta

export const Default: StoryObj<typeof Badge> = {
	argTypes: {},
	args: {},
	render: (args) => <Badge {...args} />
}
