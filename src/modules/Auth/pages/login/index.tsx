"use client"

import React from "react"

import { AuthCard } from "../../components/AuthCard"

export default function Login() {
	return (
		<div className="flex h-full w-full flex-1 items-center justify-center">
			<AuthCard action="login" />
		</div>
	)
}
