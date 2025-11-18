"use client"

import React from "react"

import { useRouter } from "nextjs-toploader/app"

import { AuthCard } from "@/modules/Auth/components/AuthCard"
import { useModel } from "@/modules/Auth/pages/hooks/useModel"
import type { UserProps } from "@/shared/@types/UserProps"

export default function Register() {
	const { isLoading, setEnable } = useModel()

	const router = useRouter()

	const fakeUser: UserProps = {
		id: "1",
		name: "John Doe",
		email: "john.doe@example.com",
		avatar: "https://github.com/shadcn.png",
		profileId: "1"
	}

	function handleClickGithub() {
		setEnable((prev) => !prev)
		localStorage.setItem("userData", JSON.stringify(fakeUser))
		router.push("/")
	}

	return (
		<div className="flex flex-1 items-center justify-center">
			<AuthCard
				action="register"
				isLoading={isLoading}
				onClickDiscord={handleClickGithub}
				onClickGithub={handleClickGithub}
			/>
		</div>
	)
}
