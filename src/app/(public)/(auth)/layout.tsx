"use client"

import { useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

import type { UserProps } from "@/shared/@types/UserProps"

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

	return children
}
