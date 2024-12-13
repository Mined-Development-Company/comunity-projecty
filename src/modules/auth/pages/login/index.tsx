"use client"

import React from "react"

import { AuthCard } from "../../components/AuthCard"
import { useModel } from "./hooks/useModel"

export default function Login() {
	const { setEnable, isLoading } = useModel()
	return (
		<div className="flex flex-1 items-center justify-center">
			<AuthCard
				action="login"
				isLoading={isLoading}
				onClickDiscord={() => setEnable((prev) => !prev)}
				onClickGithub={() => setEnable((prev) => !prev)}
			/>
		</div>
	)
}
