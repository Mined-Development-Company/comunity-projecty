"use client"

import React, { useEffect, useState } from "react"

import { ContributorsAvatar } from "@/shared/components/molecules/avatars/ContributorsAvatar"

type Contributor = {
	login: string
	avatar_url: string
	html_url: string
	contributions: number
}

const CONTRIBUTORS_PER_PAGE = 5
const ROTATION_INTERVAL = 30000 // 30 segundos

export function FooterContributors() {
	const [contributors, setContributors] = useState<Contributor[]>([])
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				const response = await fetch("/api/contributors")
				if (response.ok) {
					const data = await response.json()
					setContributors(data)
				}
			} catch (error) {
				console.error("Error fetching contributors:", error)
			} finally {
				setIsLoading(false)
			}
		}

		fetchContributors()
	}, [])

	useEffect(() => {
		if (contributors.length <= CONTRIBUTORS_PER_PAGE) {
			return
		}

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => {
				const maxIndex = Math.ceil(contributors.length / CONTRIBUTORS_PER_PAGE) - 1
				return prevIndex >= maxIndex ? 0 : prevIndex + 1
			})
		}, ROTATION_INTERVAL)

		return () => clearInterval(interval)
	}, [contributors])

	if (isLoading) {
		return (
			<div className="flex w-full justify-end">
				{Array.from({ length: CONTRIBUTORS_PER_PAGE }).map((_, index) => (
					<div
						key={index}
						className="-ml-2 h-8 w-8 animate-pulse rounded-full bg-content-shape-quaternary outline outline-3 outline-content-shape-secondary"
					/>
				))}
			</div>
		)
	}

	if (contributors.length === 0) {
		return null
	}

	const startIndex = currentIndex * CONTRIBUTORS_PER_PAGE
	const endIndex = startIndex + CONTRIBUTORS_PER_PAGE
	const displayedContributors = contributors.slice(startIndex, endIndex)

	return (
		<ContributorsAvatar
			className="w-full justify-end"
			contributors={displayedContributors}
			size="xs"
		/>
	)
}

