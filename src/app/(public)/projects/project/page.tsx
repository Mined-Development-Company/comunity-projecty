import React, { Suspense } from "react"

import { Project } from "@/modules/Projects/pages/Project"

export default function ProjectPage() {
	return (
		<div>
			<Suspense fallback={<div>Carregando...</div>}>
				<Project />
			</Suspense>
		</div>
	)
}
