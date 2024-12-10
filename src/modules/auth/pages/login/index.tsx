"use client"

import React from "react"

import { useQuery } from "@tanstack/react-query"

import { getApp } from "../../api/getApp"
import { AuthCard } from "../../components/AuthCard"

export default function Login() {
	const { data } = useQuery({ queryKey: ["dados"], queryFn: () => getApp() })
	console.log(data)

	return (
		<div className="flex flex-1 items-center justify-center">
			<AuthCard action="login" />
		</div>
	)
}
