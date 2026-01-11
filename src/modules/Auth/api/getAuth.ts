"use client"

import { api } from "@/shared/libs/axios"

type GetAuthProps = {
	code: string
	action: "login" | "register"
	provider: "discord" | "github"
}

export async function getAuth({ code, action, provider }: GetAuthProps) {
	const { data } = await api.post(`/api/auth/callback/${provider}`, {
		code,
		action,
		provider
	})
	return data
}
