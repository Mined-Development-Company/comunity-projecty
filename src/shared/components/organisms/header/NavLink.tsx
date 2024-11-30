"use client"

import React, { type ReactNode } from "react"
import Link from "next/link"

import { cn } from "@/shared/utils/cn"

type NavLinkProps = {
	href: string
	children: ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
	return (
		<li className="group flex flex-col">
			<Link className="font-medium" href={href}>
				{children}
			</Link>
			<span className="min-h-[1px] w-0 rounded-full bg-green-hard transition-all duration-300 group-hover:w-full"></span>
		</li>
	)
}
