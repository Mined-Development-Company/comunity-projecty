import { NavigationTabs } from "@/shared/components/molecules/tabs"
import { ProjectCard } from "./ProjectCard"

type Props = {
	state: "projetos" | "desafios" | "perguntas"
	setState: (n: string) => void
	stateTabs: any
}

export const AtividadeArea = ({ state, setState, stateTabs }: Props) => {
	return (
		<div className="mt-4 rounded-lg bg-content-shape-secondary bg-cover ring-1 ring-gray-500/20">
			<div className="space-y-3 overflow-hidden p-3 md:p-6">
				<p className="text-xl font-bold">Atividade</p>

				<NavigationTabs
					className="px-0"
					classNameTrigger="px-2 md:px-6"
					tabs={stateTabs}
					value={state}
					defaultValue={state}
					onValueChange={(value) => setState(value)}
				/>

				{state === "projetos" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto">
						{Array.from({ length: 3 }).map((_item, index) => (
							<ProjectCard
								key={index}
								title="App de Sustentabilidade"
								description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nemo laboriosam sunt illum autem rem natus est corporis sapiente excepturi ipsa, voluptatem cumque, optio quas aliquam consequuntur quaerat! Maxime, esse."
								image={{ src: "/profile/banner.webp", alt: "img1" }}
							/>
						))}
					</div>
				)}

				{state === "desafios" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto">
						{Array.from({ length: 3 }).map((_item, index) => (
							<ProjectCard
								key={index}
								title="App de Sustentabilidade"
								classNameDescription="line-clamp-2 text-ellipsis"
								className="md:max-h-[158px] md:min-h-[158px]"
								badges={["CSS", "HTML", "JavaScript"]}
								description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nemo laboriosam sunt illum autem rem natus est corporis sapiente excepturi ipsa, voluptatem cumque, optio quas aliquam consequuntur quaerat! Maxime, esse."
								image={{ src: "/profile/banner.webp", alt: "img1" }}
							/>
						))}
					</div>
				)}

				{state === "perguntas" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto">
						{Array.from({ length: 3 }).map((_, index) => (
							<div
								key={index}
								className="space-y-3 rounded-lg border border-content-shape-quaternary p-6">
								<div className="space-y-3">
									<p className="text-sm font-bold text-content-primary">
										Como formatar datas em ISO 8601 adicionando horas e minutos em
										JavaScript?
									</p>

									<p className="text-sm text-content-tertiary">
										Estou trabalhando em um projeto que exige que eu manipule datas no
										formato ISO 8601 e adicione horas e minutos específicos a elas.
										Atualmente, estou usando a biblioteca date-fns para trabalhar com
										datas, mas ...
									</p>
								</div>

								<div className="flex gap-2">
									<div className="flex gap-2">
										<p className="text-content-secondary">8</p>
										<p className="text-blue-soft">Respostas</p>
									</div>
									<div className="flex gap-2">
										<p className="text-content-secondary">2</p>
										<p className="text-blue-soft">Melhores</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
