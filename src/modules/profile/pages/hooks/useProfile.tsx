"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

import { useMutation, useQuery } from "@tanstack/react-query"

import {
	createProfile,
	deleteProfile,
	getProfile,
	updateProfile
} from "@/modules/profile/api/controllers"
import type { ProfileProps } from "@/shared/schemas/Profile.schema"
import type { UserProps } from "@/shared/schemas/UserProps"
import { queryClient } from "@/shared/libs/react-query"

export function useProfile() {
	const { id } = useParams<{ id: string }>()
	const [userData, setUserData] = useState<Omit<UserProps, "profileId"> | null>(null)

	useEffect(() => {
		const userData = queryClient.getQueryData<UserProps>(["userData"])
		if (process.env.NODE_ENV === "development")
			setUserData(JSON.parse(localStorage.getItem("userData")!)) // Remover essa linha em produção
		setUserData(userData!)
	}, [id])

	const { data, isLoading } = useQuery<Omit<ProfileProps, "userId">>({
		queryKey: ["/profile", id],
		queryFn: () => {
			new Promise((resolver) => setTimeout(resolver, 30 * 1000))
			return getProfile(id)
		},
		enabled: !!id
	})

	const createMutation = useMutation<any, Error, ProfileProps>({
		mutationKey: ["/profile"],
		mutationFn: (data) => createProfile(data)
	})

	const updateMutation = useMutation<any, Error, Partial<ProfileProps>>({
		mutationKey: ["/profile", id],
		mutationFn: (newData: Partial<ProfileProps>) => updateProfile(id!, newData),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["/profile", id]
			})
		}
	})

	const deleteMutation = useMutation({
		mutationKey: ["/profile"],
		mutationFn: () => deleteProfile(id!),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["/profile"]
			})
		}
	})

	return {
		data: { ...data, ...userData },
		isLoading,
		createProfile: createMutation.mutate,
		updateProfile: updateMutation.mutate,
		deleteProfile: deleteMutation.mutate
	}
}
