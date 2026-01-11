"use client"

import { useEffect, useState } from "react"

import cookies from "js-cookie"
import { useRouter } from "nextjs-toploader/app"

import { useDataStore, type TUserData } from "@/shared/store/userDataStore"

const defaultNav = [
	{ name: "Home", path: "/" },
	{ name: "Ajuda", path: "/help" },
	{ name: "Desafio", path: "/challenges" },
	{ name: "Projetos", path: "/projects" }
]

const navGuest = [
	{ name: "Login", path: "/login" },
	{ name: "Register", path: "/register" }
]

export function useHeader() {
	const [open, setOpen] = useState(false)
	const { setUserData, userData } = useDataStore()

	const router = useRouter()

	useEffect(() => {
		const userCookie = cookies.get("user") as string | undefined

		if (userCookie) {
			const user = JSON.parse(userCookie) as TUserData
			setUserData(user)
		}
	}, [])

	function handleLogOut() {
		cookies.remove("user")
		cookies.remove("refreshToken")
		cookies.remove("token")
		setUserData(null)
		router.refresh()
	}

	function handleNav(path: string) {
		router.push(path)
	}

	const navDesktop = defaultNav

	const navMobile = userData ? defaultNav : [...defaultNav, ...navGuest]

	return {
		open,
		router,
		userData,
		navMobile,
		navDesktop,
		setOpen,
		handleNav,
		handleLogOut
	}
}
