import React, { Suspense } from "react"

import Register from "@/modules/Auth/pages/register"

export default function Page() {
	return (
		<Suspense fallback={<div>Carregando...</div>}>
			<Register />
		</Suspense>
	)
}
