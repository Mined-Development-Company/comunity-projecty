import React from "react"

interface skillsProps {
	skills: string[]
}

export function Skills({ skills }: skillsProps) {
	return (
		<div className="flex gap-3">
			{skills.map((s, index) => (
				<div 
                className=" bg-green-hard flex min-w-[55px] justify-center py-1 rounded-md uppercase font-semibold text-sm" 
                key={index}>
                    <p>{s}</p>
                </div>
			))}
		</div>
	)
}
