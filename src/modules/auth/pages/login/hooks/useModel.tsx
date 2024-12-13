import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import { getAuth } from "@/modules/Auth/api/getAuth"

export function useModel() {
	const [enable, setEnable] = useState(false)

	const { data: dataUser, isLoading } = useQuery({
		queryKey: ["userData"],
		queryFn: async () => {
			await new Promise((resolver) => setTimeout(resolver, 1000))
			const response = await getAuth()
			localStorage.setItem("userData", JSON.stringify(response))
			window.location.reload()
			return response
		},
		enabled: enable
	})

	return { dataUser, isLoading, setEnable }
}
