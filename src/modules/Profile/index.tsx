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
		<div className="container mx-auto my-2 flex max-w-[1280px] flex-wrap p-2 md:p-4 lg:p-4 2xl:p-6">
			<div className="flex flex-1 flex-col flex-wrap gap-2">
				<InfoProfile />
				<AtividadeArea
					setState={(value) => setTabActive(value as TTabProps)}
					state={tabActive}
					stateTabs={tabs}
				/>
			</div>
			<div className="ml-6 hidden flex-col gap-6 lg:flex lg:gap-5">
				<AsideArea />
				<Donation />
			</div>
		</div>
	)
}
