import { type Meta, type StoryObj } from "@storybook/react"

import { TextareaDefault } from "@/shared/components/molecules/textareas/TextareaDefault"

const meta: Meta<typeof TextareaDefault> = {
	title: "Molecules/TextareaDefault",
	component: TextareaDefault,
	argTypes: {}
}

export default meta

export const Default: StoryObj<typeof TextareaDefault> = {
	args: {
		rootClassName: "max-w-[400px]",
		label: "Label",
		placeholder: "Animais",
		hint: "Escreva sua dica aqui"
	},
	render: (args) => <TextareaDefault {...args} />
}
