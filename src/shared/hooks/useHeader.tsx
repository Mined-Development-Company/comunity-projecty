"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import type { UserProps } from "../@types/UserProps"

const defaultNav = [
	{ name: "Home", path: "/" },
	{ name: "Ajuda", path: "" },
	{ name: "Desafio", path: "/challenges" },
	{ name: "Projetos", path: "/projects" }
]

const navGuest = [
	{ name: "Login", path: "/login" },
	{ name: "Register", path: "/register" }
]

export function useHeader() {
	const [open, setOpen] = useState(false)
	const [userData, setUserData] = useState<UserProps | null>(null)

	const router = useRouter()

	useEffect(() => {
		// Certifique-se de que o código é executado no lado do cliente
		if (typeof window !== "undefined") {
			const storage = localStorage.getItem("userData")
			const parsedData = storage ? (JSON.parse(storage) as UserProps | null) : null
			setUserData(parsedData)
		}
	}, [])

	function handleLogOut() {
		localStorage.removeItem("userData")
		setUserData(null)
		router.refresh()
	}

	function handleNav(path: string) {
		router.push(path)
	}

	const navDesktop = defaultNav

	const navMobile = userData?.id ? defaultNav : [...defaultNav, ...navGuest]

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
