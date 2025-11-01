"use client"

import type { ReactNode } from "react"

type Props = {
	children: ReactNode
}

export function TemplateDefault({ children }: Props) {
	return <div className="container mx-auto max-w-[1280px] py-12">{children}</div>
}
