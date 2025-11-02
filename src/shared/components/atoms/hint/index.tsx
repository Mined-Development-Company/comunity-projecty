import React from "react"

import { cn } from "../../../utils/cn"

export type HintProps = {
	text?: string
	align?: "start" | "center" | "end"
	className?: string
}

export default function Hint({ text, align = "end", className }: HintProps) {
	return (
		<p
			className={cn("w-full text-sm text-red-soft", className)}
			style={{ textAlign: align }}>
			{text}
		</p>
	)
}
