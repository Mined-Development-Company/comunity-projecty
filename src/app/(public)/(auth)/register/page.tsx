import { Suspense } from "react"

import Register from "@/modules/Auth/pages/register"
import { TemplateDefault } from "@/shared/components/templates/TemplateDefault"

export default function Page() {
	return (
		<TemplateDefault className="flex items-center justify-center">
			<Suspense>
				<Register />
			</Suspense>
		</TemplateDefault>
	)
}
