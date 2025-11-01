"use client"

import { it } from "node:test"
import React from "react"

import { useRouter } from "nextjs-toploader/app"

import { Button } from "@/shared/components/atoms/button"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"
import { MultiSelect } from "@/shared/components/molecules/select/MultiSelect"

import { ChallengeCard } from "./components/ChallengeCard"

const cardData = {
	id: 1,
	thumb: "/challenges/challenges.png",
	alt: "Image 1",
	level: "Intermediário",
	title: "Pagina de vendas E-commerce",
	description:
		"Um possível desafio é transformar em página o design da Loja de Chicletes, uma marca fictícia de gomas de mascar com diferentes sabores e embalagens. O objetivo é criar uma página responsiva e atraente que mostre os produtos da loja.",
	skills: ["html", "css", "js"],
	image: "/challenges/challenges.png",

	requirements:
		"Você deve seguir as boas práticas de desenvolvimento web, como usar tags semânticas, manter o código organizado e comentado. Você também deve testar a página em diferentes dispositivos e navegadores, e garantir que ela seja acessível e compatível. O desafio é uma ótima oportunidade para praticar suas habilidades de front end e mostrar sua criatividade. Boa sorte! 🍀"
}

export function Challenges() {
	const router = useRouter()

	const itemsWithTitle = [
		{
			title: "Linguagem",
			items: [
				{
					label: "HTML",
					value: "0"
				},
				{
					label: "CSS",
					value: "1"
				},
				{
					label: "JAVASCRIPT",
					value: "3"
				}
			]
		},
		{
			title: "Nível",
			items: [
				{ label: "Iniciante", value: "0" },
				{ label: "Intermediário", value: "1" },
				{ label: "Avançado", value: "2" }
			]
		}
	]

	return (
		<div className="mx-auto my-12 max-w-[1280px] space-y-8">
			<div className="flex justify-between p-10 xl:p-0">
				<div className="flex flex-col gap-3 md:flex-row">
					<h2 className="text-3xl capitalize">desafios</h2>
					<div className="flex gap-3 lg:w-[505px]">
						<InputDefault
							className="min-w-[250px]"
							placeholder="Pesquisar"
							iconPosition="left"
							icon="MagnifyingGlass"
						/>
						<MultiSelect
							classTrigger="w-[250px]"
							placeholder="Filtros"
							max={3}
							itemsWithTitle={itemsWithTitle}
						/>
					</div>
				</div>

				<Button
					className="hidden w-[141px] md:flex"
					onClick={() => router.push("/challenges/create-challenge")}>
					Criar seu Desafio
				</Button>
			</div>

			<div className="grid items-center justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<ChallengeCard
						key={index}
						cardData={cardData}
						redirectUrl={`challenges/challenge/${cardData.id}`}
					/>
				))}
			</div>
		</div>
	)
}
