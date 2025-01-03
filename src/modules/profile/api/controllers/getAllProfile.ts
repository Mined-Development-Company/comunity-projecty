import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../../../shared/schemas/Profile.schema"

export async function getAllProfile(): Promise<ProfileProps[] | undefined> {
	const { data } = await api.get<ProfileProps[]>("/profile")
	return data
}
