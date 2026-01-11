import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/atoms/avatar"
import { cn } from "@/shared/utils/cn"

type AvatarDefaultProps = {
	src: string
	size?: "xs" | "sm" | "md" | "lg"
	name?: string
	className?: string
	classNameFallback?: string
}

export function AvatarDefault({
	src,
	size = "md",
	name,
	className,
	classNameFallback
}: AvatarDefaultProps) {
	return (
		<Avatar className={className} size={size}>
			<AvatarImage src={src} />
			{name && (
				<AvatarFallback
					className={cn("font-semibold text-content-shape-primary", classNameFallback)}>
					{name.slice(0, 2)}
				</AvatarFallback>
			)}
		</Avatar>
	)
}
