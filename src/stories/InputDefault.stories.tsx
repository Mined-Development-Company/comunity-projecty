import { type Meta, type StoryObj } from "@storybook/react"

import { DivStories } from "@/shared/components/atoms/divStories"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"

const meta: Meta<typeof InputDefault> = {
	title: "Molecules/InputDefault",
	component: InputDefault,
	argTypes: {
		label: { control: { type: "text" } },
		icon: { control: { type: "text" } },
		hint: {
			control: { type: "object" },
			description: "conteúdo do objeto text, className, align"
		}
	}
}

export default meta

export const Default: StoryObj<typeof InputDefault> = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		iconPosition: "right",
		hint: { className: "", text: "Escreva sua dica aqui", align: "end" }
	},
	render: (args) => (
		<DivStories>
			<InputDefault {...args} />
		</DivStories>
	)
}
