import { api } from "@/shared/libs/axios"

import type { ProfileProps } from "../../../../shared/schemas/Profile.schema"

export async function updateProfile(
	id: string | number,
	newData: Partial<ProfileProps>
): Promise<Partial<ProfileProps> | undefined> {
	const { data } = await api.put(`/profile/${id}`, newData)
	return data
}
