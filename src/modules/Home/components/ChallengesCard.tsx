import { FaArrowRight } from "react-icons/fa6"

import { Button } from "@/shared/components/atoms/button"

import { MarqueeDefault } from "./MarqueeDefault"

export function ChallengesCard() {
	return (
		<div className="container relative z-10 mx-auto flex w-[90%] flex-col gap-16 rounded-[38px] border border-content-shape-quaternary bg-[#FAFAFA] bg-opacity-[1%] py-16 backdrop-blur-[1px] 2xl:w-[80%]">
			<div className="space-y-1 px-2 text-center">
				<h3 className="text-3xl font-bold text-content-primary text-opacity-100 md:text-5xl">
					Teste Seus Limites
				</h3>
				<p className="text-content-tertiary">
					Desafios e Projetos Gratuitos da Comunidade
				</p>
			</div>

			<div className="mx-auto w-[90%] 2xl:w-[80%]">
				<MarqueeDefault />
			</div>

			<Button className="mx-auto h-[52px] w-[167px] font-bold">
				Ver desafios <FaArrowRight />
			</Button>
		</div>
	)
}
