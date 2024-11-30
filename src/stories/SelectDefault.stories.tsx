import { type Meta, type StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { DivStories } from "@/shared/components/atoms/divStories"
import { SelectDefault } from "@/shared/components/molecules/select/SelectDefault"

const meta: Meta<typeof SelectDefault> = {
	title: "Molecules/SelectDefault",
	component: SelectDefault,
	args: {
		onValueChange: fn()
	},
	argTypes: { icon: { type: "string" } }
}

export default meta

export const Default: StoryObj<typeof SelectDefault> = {
	args: {
		classTrigger: "min-w-[210px]",
		label: "label",
		placeholder: "Animais",
		items: [
			{ label: "Elefante", value: "0" },
			{ label: "Girafa", value: "1" },
			{ label: "Leão", value: "2" }
		],
		hint: { className: "", text: "Escreva sua dica aqui", align: "end" }
	},
	render: (args) => (
		<DivStories>
			<SelectDefault {...args} />
		</DivStories>
	)
}
