"use client"

import React from "react"

import { ProjectCard } from "../../../../shared/components/molecules/ProjectCard"
import { Filter } from "./components/Filter"

export const projects = [
	{
		id: 0,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia dkahshd ajshdjkgas a dasdsd aa kdkasdasdsasdas ",
		img: "/projects/p1.jpg",
		inProgress: true
	},
	{
		id: 1,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia dkahshd ajshdjkgas a dasdsd aa kdkasdasdsasdas",
		img: "/projects/p2.jpg",
		inProgress: false
	},
	{
		id: 2,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia a...",
		img: "/projects/p3.jpg",
		inProgress: false
	},
	{
		id: 3,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia dkahshd ajshdjkgas a dasdsd aa kdkasdasdsasdas",
		img: "/projects/p4.jpg",
		inProgress: false
	},
	{
		id: 4,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia a...",
		img: "/projects/p4.jpg",
		inProgress: false
	},
	{
		id: 5,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia a...",
		img: "/projects/p3.jpg",
		inProgress: false
	},
	{
		id: 6,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia a...",
		img: "/projects/p2.jpg",
		inProgress: false
	},
	{
		id: 7,
		title: "App de Sustentabilidade",
		description:
			"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia a...",
		img: "/projects/p1.jpg",
		inProgress: false
	}
]

export function Projects() {
	return (
		<div className="space-y-6 py-[49px] text-white">
			<Filter />

			<div className="grid grid-flow-row grid-cols-1 justify-between gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	)
}
