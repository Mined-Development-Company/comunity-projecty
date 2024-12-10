"use client"

import React from "react"

import { AuthCard } from "../../components/AuthCard"

export default function Register() {
	return (
		<div className="flex flex-1 items-center justify-center">
			<AuthCard action="register" />
		</div>
	)
}
