import React from "react"
import Link from "next/link"

import { ChallengesCard } from "@/modules/Profile/components/ProfileActivities/ChallengeCard"
import { ProjectsCard } from "@/modules/Profile/components/ProfileActivities/ProjectCard"
import { QuestionsCard } from "@/modules/Profile/components/ProfileActivities/QuestionCard"
import type { ProfileProps } from "@/modules/Profile/schema/Profile.schema"
import type { UserProps } from "@/shared/@types/UserProps"
import { NavigationTabs } from "@/shared/components/molecules/tabs"
import { cn } from "@/shared/utils/cn"

type ProfileActivitiesProps = {
	profileData: Pick<UserProps, "name"> & Pick<ProfileProps, "avatar">
	posts: any // TODO: Importar as Propriedades de POSTS e referenciar o tipo
	challenges: any // TODO: Importar as Propriedades de CHALLENGE e referenciar o tipo
	projects: any // TODO: Importar as Propriedades de PROJECT e referenciar o tipo
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export function ProfileActivities({
	profileData,
	posts,
	challenges,
	projects,
	className
}: ProfileActivitiesProps) {
	return (
		<section
			className={cn(
				"space-y-4 rounded-md border border-content-shape-quaternary bg-content-shape-secondary p-6",
				className
			)}>
			<h2 className="text-xl font-bold text-white"> Atividades </h2>
			<NavigationTabs
				defaultValue="Projetos"
				className="h-full w-full"
				tabs={[
					{
						title: "Projetos",
						children: projects ? (
							<ProjectsCard projects={projects} />
						) : (
							<div className="flex h-full max-h-[274px] flex-col items-center justify-center space-y-2.5">
								<h3 className="text-center text-base font-bold leading-4 text-white">
									Nenhum projeto encontrado.
								</h3>
								<p className="text-center">
									Explore nossos projetos! Acesse a{" "}
									<Link href={"/projetos"} className="text-blue-500 underline">
										Página de Projetos
									</Link>{" "}
									e participe de um que combine com você.
								</p>
							</div>
						)
					},
					{
						title: "Desafios",
						children: challenges ? (
							<ChallengesCard challenges={challenges} />
						) : (
							<div className="flex h-full max-h-[274px] flex-col items-center justify-center space-y-2.5">
								<h3 className="text-center text-base font-bold leading-4 text-white">
									Nenhum desafio encontrado.
								</h3>
								<p className="text-center">
									Que tal começar agora? Visite a{" "}
									<Link href={"/challenges"} className="text-blue-500 underline">
										Página de Desafios
									</Link>{" "}
									e escolha o seu primeiro desafio.
								</p>
							</div>
						)
					},
					{
						title: "Perguntas",
						children: posts ? (
							<QuestionsCard
								name={profileData.name}
								avatar={profileData.avatar || "https://gravatar.com/avatar?d=mb"}
								posts={posts}
							/>
						) : (
							<div className="flex h-full max-h-[274px] flex-col items-center justify-center space-y-2.5">
								<h3 className="text-center text-base font-bold leading-4 text-white">
									Nenhuma postagem encontrada.
								</h3>
								<p className="text-center">
									Faça parte da conversa! Visite a{" "}
									<Link href={"/community"} className="text-blue-500 underline">
										Página da Comunidade
									</Link>{" "}
									e envie a sua dúvida ou compartilhe conhecimento.
								</p>
							</div>
						)
					}
				]}
			/>
		</section>
	)
}
