import { Suspense } from "react"

import Login from "@/modules/Auth/pages/login"
import { TemplateDefault } from "@/shared/components/templates/TemplateDefault"

export default function Page() {
	return (
		<TemplateDefault className="flex items-center justify-center">
			<Suspense>
				<Login />
			</Suspense>
		</TemplateDefault>
	)
}
