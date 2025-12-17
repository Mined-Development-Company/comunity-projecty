import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import { useMutation } from "@tanstack/react-query"

import { getAuthDiscord } from "../api/getAuthDiscord"

export default function useModel() {
	const searchParams = useSearchParams()
	const code = searchParams.get("code")
	const provider = searchParams.get("provider")

	const [isConnectingDiscord, setIsConnectingDiscord] = useState(false)

	const connectDiscord = (action: "login" | "register") => {
		setIsConnectingDiscord(true)
		globalThis.location.href = `/api/auth/discord?action=${action}&provider=discord`
	}

	const { mutate: authDiscord, isPending: isAuthDiscord } = useMutation({
		mutationFn: getAuthDiscord,
		onSuccess: () => {},
		onError: () => {}
	})

	useEffect(() => {
		if (code && provider) {
			authDiscord({ code, action: "login", provider: provider as "discord" | "github" })
		}
	}, [searchParams])

	const loadDiscord = isConnectingDiscord || isAuthDiscord

	return { connectDiscord, loadDiscord }
}
