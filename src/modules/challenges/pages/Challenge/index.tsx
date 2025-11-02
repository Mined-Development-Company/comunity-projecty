"use client"

// depois pergunto pro gpt
import React from "react"
import { usePathname } from "next/navigation"

import { useRouter } from "nextjs-toploader/app"

import { Button } from "../../../../shared/components/atoms/button"
import { Icon } from "../../../../shared/components/atoms/icon/Icon"
import { Breadcrumb } from "../../../../shared/components/molecules/breadcrumb"
import { AvatarInfo } from "../../../../shared/components/molecules/cardInfo"
import { cardData } from "../../components/cardData"

export function Challenge() {
	const pathName = usePathname()
	const router = useRouter()

	if (!pathName) {
		return <h1>404 PAGE NOT FOUND</h1>
	}

	const idString = pathName.split("/")[3]

	const id = idString ? Number.parseInt(idString, 10) : null

	const card = cardData.find((item) => item.id === id)

	if (!card) {
		return <h1>404 - Página não encontrada</h1>
	}

	return (
		<div>
			{/* HEADER */}
			<div className="space-y-5">
				<Breadcrumb
					paths={[
						{ title: "Desafios", href: "/challenges" },
						{ title: card.title, href: `/challenges/challenge/${card.id}` }
					]}
				/>
				<div className="flex items-center justify-between">
					<h2 className="text-3xl font-bold">{card.title}</h2>

					<div>
						<h2 className="text-xl font-semibold uppercase">{card.level}</h2>
						<div className="h-0.5 w-full bg-green-hard"></div>
					</div>
				</div>
				<div className="my-5 flex gap-3">
					{card.skills.map((skill, index) => (
						<p
							key={index}
							className="flex min-h-[32px] min-w-[70px] items-center justify-center rounded border-[1px] border-content-shape-quaternary text-sm font-semibold uppercase">
							{skill}
						</p>
					))}
				</div>
				<div className="w-[541px] text-content-quaternary">
					<p>{card.description}</p>
				</div>
			</div>

			{/* BOTÕES */}
			<div className="my-5 flex gap-5">
				<Button
					variant="outline-green"
					className="font-bold"
					onClick={() => router.push("/challenges/challenge/send-solution/1")}>
					Enviar Solução
					<Icon name="PaperPlaneRight" />
				</Button>
				<Button
					variant="outline-green"
					className="font-bold"
					onClick={() => router.push("/challenges/challenge/solutions/1")}>
					Ver soluções
					<Icon name="Lightbulb" />
				</Button>
				<Button variant="outline-green" className="font-bold">
					Começar desafio
					<Icon name="Handshake" />
				</Button>
			</div>

			{/* IMAGEM */}

			<iframe
				className="h-[477px] w-full rounded-md"
				src="https://embed.figma.com/design/jrpkGxF4Px3jH4QhwEKwiY/Community-Project?embed-host=share"></iframe>

			{/* DESCRIÇÃO */}

			<div className="flex w-full justify-between py-7">
				<div className="max-w-[512px] space-y-4">
					<h3 className="font-bold">Requisitos</h3>
					<p className="text-content-quaternary">{card.requirements}</p>
				</div>

				<div className="flex h-[113px] w-[300px] items-center rounded-[8px] border border-content-shape-quaternary bg-content-shape-secondary pl-6">
					<AvatarInfo
						image="https://github.com/shadcn.png"
						name="Rogerinho"
						description="Adicionado por"
						size="md"
						dp="top"
					/>
				</div>
			</div>
		</div>
	)
}
