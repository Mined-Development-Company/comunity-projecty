import React, { type ReactNode } from "react"

interface LayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
	return <section className="container m-[0_auto] py-[39px] px-4 md:px-6 lg:px-[10px] xl:px-[7.5rem]">{children}</section>
}
