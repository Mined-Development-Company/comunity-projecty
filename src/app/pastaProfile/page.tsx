"use client"

import { useState } from "react"

import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { Card } from "@/shared/components/molecules/card"
import { NavigationTabs } from "@/shared/components/molecules/tabs"
import { Donation } from "@/shared/components/organisms/donation"

export default function Page() {
	const [tabActive, setTabActive] = useState("Projetos")
	const tabs = [{ title: "Projetos" }, { title: "Desafios" }, { title: "Perguntas" }]

	return (
		<div className="mx-auto mt-10 flex max-w-7xl gap-2">
			<div className="flex-1">
				<div className="">
					<div className="max-w-4xl overflow-hidden rounded-md bg-[#0f1018] ring-1 ring-gray-500/20">
						<img className="h-60 w-full max-w-4xl" src="/profile/banner1.png" alt="" />

						<AvatarDefault
							src="https://github.com/shadcn.png"
							className="absolute mx-10 mt-[-80px] h-40 w-40"
						/>

						<div className="my-5">
							<div className="flex items-center justify-between">
								<p className="mx-10 text-xl font-bold">Nome do Usuario</p>
								<div className="m-10 flex gap-4">
									<Icon name={"LinkedinLogo"} weight="fill" size={20} />
									<Icon name={"InstagramLogo"} weight="fill" size={20} />
								</div>
							</div>
							<p className="mx-10 my-2">
								Desenvolvedor(a) Full Stack com foco em Next.js, TypeScript e Tailwind
								CSS, especializado(a) em criar interfaces acessíveis e responsivas,
								priorizando a experiência do usuário.
							</p>
						</div>
					</div>
					<div className="mt-10 max-w-4xl rounded ring-1 ring-gray-500/20">
						<div className="mx-10 py-10">
							<p className="text-xl font-bold">Atividade</p>
							<div>
								<NavigationTabs
									tabs={tabs}
									value={tabActive}
									defaultValue={tabActive}
									onValueChange={(value) => setTabActive(value)}
								/>
							</div>
							{tabActive === "Projetos" && (
								<div className="flex h-[400px] flex-col gap-3 overflow-y-auto bg-[#0f1018]">
									{Array.from({ length: 3 }).map((_item, index) => (
										<Card
											key={index}
											title="App de Sustentabilidade"
											image={{ src: "/profile/banner.webp", alt: "img1" }}
										/>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="h-fit rounded bg-[#0f1018] p-8 ring-1 ring-gray-500/20 lg:max-w-[302px]">
					<p className="text-center text-xl">Contribuições</p>
					<div className="mt-4">
						<div>
							<p>Perguntas:</p>
							<div className="flex justify-between">
								<div className="flex items-center justify-center gap-2">
									<Icon name="QuestionMark" size={20} className="rounded-full border-2" />
									Feitas
								</div>
								<p>24</p>
							</div>
						</div>
						<div>
							<div className="flex justify-between">
								<div className="flex items-center justify-center gap-2">
									<Icon name="Lightbulb" size={20} />
									Respondida
								</div>
								<p>24</p>
							</div>
						</div>
					</div>
					<div className="mt-4">
						<div>
							<p>Desafios:</p>
							<div className="flex justify-between">
								<div className="flex items-center justify-center gap-2">
									<Icon name="Trophy" size={20} className="" />
									Feitos
								</div>
								<p>24</p>
							</div>
						</div>
						<div>
							<div className="flex justify-between">
								<div className="flex items-center justify-center gap-2">
									<Icon name="PencilCircle" size={20} />
									Criados
								</div>
								<p>24</p>
							</div>
						</div>
					</div>
				</div>

				<Donation className="" />
			</div>
		</div>
	)
}
