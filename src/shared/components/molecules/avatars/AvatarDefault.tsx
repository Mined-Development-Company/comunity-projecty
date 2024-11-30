import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../../atoms/avatar"

type AvatarDefaultProps = {
	src: string
	name?: string
}

export function AvatarDefault({ src, name }: AvatarDefaultProps) {
	return (
		<Avatar>
			<AvatarImage src={src} />
			{name && <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>}
		</Avatar>
	)
}
