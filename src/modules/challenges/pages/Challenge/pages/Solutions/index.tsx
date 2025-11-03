"use client"

import { SolutionCard } from "@/modules/challenges/pages/challenge/pages/Solutions/components/SolutionCard"
import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"

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
		"Você deve seguir as boas práticas de desenvolvimento web, como usar tags semânticas, manter o código organizado e comentado. Você também deve testar a página em diferentes dispositivos e navegadores, e garantir que ela seja acessível e compatível. O desafio é uma ótima oportunidade para praticar suas habilidades de front end e mostrar sua criatividade. Boa sorte! 🍀",
	user: {
		name: "Rogerinho",
		image: "https://github.com/shadcn.png"
	},
	sendDate: "1 month ago"
}

export function Solutions() {
	return (
		<div className="mx-auto my-12 max-w-[1280px] space-y-8">
			<div className="space-y-2">
				<Breadcrumb
					paths={[
						{ title: "Desafios", href: "/challenges" },
						{ title: "Soluções", href: "/challenges/challenge/solutions" },
						{ title: "Solução", href: "" }
					]}
				/>
				<h2 className="text-3xl font-bold">Pagina de vendas E-commerce</h2>
			</div>

			<div className="grid items-center justify-between gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<SolutionCard
						key={index}
						cardData={cardData}
						redirectUrl={`/challenges/challenge/solution/1`}
					/>
				))}
			</div>
		</div>
	)
}
