import { useState } from "react"

import { useQuery } from "@tanstack/react-query"

import { getAuth, type GetAuthDataProps } from "../../api/getAuth"
import { queryClient } from "../../../../shared/libs/react-query"

export function useModel() {
	const [enable, setEnable] = useState(false)

	const { data: dataUser, isLoading } = useQuery<GetAuthDataProps>({
		queryKey: ["userData"],
		queryFn: async () => {
			await new Promise((resolver) => setTimeout(resolver, 1000))
			const response = await getAuth()
			queryClient.setQueryData(["userData"], response)
			if (process.env.NODE_ENV === "development")
				localStorage.setItem("userData", JSON.stringify(response))
			window.location.reload()
			return response
		},
		enabled: enable
	})

	return { dataUser, isLoading, setEnable }
}
