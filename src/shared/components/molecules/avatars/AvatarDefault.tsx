import React from "react"

import { cn } from "../../../utils/cn"
import { Avatar, AvatarFallback, AvatarImage } from "../../atoms/avatar"

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
