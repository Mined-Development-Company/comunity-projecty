"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalize } from "@/shared/utils/capitalize"
import { cn } from "@/shared/utils/cn"

import { Icon } from "../../atoms/icon/Icon"

export function Breadcrumb() {
	const pathName = usePathname()

	const paths = pathName
		.split("/")
		.reduce<{ title: string; href: string }[]>((ac, va) => {
			// ac => acumulador , va => valorAtual
			const regex = /-/
			if (regex.test(va)) {
				return [...ac, { title: capitalize(va.split("-").join(" ")), href: "/" + va }]
			}
			if (va !== "") {
				return [...ac, { title: capitalize(va), href: "/" + va }]
			}

			return ac
		}, [])

	return (
		<nav>
			<ul className="flex space-x-2">
				{paths.map(({ title, href }, index) => (
					<li
						key={index}
						className={cn(
							"flex items-center gap-2 font-medium text-content-quaternary transition-all duration-300 hover:text-content-secondary",
							index + 1 === paths.length && "text-green-hard hover:text-green-soft"
						)}>
						<Link href={href}>{title}</Link>
						{index + 1 !== paths.length && (
							<Icon className="text-content-quaternary" name="CaretRight" weight="bold" />
						)}
					</li>
				))}
			</ul>
		</nav>
	)
}
