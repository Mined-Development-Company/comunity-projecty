import { Card } from "@/shared/components/molecules/card"
import { NavigationTabs } from "@/shared/components/molecules/tabs"


type Props = {
	state: "projetos" | "desafios" | "perguntas"
	setState: (n: string) => void
	stateTabs: any
}

export const AtividadeArea = ({ state, setState, stateTabs }: Props) => {
	return (
		<div className="mt-4 w-full rounded bg-cover ring-1 ring-gray-500/20">
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
				{state === "projetos" && (
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
				{state === "desafios" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto bg-[#0f1018]">
						{Array.from({ length: 3 }).map((_item, index) => (
							<Card
								key={index}
								title="Projeto"
								image={{ src: "/profile/banner.webp", alt: "img1" }}
								badges={
									<>
										{Array.from({ length: 3 }).map((_, index) => (
											<div
												className="rounded-sm px-[4px] text-[12px] ring ring-slate-800"
												key={index}>
												CSS
											</div>
										))}
									</>
								}
								description="Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per."
							/>
						))}
					</div>
				)}
				{state === "perguntas" && (
					<div className="flex h-[400px] flex-col gap-3 overflow-y-auto bg-[#0f1018]">
						{Array.from({ length: 3 }).map((_, index) => (
							<Card
								title="Como fazer uma pergunta?"
								orientation="vertical"
								key={index}
								className=""
								titleSize="sm"
								footerChildren={<div className="flex gap-4 ml-4 w-full">
									<div className="flex gap-2">
										<p>8</p>
										<p className="text-blue-700">Respostas</p>
									</div>
										<div className="flex gap-2">
										<p>2</p>
										<p className="text-blue-700">Melhores</p>
									</div>
								</div>}
								description="Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing."
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}
