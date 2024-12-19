"use client"

import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"
import { MultiSelect } from "@/shared/components/molecules/select/MultiSelect"

type ChallengeHeaderProps = {
	items: { label: React.ReactNode; value: string }[]
}

// ok

export default function ChallengeHeader({ items }: ChallengeHeaderProps) {
	return (
		<div className="flex max-w-[1198px] justify-between mx-auto my-16">
			<div className="flex gap-3">
				<h2 className="text-3xl capitalize">desafios</h2>
				<div className="flex gap-3 lg:w-[505px]">
					<InputDefault
						placeholder="Pesquisar"
						iconPosition="left"
						icon="MagnifyingGlass"
					/>
					<MultiSelect placeholder="Filtros" max={3} items={items} />
				</div>
			</div>

			<Button className="w-[141px]">
				Criar seu Desafio
			</Button>
		</div>
	)
}
