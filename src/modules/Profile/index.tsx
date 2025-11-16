'use client'

import { useState } from "react"
import { Donation } from "@/shared/components/organisms/donation"
import { AsideArea } from "./Components/AsideArea"
import { InfoProfile } from "./Components/InfoProfile"
import { AtividadeArea } from "./Components/AtividadeArea"
type TTabProps = 'projetos' | 'desafios' | 'perguntas'

export default function Profile() {
	const [tabActive, setTabActive] = useState<TTabProps>("projetos")
	const tabs = [{ title: "projetos" }, { title: "desafios" }, { title: "perguntas" }]
	return (
		<div className="mx-auto mt-10 flex container">
			<div className="flex-1">
				<InfoProfile />
				<AtividadeArea setState={(value)=>setTabActive(value as TTabProps)} state={tabActive} stateTabs={tabs} />
			</div>
			<div className="ml-6 lg:flex flex-col gap-[10px] hidden ">
				<AsideArea />
				<Donation />				
			</div>
		</div>
	)
}
