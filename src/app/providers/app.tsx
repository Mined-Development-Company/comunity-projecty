"use client"

import React, { type ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"
import NextTopLoader from "nextjs-toploader"

import { queryClient } from "@/shared/libs/react-query"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
	require("@/shared/libs/mocks/index")
}

type ProviderProps = {
	children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<NextTopLoader color={"var(--color-green-hard)"} />
			{children}
		</QueryClientProvider>
	)
}
