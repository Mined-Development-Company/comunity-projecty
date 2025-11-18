"use client"

import { useState } from "react"

import { Donation } from "@/shared/components/organisms/donation"

import { AsideArea } from "./Components/AsideArea"
import { AtividadeArea } from "./Components/AtividadeArea"
import { InfoProfile } from "./Components/InfoProfile"

type TTabProps = "projetos" | "desafios" | "perguntas"

export default function Profile() {
	const [tabActive, setTabActive] = useState<TTabProps>("projetos")
	const tabs = [{ title: "projetos" }, { title: "desafios" }, { title: "perguntas" }]

	return (
		<div className="container mx-auto my-10 flex">
			<div className="flex-1">
				<InfoProfile />
				<AtividadeArea
					setState={(value) => setTabActive(value as TTabProps)}
					state={tabActive}
					stateTabs={tabs}
				/>
			</div>
			<div className="ml-6 hidden flex-col gap-[10px] lg:flex">
				<AsideArea />
				<Donation />
			</div>
		</div>
	)
}
