import { type Meta, type StoryObj } from "@storybook/react"

import { AvatarInfo } from "../shared/components/molecules/cardInfo"

const meta: Meta<typeof AvatarInfo> = {
	title: "Molecules/AvatarInfo",
	component: AvatarInfo
}

export default meta

export const Default: StoryObj<typeof AvatarInfo> = {
	argTypes: {
		size: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] }
	},
	args: {
		image: "https://github.com/shadcn.png",
		name: "Rogerinho",
		description: "usurário",
		dp: "top"
	},
	render: (args) => <AvatarInfo {...args} />
}
