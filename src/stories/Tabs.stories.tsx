import { type Meta, type StoryObj } from "@storybook/react"

import { NavigationTabs } from "@/shared/components/molecules/tabs"

const meta: Meta<typeof NavigationTabs> = {
	title: "Molecules/NavigationTabs",
	component: NavigationTabs,
	parameters: {
		controls: {
			exclude: ["trigger", "children", "customActions"]
		}
	},
	args: {
		defaultValue: "Projetos",
		tabs: [
			{
				title: "Projetos",
				children: (
					<>
						<p className="">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam earum
							pariatur tenetur corrupti nesciunt qui aliquam atque accusantium, quia
							quidem magnam ducimus molestiae voluptatibus. Voluptate eligendi sed qui
							quasi a!
						</p>
					</>
				)
			},
			{
				title: "Desafios",
				children: (
					<>
						<p className="text-base leading-4 text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
							provident officiis doloribus tenetur et rerum cum quos voluptates explicabo
							recusandae, neque possimus asperiores natus vel excepturi quaerat amet eum
							molestiae?
						</p>
						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
							provident officiis doloribus tenetur et rerum cum quos voluptates explicabo
							recusandae, neque possimus asperiores natus vel excepturi quaerat amet eum
							molestiae?
						</p>
					</>
				)
			},
			{
				title: "Perguntas",
				children: (
					<>
						<p className="text-base leading-4 text-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci
							nemo. Dolorum necessitatibus ipsum aspernatur et earum eum voluptas aliquid
							quis! Maxime saepe repudiandae eligendi non blanditiis alias necessitatibus
							dolorum.
						</p>
						<p className="text-base leading-4 text-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci
							nemo. Dolorum necessitatibus ipsum aspernatur et earum eum voluptas aliquid
							quis! Maxime saepe repudiandae eligendi non blanditiis alias necessitatibus
							dolorum.
						</p>
						<p className="text-base leading-4 text-white">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, adipisci
							nemo. Dolorum necessitatibus ipsum aspernatur et earum eum voluptas aliquid
							quis! Maxime saepe repudiandae eligendi non blanditiis alias necessitatibus
							dolorum.
						</p>
					</>
				)
			}
		]
	}
}

export default meta

export const Default: StoryObj<typeof meta> = {
	render: (args) => (
		<section className="rounded-lg border border-content-shape-quaternary bg-content-shape-secondary">
			<NavigationTabs {...args} />
		</section>
	)
}
