import React from "react"

import ChallengeCard from "./components/Cards/ChallengeCard"
import ContentChallengeCards from "./components/Cards/parts/ContentChallengeCards"
import ChallengeHeader from "./components/ChallengeHeader/ChallengeHeader"

export default function Challenges() {
	const items = [
		{
			label: "Filtro1",
			value: "0"
		},
		{
			label: "Filtro2",
			value: "1"
		},
		{
			label: "Filtro3",
			value: "3"
		}
	]

	const cardData = [
		{
			image: "https://placehold.co/300",
			alt: "Image 1",
			level: "iniciante",
			title: "Loja de criação de lojas",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu ",
			skills: ["html", "css", "js"]
		},
		{
			image: "https://placehold.co/300",
			alt: "Image 1",
			level: "iniciante",
			title: "Loja de criação de lojas",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu ",
			skills: ["html", "css", "js"]
		},
		{
			image: "https://placehold.co/300",
			alt: "Image 1",
			level: "iniciante",
			title: "Loja de criação de lojas",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu ",
			skills: ["html", "css", "js"]
		}
	]

	return (
		<div>
			<ChallengeHeader items={items} />
			<ContentChallengeCards>
				<ChallengeCard cards={cardData} />
			</ContentChallengeCards>
		</div>
	)
}
