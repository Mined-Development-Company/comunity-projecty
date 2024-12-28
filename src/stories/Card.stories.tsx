import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "@/shared/components/atoms/button"
import { Card } from "@/shared/components/molecules/card"

const meta: Meta<typeof Card> = {
	title: "Molecules/Card",
	component: Card,
	parameters: {
		controls: {
			exclude: ["trigger", "children", "customActions", "className"]
		}
	},
	args: {
		title: "Desenvolver um e-Commerce",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam autem commodi, dolore, deserunt reiciendis quod, voluptates accusamus quas voluptatum culpa blanditiis esse! Optio ratione amet consequatur commodi harum cupiditate."
	}
}

export default meta

export const Default: StoryObj<typeof Card> = {
	args: {
		orientation: "vertical",
		children: <Button className="w-full"> CTA </Button>
	},
	render: (args) => <Card {...args} />
}

export const WithImage: StoryObj<typeof Card> = {
	args: {
		orientation: "horizontal",
		image: {
			src: "https://www.placehold.co/283x181",
			alt: "Placehold Image"
		}
	},
	render: (args) => <Card {...args} />
}
