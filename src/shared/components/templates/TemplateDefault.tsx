"use client"

import type { ReactNode } from "react"

import { cn } from "@/shared/utils/cn"

type Props = {
	children: ReactNode
	className?: string
}

export function TemplateDefault({ children, className }: Props) {
	return (
		<div
			className={cn(
				"container mx-auto min-h-[calc(100vh-177px)] max-w-[1280px] py-6 lg:py-10",
				className
			)}>
			{children}
		</div>
	)
}
