import React from "react"

interface SkillsProps {
	skills: string[]
}

export function Skills({ skills }: SkillsProps) {
	return (
		<div className="flex gap-3">
			{skills.map((s, index) => (
				<div
					className="flex min-w-[55px] justify-center rounded-md bg-green-hard py-1 text-sm font-semibold uppercase"
					key={index}>
					<p>{s}</p>
				</div>
			))}
		</div>
	)
}
