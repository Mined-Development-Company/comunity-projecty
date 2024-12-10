// src/mocks/handlers.js

import { api } from "@/shared/libs/axios"

export async function getApp() {
	const { data } = await api.get("/user")
	return data
}
