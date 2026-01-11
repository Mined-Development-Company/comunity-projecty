import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

import { useMutation } from "@tanstack/react-query"

import { getAuth } from "../api/getAuth"

export default function useModel() {
	const searchParams = useSearchParams()
	const code = searchParams.get("code")
	const provider = searchParams.get("provider")

	const [isConnectingDiscord, setIsConnectingDiscord] = useState(false)
	const [isConnectingGithub, setIsConnectingGithub] = useState(false)

	const connectProvider = (
		action: "login" | "register",
		provider: "discord" | "github"
	) => {
		globalThis.location.href = `/api/auth/${provider}?action=${action}&provider=${provider}`

		provider === "discord" ? setIsConnectingDiscord(true) : setIsConnectingGithub(true)
	}

	const { mutate: authDiscord, isPending: isAuthDiscord } = useMutation({
		mutationFn: getAuth,
		onSuccess: () => {},
		onError: () => {}
	})

	const { mutate: authGithub, isPending: isAuthGithub } = useMutation({
		mutationFn: getAuth,
		onSuccess: () => {},
		onError: () => {}
	})

	useEffect(() => {
		if (code && provider === "discord") {
			authDiscord({ code, action: "login", provider: provider as "discord" })
		}

		if (code && provider === "github") {
			authGithub({ code, action: "login", provider: provider as "github" })
		}
	}, [searchParams])

	const loadDiscord = isConnectingDiscord || isAuthDiscord
	const loadGithub = isConnectingGithub || isAuthGithub

	return { connectProvider, loadDiscord, loadGithub }
}
