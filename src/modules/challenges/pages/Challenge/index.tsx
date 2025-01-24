"use client"

// depois pergunto pro gpt
import React from "react"
import { usePathname } from "next/navigation"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"

import { cardData } from "../../components/cardData"

export function Challenge() {
	const pathName = usePathname()

	if (!pathName) {
		return <h1>404 PAGE NOT FOUND</h1>
	}

	const idString = pathName.split("/")[3]

	const id = idString ? parseInt(idString, 10) : null

	const card = cardData.find((item) => item.id === id)

	if (!card) {
		return <h1>404 - Página não encontrada</h1>
	}

	return (
		<div className="max-w-[1200px]">
			{/* HEADER */}
			<div className="mt-7">
				<Breadcrumb />

				{/* esse P é outra coisa, confundi */}
				{/* a live caiu rogério */}
				<div className="flex items-center justify-between">
					<div className="flex-col">
						<h1 className="text-3xl font-bold">{card.title}</h1>
					</div>
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
				<Button variant="outline-green" className="font-bold">
					Enviar Solução
					<Icon name="PaperPlaneRight" />
				</Button>
				<Button variant="outline-green" className="font-bold">
					Ver solução
					<Icon name="Lightbulb" />
				</Button>
				<Button variant="outline-green" className="font-bold">
					Começar desafio
					<Icon name="Handshake" />
				</Button>
			</div>

			{/* IMAGEM */}

			<iframe
				className="h-[477px] w-full"
				src="https://embed.figma.com/design/jrpkGxF4Px3jH4QhwEKwiY/Community-Project?embed-host=share"></iframe>

			{/* DESCRIÇÃO */}

			<div>
				<div className="my-7 max-w-[512px]">
					<h3 className="my-4 font-bold">Requisitos</h3>
					<p className="text-content-quaternary">{card.requirements}</p>
				</div>
				<div></div>
			</div>
		</div>
	)
}
