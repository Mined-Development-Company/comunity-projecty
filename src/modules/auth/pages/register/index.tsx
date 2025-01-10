"use client"

import React from "react"

import { AuthCard } from "@/modules/auth/components/AuthCard"
import { useModel } from "@/modules/auth/pages/hooks/useModel"

export default function Register() {
	const { isLoading, setEnable } = useModel()
	return (
		<div className="flex flex-1 items-center justify-center">
			<AuthCard
				action="register"
				isLoading={isLoading}
				onClickDiscord={() => setEnable((prev) => !prev)}
				onClickGithub={() => setEnable((prev) => !prev)}
			/>
		</div>
	)
}
