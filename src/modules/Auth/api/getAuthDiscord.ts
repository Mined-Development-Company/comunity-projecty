"use client"

import { api } from "@/shared/libs/axios"

type GetAuthDiscordProps = {
	code: string
	action: "login" | "register"
	provider: "discord" | "github"
}

export async function getAuthDiscord({ code, action, provider }: GetAuthDiscordProps) {
	const { data } = await api.post(`/api/auth/callback/discord`, {
		code,
		action,
		provider
	})
	return data
}
