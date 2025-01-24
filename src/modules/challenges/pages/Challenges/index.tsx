"use client"

import React from "react"

import { cardData } from "../../components/cardData"
import { ChallengeCard } from "./components/ChallengeCard"
import { ChallengeHeader } from "./components/ChallengeHeader"

// variaveis

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

export function Challenges() {
	return (
		<div>
			<ChallengeHeader items={items} />
			<div className="m-auto grid max-w-[1200px] flex-col items-center justify-center gap-3 gap-y-7 p-2 sm:grid-cols-2 lg:grid-cols-3">
				{cardData.map((c) => (
					<ChallengeCard key={c.id} cardData={c} />
				))}
			</div>
		</div>
	)
}
