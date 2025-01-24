import React from "react"

import { ChallengeHeader } from "./components/ChallengeHeader"

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

	return (
		<div>
			<ChallengeHeader items={items} />
		</div>
	)
}
