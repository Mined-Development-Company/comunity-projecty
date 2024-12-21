"use client"

import React, { type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/shared/utils/cn"

type NavLinkProps = {
	href: string
	children: ReactNode
	className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
	const path = usePathname()

	return (
		<li className={cn("group flex flex-col", className)}>
			<Link className={cn("font-medium")} href={href}>
				{children}
			</Link>
			<span
				className={cn(
					"min-h-[1px] w-0 rounded-full bg-green-hard transition-all duration-300 group-hover:w-full",
					path === href && "w-full"
				)}></span>
		</li>
	)
}
