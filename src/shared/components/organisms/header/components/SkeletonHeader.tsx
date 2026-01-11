"use client"

import { Skeleton } from "@/shared/components/atoms/Skeleton"

export function SkeletonHeader() {
	return (
		<div className="flex items-center gap-3">
			<Skeleton className="h-10 w-24" />
			<Skeleton className="h-10 w-24" />
		</div>
	)
}
