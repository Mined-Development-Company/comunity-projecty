"use client"

import React from "react"
import Link from "next/link"

import { cn } from "@/shared/utils/cn"

import { Avatar, AvatarFallback, AvatarImage, type AvatarProps } from "../../atoms/avatar"

type Contributor = {
	login: string
	avatar_url: string
	html_url: string
}

type ContributorsAvatarProps = AvatarProps & {
	className?: string
	classNameAvatar?: string
	contributors: Contributor[]
}

export function ContributorsAvatar({
	contributors,
	className,
	classNameAvatar,
	...props
}: ContributorsAvatarProps) {
	return (
		<div className={cn("flex", className)}>
			{contributors.map((contributor) => (
				<Link
					key={contributor.login}
					href={contributor.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="transition-transform duration-300 hover:scale-110">
					<Avatar
						className={cn(
							"outline-3 -ml-2 cursor-pointer outline outline-content-shape-secondary",
							classNameAvatar
						)}
						title={contributor.login}
						{...props}>
						<AvatarImage src={contributor.avatar_url} alt={contributor.login} />
						<AvatarFallback>
							{contributor.login.slice(0, 2).toUpperCase()}
						</AvatarFallback>
					</Avatar>
				</Link>
			))}
		</div>
	)
}

