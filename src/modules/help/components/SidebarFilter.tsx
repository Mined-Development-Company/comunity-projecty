"use client"

import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { cn } from "@/shared/utils/cn"

type SidebarFilterProps = {
	className?: string
	selectedTags: string[]
	handleSelectTag: (tag: string) => void
	setSelectedTags: (tags: string[]) => void
}

const defaultTags = ["CSS", "JS", "HTML", "C++", "Lua", "Java", "Ruby", "C#"]

export function SidebarFilter({
	className,
	selectedTags,
	handleSelectTag,
	setSelectedTags
}: SidebarFilterProps) {
	return (
		<aside className={className}>
			<div className="space-y-4 rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 lg:p-5">
				<div className="mb-4 flex items-center justify-between">
					<div className="flex items-center gap-2 text-content-primary">
						<span className="font-semibold">Filtro</span>
					</div>
					<Button
						variant="outline"
						className="border-content-shape-quaternary lg:flex-none"
						onClick={() => setSelectedTags([])}>
						<Icon name="Broom" /> Limpar filtro
					</Button>
				</div>

				<div className="space-y-3">
					<p className="text-sm font-medium text-content-secondary">Tag</p>
					<div className="flex flex-wrap gap-2">
						{defaultTags.map((t) => (
							<button
								key={t}
								onClick={() => handleSelectTag(t)}
								className={cn(
									"w-[56px] rounded-md border border-content-shape-quaternary bg-content-shape-secondary px-3 py-1.5 text-xs font-medium text-content-primary hover:bg-content-shape-quaternary",
									selectedTags.includes(t) && "bg-blue-light"
								)}>
								{t}
							</button>
						))}
					</div>
				</div>

				<Button className="w-full">
					<Icon name="Check" /> Aplicar
				</Button>
			</div>
		</aside>
	)
}
