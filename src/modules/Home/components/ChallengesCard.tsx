import { FaArrowRight } from "react-icons/fa6"

import { Button } from "@/shared/components/atoms/button"

import { MarqueeDefault } from "./MarqueeDefault"

export function ChallengesCard() {
	return (
		<div className="relative z-10 mx-auto flex w-[80%] flex-col gap-16 rounded-[38px] border border-content-shape-quaternary bg-[#FAFAFA] bg-opacity-[1%] py-16 backdrop-blur-[1px]">
			<div className="space-y-1 text-center">
				<h3 className="text-5xl font-bold text-content-primary text-opacity-100">
					Teste Seus Limites
				</h3>
				<p className="text-content-tertiary">
					Desafios e Projetos Gratuitos da Comunidade
				</p>
			</div>

			<div className="mx-auto w-[80%]">
				<MarqueeDefault />
			</div>

			<Button className="mx-auto h-[52px] w-[167px] font-bold">
				Ver desafios <FaArrowRight />
			</Button>
		</div>
	)
}
