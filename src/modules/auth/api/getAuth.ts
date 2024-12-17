// src/mocks/handlers.js

import { api } from "@/shared/libs/axios"

export type GetAuthDataProps = {
	id: string
	name: string
	email: string
	avatar: string
}

export async function getAuth() {
	const { data } = await api.get<GetAuthDataProps>("/auth")
	return data
}
