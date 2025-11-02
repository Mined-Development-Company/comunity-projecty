import { api } from "../../../shared/libs/axios"

export type GetAuthDataProps = {
	id: string
	name: string
	email: string
	avatar: string
}

export async function getAuth() {
	const { data } = await api.get<GetAuthDataProps>("/auth/c7b3d8e0") // TODO: Ajustar para que o ID seja definido de forma dinâmica
	return data
}
