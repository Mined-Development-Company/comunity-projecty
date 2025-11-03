import { useState } from "react"

import { cn } from "@/shared/utils/cn"

import { ForumCard } from "./ForumCard"

export function DiscussionForum() {
	const [selected, setSelected] = useState<number | null>(null)
	console.log("selected", selected)

	return (
		<div className="space-y-20 py-12">
			<div className="space-y-1 text-center">
				<h3 className="text-5xl font-bold text-content-primary text-opacity-100">
					Fórum de{" "}
					<strong className="font-bold text-green-hard">Discussão e Soluções</strong>
				</h3>
				<p className="mx-auto w-[900px] text-[21px] text-content-tertiary">
					Participe da nossa comunidade e encontre soluções, faça perguntas e compartilhe
					conhecimento.
				</p>
			</div>

			<div className="flex h-[500px] w-full items-center justify-center gap-6">
				<div className="relative h-[450px] w-[990px]">
					{Array.from({ length: 5 }).map((_, index) => {
						const position = selected === index ? index * 15 - 15 : index * 15
						const positionTop = selected === index ? -2 : index % 2 === 0 ? 0 : -1
						return (
							<ForumCard
								key={index}
								onMouseEnter={() => setSelected(index)}
								onMouseLeave={() => setSelected(null)}
								className={cn(
									"absolute top-0 cursor-pointer transition-all duration-500",
									selected === index && "rotate-3"
								)}
								style={{ left: `${position}%`, top: `${positionTop}%` }}
							/>
						)
					})}
				</div>

				<div className="h-full w-1 rounded-full bg-gradient-to-b from-[#06BF28] to-[#035941]" />
			</div>
		</div>
	)
}
