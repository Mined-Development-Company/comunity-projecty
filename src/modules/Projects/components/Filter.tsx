"use client"

import React from "react"

import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"
import { MultiSelect } from "@/shared/components/molecules/select/MultiSelect"

const items = [
	{ label: "NextJS", value: "1" },
	{ label: "React", value: "2" },
	{ label: "Angular", value: "3" },
	{ label: "Vue", value: "4" },
	{ label: "Nuxt", value: "5" }
]

export function Filter() {
	return (
		<div className="flex flex-wrap items-center justify-between gap-3 lg:gap-2">
			<h1 className="w-full text-4xl font-semibold md:w-fit">Projetos</h1>
			<div className="flex gap-4">
				<InputDefault
					className="flex-1 md:flex-auto"
					placeholder="Pesquisar desafio"
					iconPosition="left"
					icon="MagnifyingGlass"
				/>

				<MultiSelect
					className="flex-1"
					classTrigger="flex-1"
					placeholder="Filter"
					max={2}
					items={items}
					selectedValues={[]}
				/>
			</div>
		</div>
	)
}
