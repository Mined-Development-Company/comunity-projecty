import { type Meta, type StoryObj } from "@storybook/react"

import { CardInfo } from "@/shared/components/molecules/cardInfo"

const meta: Meta<typeof CardInfo> = {
	title: "Molecules/CardInfo",
	component: CardInfo
}

export default meta

export const Default: StoryObj<typeof CardInfo> = {
	argTypes: {
		size: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] }
	},
	args: {
		image: "https://github.com/shadcn.png",
		title: "Rogerinho",
		description: "usurário",
		dp: "top"
	},
	render: (args) => <CardInfo {...args} />
}
