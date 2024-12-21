"use client"

import React, { useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

import type { UserProps } from "@/shared/@types"

type LayoutProps = {
	children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
	const router = useRouter()

	useEffect(() => {
		if (typeof window !== "undefined") {
			const user = localStorage.getItem("userData") as UserProps | null
			if (user) {
				router.push("/")
			}
		}
	}, [router])

	return (
		<div className="container m-auto flex size-full flex-col px-4 lg:px-[10px] xl:px-[7.5rem]">
			{children}
		</div>
	)
}
