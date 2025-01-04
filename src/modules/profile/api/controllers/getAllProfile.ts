import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../schema/Profile.schema"

export async function getAllProfile(): Promise<ProfileProps[] | undefined> {
	const { data } = await api.get<ProfileProps[]>("/profile")
	return data
}
