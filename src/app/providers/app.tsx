"use client"

import React, { useEffect, type ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import NextTopLoader from "nextjs-toploader"

import { queryClient } from "@/shared/libs/react-query"

type ProviderProps = {
	children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
	useEffect(() => {
		const mockingEnable = async () => {
			if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
				await import("@/shared/libs/mocks")
			}
		}
		mockingEnable()
	}, [])
	return (
		<QueryClientProvider client={queryClient}>
			<NextTopLoader color={"var(--color-green-hard)"} />
			{children}
		</QueryClientProvider>
	)
}
