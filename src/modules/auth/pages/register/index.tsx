"use client"

import React from "react"

import { AuthCard } from "@/modules/Auth/components/AuthCard"

export default function Register() {
	return (
		<div className="flex h-full w-full flex-1 items-center justify-center">
			<AuthCard action="register" />
		</div>
	)
}
