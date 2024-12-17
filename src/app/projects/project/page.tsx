import React, { Suspense } from "react"

import { Project } from "@/modules/projects/pages/Project"

export default function ProjectPage() {
	return (
		<div>
			<Suspense fallback={<div>Carregando...</div>}>
				<Project />
			</Suspense>
		</div>
	)
}
