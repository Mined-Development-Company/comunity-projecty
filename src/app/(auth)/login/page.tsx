import React from "react"

import Login from "@/modules/Auth/pages/Login"
import type { UserProps } from "@/shared/@types"

export default function LoginPage() {
	return (
		<div className="flex flex-1 flex-col">
			<Login />
		</div>
	)
}
