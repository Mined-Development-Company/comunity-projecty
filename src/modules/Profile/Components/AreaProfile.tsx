import { NavigationTabs } from "@/shared/components/molecules/tabs"
import { Card } from "@/shared/components/molecules/card"

type Props = {
    state: string;
    setState: (n:string) => void,
    stateTabs:any
}

export const AreaProfile = ({state, setState, stateTabs}:Props) => {
	return (
		<div className="mt-4 max-w-4xl rounded ring-1 ring-gray-500/20">
			<div className="mx-6 py-6">
				<p className="text-xl font-bold">Atividade</p>
				<div>
					<NavigationTabs
						tabs={stateTabs}
						value={state}
						defaultValue={state}
						onValueChange={(value) => setState(value)}
					/>
				</div>
				{state === "Projetos" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto bg-[#0f1018]">
						{Array.from({ length: 3 }).map((_item, index) => (
							<Card
								key={index}
								title="App de Sustentabilidade"
								image={{ src: "/profile/banner.webp", alt: "img1" }}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

