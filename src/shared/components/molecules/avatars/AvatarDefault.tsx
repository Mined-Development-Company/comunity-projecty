import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/atoms/avatar"

type AvatarDefaultProps = {
	src: string
	size?: "xs" | "sm" | "md" | "lg"
	name?: string
	className?: string
}

export function AvatarDefault({ src, size = "md", name, className }: AvatarDefaultProps) {
	return (
		<Avatar className={className} size={size}>
			<AvatarImage src={src} />
			{name && <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>}
		</Avatar>
	)
}
