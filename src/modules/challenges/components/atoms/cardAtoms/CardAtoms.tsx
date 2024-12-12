/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react"

interface CardItem {
	src: string
	alt: string
	title: string
	difficulty: number
	features: string[]
}

interface cardProps {
	cardItems: CardItem[]
}

const getDifficulty = (difficulty: number): string => {
	switch (difficulty) {
		case 1:
			return "Iniciante"
		case 2:
			return "Intermediário"
		case 3:
			return "Avançado"
		default:
			return "NÃODEFINIDO"
	}
}

const CardAtoms = ({ cardItems }: cardProps) => {
	return (
		<>
			{cardItems.map((item, index) => (
				<div
					key={index}
					className="flex max-w-[364px] flex-col overflow-hidden rounded-xl bg-content-shape-tertiary">
					<img
						src={item.src}
						alt={item.alt}
						className="max-h-[272px] w-full overflow-hidden object-cover"
					/>

					<div className="flex flex-col gap-y-7 p-7">
						<div className="flex flex-col">
							<p className="text-xl">{getDifficulty(item.difficulty)}</p>
							<div className="h-1 w-full bg-gradient-to-r from-green-hard to-content-shape-tertiary"></div>
						</div>
						<div>
							<h2 className="text-2xl font-semibold">{item.title}</h2>
							<div className="flex gap-3">
								{item.features.map((f, fIndex) => (
									<div
										key={fIndex}
										className="flex min-w-[55px] items-center justify-center rounded-sm bg-green-hard px-2 py-1">
										<p className="text-xs">{f}</p>
									</div>
								))}
							</div>
						</div>
						<div>
							<p className="text-content-tertiary">
								Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se
								pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing
								et per. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca
								num copo de cachaça, agora eu só uso canudis!
							</p>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default CardAtoms
