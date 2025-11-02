"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { capitalize } from "../../../utils/capitalize"
import { cn } from "../../../utils/cn"
import { Icon } from "../../atoms/icon/Icon"

type Props = {
	paths: { title: string; href: string }[]
}

export function Breadcrumb({ paths: customPaths }: Props) {
	const pathName = usePathname()

	const paths =
		customPaths ??
		pathName.split("/").reduce<{ title: string; href: string }[]>((ac, va) => {
			// ac => acumulador , va => valorAtual

			if (va.includes("-")) {
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
					<React.Fragment key={index}>
						{paths.length !== index + 1 && (
							<li
								key={index}
								className={cn(
									"flex items-center gap-2 font-medium text-content-quaternary transition-all duration-300 hover:text-content-secondary"
								)}>
								<Link href={href}>{title}</Link>
								{index + 1 !== paths.length && (
									<Icon
										className="text-content-quaternary"
										name="CaretRight"
										weight="bold"
									/>
								)}
							</li>
						)}

						{paths.length === index + 1 && (
							<li
								className={cn(
									"flex items-center gap-2 font-medium text-content-quaternary transition-all duration-300 hover:text-content-secondary",
									index + 1 === paths.length && "text-green-hard hover:text-green-soft"
								)}>
								{" "}
								{title}
							</li>
						)}
					</React.Fragment>
				))}
			</ul>
		</nav>
	)
}
