import React, { type ReactNode } from "react"

interface LayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<div className="container m-auto flex size-full flex-col px-4 lg:px-[10px] xl:px-[7.5rem]">
			{children}
		</div>
	)
}
