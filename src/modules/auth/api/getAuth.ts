// src/mocks/handlers.js

import { api } from "@/shared/libs/axios"

export async function getAuth() {
	const { data } = await api.get("/auth")
	return data
}
