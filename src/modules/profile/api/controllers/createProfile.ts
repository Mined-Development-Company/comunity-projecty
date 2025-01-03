import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../../../shared/schemas/Profile.schema"

export async function createProfile(
	profileData: ProfileProps
): Promise<ProfileProps | undefined> {
	const { data } = await api.post<ProfileProps>("/profile", profileData)
	return data
}
