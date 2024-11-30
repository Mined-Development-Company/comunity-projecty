import { type Meta, type StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { DivStories } from "@/shared/components/atoms/divStories"
import { MultiSelect } from "@/shared/components/molecules/select/MultiSelect"

const meta: Meta<typeof MultiSelect> = {
	title: "Molecules/MultiSelect",
	component: MultiSelect,
	args: {
		onValueChange: fn()
	},
	argTypes: {
		selectedValues: {
			description:
				"Coloque um array com value dos items selecionados, os values devem ser strings"
		}
	}
}

export default meta

export const Default: StoryObj<typeof MultiSelect> = {
	args: {
		classTrigger: "min-w-[190px]",
		label: "Label",
		placeholder: "Animais",
		max: 2,
		items: [
			{ label: "Elefante", value: "0" },
			{ label: "Girafa", value: "1" },
			{ label: "Leão", value: "2" }
		],
		hint: { className: "", text: "Escreva sua dica aqui", align: "end" }
	},
	render: (args) => (
		<DivStories>
			<MultiSelect {...args} />
		</DivStories>
	)
}
