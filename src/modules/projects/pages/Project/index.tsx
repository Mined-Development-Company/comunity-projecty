"use client"

import { Button } from "../../../../shared/components/atoms/button"
import { Icon } from "../../../../shared/components/atoms/icon/Icon"
import { Breadcrumb } from "../../../../shared/components/molecules/breadcrumb"
import { About } from "./components/About"
import { Images } from "./components/Images"
import { NextSteps } from "./components/NextSteps"
import { Participants } from "./components/Participants"
import { Registration } from "./components/Registration"
import { Technologies } from "./components/Technologies/index."
import { useModel } from "./hooks/useModel"

const description = `<p className="text-content-quaternary">
				Estamos empolgados em compartilhar os detalhes do nosso mais recente projeto: um
				Sistema de Gerenciamento de Tarefas inovador. Este sistema está sendo projetado
				para revolucionar a forma como equipes e indivíduos organizam e acompanham suas
				tarefas diárias.
			</p>
			<br />
			<p className="text-content-quaternary">Nosso sistema incluirá recursos como:</p>
			<br />
		<ul class="px-2 list-disc list-inside space-y-2">
	<li>Criação e atribuição de tarefas</li>
	<li>
		Acompanhamento de progresso em tempo real
	</li>
	<li>Integração com calendários</li>
	<li>
		Análises e relatórios de produtividade
	</li>
	<li>
		Colaboração em equipe com chat integrado
	</li>
</ul>
`
const technologies = [
	{
		title: "FrontEnd",
		content: `
			<ul class="px-2 list-disc list-inside text-[#04162D]">
				<li>React com Next.js</li>
				<li>
					Tailwind CSS para estilização
				</li>
				<li>TypeScript para tipagem estática</li>
				<li>
					Redux para gerenciamento de estado
				</li>
			</ul>
		`
	},
	{
		title: "Back end",
		content: `
			<ul class="px-2 list-disc list-inside text-[#04162D]">
				<li>React com Next.js</li>
				<li>
					Tailwind CSS para estilização
				</li>
				<li>TypeScript para tipagem estática</li>
				<li>
					Redux para gerenciamento de estado
				</li>
			</ul>
		`
	}
]

const images = ["/projects/p1.jpg", "/projects/p2.jpg"]

export function Project() {
	const { currentProject } = useModel()
	return (
		<div className="space-y-4 py-4 md:space-y-8 md:py-6">
			<Breadcrumb
				paths={[
					{ title: "Projetos", href: "/projects" },
					{
						title: currentProject?.title || "",
						href: `/projects/project/${currentProject?.id}`
					}
				]}
			/>
			<div className="flex flex-col justify-between gap-8 lg:flex-row">
				<div className="w-full space-y-6">
					<About
						title="Desenvolvendo um Sistema de Gerenciamento de Tarefas Inovador"
						description={description}
					/>
					<Technologies data={technologies} />
					<Images data={images} />
					<NextSteps />
				</div>
				<div className="w-full space-y-6 lg:max-w-[350px] xl:max-w-[26rem]">
					{currentProject?.inProgress ? (
						<Registration />
					) : (
						<Button className="w-full" variant="outline-green">
							<Icon name="GlobeSimple" /> Ver webSite
						</Button>
					)}

					<Participants />
				</div>
			</div>
		</div>
	)
}
