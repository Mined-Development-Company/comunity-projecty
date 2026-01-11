import { create } from "zustand"

export type TUserData = {
	name: string | null
	email: string | null
	avatarUrl: string | null
}

type TUserDataStore = {
	userData: TUserData | null
	setUserData: (data: Partial<TUserData> | null) => void
}

export const useDataStore = create<TUserDataStore>((set) => ({
	userData: null,
	setUserData: (data) => set({ userData: data as TUserData | null })
}))
