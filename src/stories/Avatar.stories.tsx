import { type Meta, type StoryObj } from "@storybook/react"

import { AvatarDefault } from "../shared/components/molecules/avatars/AvatarDefault"
import { MultiAvatar as MultiAvatarType } from "../shared/components/molecules/avatars/MultiAvatar"

const meta: Meta<typeof AvatarDefault> = {
	title: "Molecules/Avatar",
	component: AvatarDefault
}

export default meta

export const Default: StoryObj<typeof AvatarDefault> = {
	argTypes: {
		size: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] }
	},
	args: {
		src: "https://github.com/shadcn.png",
		name: "Rogerinho"
	},
	render: (args) => <AvatarDefault {...args} />
}

export const MultiAvatar: StoryObj<typeof MultiAvatarType> = {
	argTypes: {
		size: { control: { type: "radio" }, options: ["xs", "sm", "md", "lg"] }
	},
	args: {
		size: "sm",
		listAvatar: [
			{
				src: "https://i.pinimg.com/236x/54/90/5d/54905db6a983fa17c7e0fa80c7db478a.jpg",
				name: "Sam"
			},
			{
				src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHvHZ7u51v98c_fqdBe626-I9JJfMx5S4BKTaOHDAOpxTFnkB4nFjN2on7cv-_rVUysc&usqp=CAU",
				name: "Clover"
			},
			{
				src: "https://pbs.twimg.com/media/E2O8sHlVgAEmE2U.png:small",
				name: "Alex"
			}
		]
	},
	render: (args) => <MultiAvatarType {...args} />
}
