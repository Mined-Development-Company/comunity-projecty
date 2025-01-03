import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../../../shared/schemas/Profile.schema"

export async function deleteProfile(
	id: string | number
): Promise<ProfileProps | undefined> {
	const { data } = await api.delete<ProfileProps>(`/profile/${id}`)
	return data
}
