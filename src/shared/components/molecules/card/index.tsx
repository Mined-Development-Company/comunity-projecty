import type React from "react"
import Image, { type ImageProps } from "next/image"

import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	Card as CardRoot,
	CardTitle
} from "@/shared/components/atoms/card"

type CardProps = {
	title: string
	description?: string
	image?: ImageProps
	footerChildren?: React.ReactNode
	badges?: React.ReactNode
	orientation?: "vertical" | "horizontal"
} & React.ComponentPropsWithoutRef<typeof CardContent>

export function Card({
	title,
	footerChildren,
	description,
	image,
	badges,
	orientation = "horizontal",
	...props
}: CardProps) {
	return (
		<CardRoot>
			<CardContent orientation={orientation} {...props}>
				<CardHeader className={image ? "relative justify-center" : ""}>
					{image ? (
						<Image
							role="img"
							fill={orientation != "horizontal"}
							width={orientation == "horizontal" ? `${118}` : image.width}
							height={orientation == "horizontal" ? `${110}` : image.height}
							{...image}
						/>
					) : (
						<>
							<CardTitle>{title}</CardTitle>
							{badges && (
								<div className="flex flex-row items-center gap-2.5">{badges}</div>
							)}
							{description && (
								<CardDescription className="line-clamp-3 w-full max-w-[100ch] truncate text-ellipsis">
									{description}
								</CardDescription>
							)}
						</>
					)}
				</CardHeader>
				<CardFooter
					className={
						image
							? "w-full space-y-2.5"
							: "flex flex-row items-center justify-center space-y-2.5"
					}
					role={image ? "contentinfo" : "footer"}>
					{image ? (
						<>
							<CardTitle>{title}</CardTitle>
							{badges && (
								<div className="flex flex-row items-center gap-2.5">{badges}</div>
							)}
							{description && (
								<CardDescription className="line-clamp-3 w-full max-w-[100ch] truncate text-ellipsis">
									{description}
								</CardDescription>
							)}
							{footerChildren}
						</>
					) : (
						<>{footerChildren}</>
					)}
				</CardFooter>
			</CardContent>
		</CardRoot>
	)
}
