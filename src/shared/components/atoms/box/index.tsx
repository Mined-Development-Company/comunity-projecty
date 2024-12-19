import React, { type HTMLAttributes, type ReactNode } from "react"

import { cn } from "@/shared/utils/cn"

type BoxProps = HTMLAttributes<HTMLDivElement> & {
	children: ReactNode
}

export function Box({ className, children }: BoxProps) {
	return (
		<div
			className={cn(
				"rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6",
				className
			)}>
			{children}
		</div>
	)
}
