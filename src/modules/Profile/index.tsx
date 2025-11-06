import { useState } from "react"
import { Donation } from "@/shared/components/organisms/donation"
import { AreaProfile } from "./Components/AreaProfile"
import { AsideArea } from "./Components/AsideArea"
import { InfoProfile } from "./Components/InfoProfile"

export default function Profile() {
	const [tabActive, setTabActive] = useState("Projetos")
	const tabs = [{ title: "Projetos" }, { title: "Desafios" }, { title: "Perguntas" }]
	return (
		<div className="mx-auto mt-10 flex max-w-7xl">
			<div className="flex-1">
				<InfoProfile />
				<AreaProfile setState={setTabActive} state={tabActive} stateTabs={tabs} />
			</div>
			<div className="ml-6 lg:flex flex-col gap-[10px] hidden ">
				<AsideArea />
				<Donation />
			</div>
		</div>
	)
}
