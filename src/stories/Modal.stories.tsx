import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "../shared/components/atoms/button"
import { Input } from "../shared/components/atoms/input/input"
import { Label } from "../shared/components/atoms/label"
import { Textarea } from "../shared/components/atoms/textArea"
import { Modal } from "../shared/components/molecules/modal"

const meta: Meta<typeof Modal> = {
	title: "Molecules/Modal",
	component: Modal,
	parameters: {
		controls: {
			exclude: ["trigger", "children", "customActions"]
		}
	},
	args: {
		trigger: <Button>Open Modal</Button>,
		title: "Molecules/Modal",
		description: "Modal with Form",
		layout: "WithCustomActions",
		customActions: (
			<>
				<Button variant={"secondary"} className="w-full md:w-fit">
					Salvar
				</Button>
				<Button variant={"default"} className="w-full md:w-fit">
					Publicar
				</Button>
			</>
		)
	}
}

export default meta

export const Default: StoryObj<typeof meta> = {
	args: {
		children: (
			<form className="space-y-4">
				<div className="space-y-1.5">
					<Label htmlFor="articleTitleInput">Title</Label>
					<Input
						id="articleTitleInput"
						type="text"
						placeholder="Insert the article title"
					/>
				</div>
				<div className="space-y-1.5">
					<Label htmlFor="articleDescInput">Description</Label>
					<Textarea
						id="articleDescInput"
						className="h-40"
						placeholder="Insert the body of article"
					/>
				</div>
			</form>
		)
	},
	render: (args) => <Modal {...args} />
}
