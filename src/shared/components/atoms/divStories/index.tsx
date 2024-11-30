import React, { type ReactNode } from "react"

type DivStoriesProps = {
	children: ReactNode
}

export function DivStories({ children }: DivStoriesProps) {
	return (
		<div className="flex h-[calc(100vh-50px)] w-full items-center justify-center">
			{children}
		</div>
	)
}
