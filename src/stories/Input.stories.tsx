import { type Meta, type StoryObj } from "@storybook/react"

import { Input } from "@/shared/components/atoms/input/input"
import { InputFile } from "@/shared/components/molecules/inputs/inputFile"
import { InputWithButton } from "@/shared/components/molecules/inputs/inputWithButton"
import { InputWithLabel } from "@/shared/components/molecules/inputs/inputWithLabel"

const meta: Meta<typeof Input> = {
	title: "Atoms/Input",
	component: Input
}

export default meta

export const Default: StoryObj<typeof Input> = {
	args: { placeholder: "Placeholder" },
	render: (args) => <Input {...args} />
}

export const withFile: StoryObj<typeof InputFile> = {
	args: { label: "Picture", placeholder: "Escolher Arquivo" },
	render: (args) => <InputFile {...args} />
}

export const withLabel: StoryObj<typeof InputWithLabel> = {
	args: {
		label: "Label"
	},
	render: (args) => <InputWithLabel {...args} />
}

export const withButton: StoryObj<typeof InputWithButton> = {
	args: { placeholder: "Email", buttonLabel: "Subscribe" },
	render: (args) => <InputWithButton {...args} />
}
