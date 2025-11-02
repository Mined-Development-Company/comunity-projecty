import React from "react"

import { cn } from "../../../utils/cn"

import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from "../../atoms/avatar"

type MultiAvatarProps = AvatarProps & {
	className?: string
	classNameAvatar?: string
	listAvatar: { src: string; name?: string }[]
}

export function MultiAvatar({
	listAvatar,
	className,
	classNameAvatar,
	...props
}: MultiAvatarProps) {
	return (
		<div className={cn("flex", className)}>
			{listAvatar.map(({ src, name }) => (
				<Avatar
					className={cn(
						"outline-3 -ml-2 outline outline-content-shape-secondary",
						classNameAvatar
					)}
					key={name}
					{...props}>
					<AvatarImage src={src} />
					{name && <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>}
				</Avatar>
			))}
		</div>
	)
}
