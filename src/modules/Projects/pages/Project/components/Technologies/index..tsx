import React from "react"

import { Box } from "@/shared/components/atoms/box"

import { Card } from "./components/Card"

type TechnologiesProps = {
	data: { title: string; content: string }[]
}

export function Technologies({ data }: TechnologiesProps) {
	return (
		<Box className="space-y-3">
			<h2 className="font-bold text-content-primary">Tecnologias Utilizadas</h2>
			<div className="grid w-full grid-cols-1 flex-wrap justify-between gap-6 md:grid-cols-2">
				<Card
					className="bg-[#9EC9FF]"
					title={data[0]?.title}
					description={data[0]?.content}
				/>
				<Card
					className="bg-[#FFD49F]"
					title={data[1]?.title}
					description={data[1]?.content}
				/>
			</div>
		</Box>
	)
}
