"use client"

import { useSearchParams } from "next/navigation"

import { projects } from "../../.."

export function useModel() {
	const searchParams = useSearchParams()
	const projectId = searchParams.get("project_id")

	const currentProject = projects.find(({ id }) => id === Number(projectId))

	return { currentProject }
}
