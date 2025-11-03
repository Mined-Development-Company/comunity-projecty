import { api } from "@/shared/libs/axios"

export async function getChallange() {
    const {data} = await api.get("/challenge")
	return data
}