import { cn } from "@/shared/utils/cn"

import { AvatarDefault } from "../avatars/AvatarDefault"
import { variantDescription, variantTitle } from "./variants"

export type AvatarInfoProps = {
	dp?: "top" | "center" | "bottom"
	size?: "xs" | "sm" | "md" | "lg"
	image: string
	name: string
	className?: string
	description: string
	rootClassName?: string
	showDescription?: boolean
}

export function AvatarInfo({
	dp = "top",
	size = "sm",
	name,
	image,
	className,
	description,
	rootClassName,
	showDescription = true
}: AvatarInfoProps) {
	return (
		<div className={cn("flex items-center justify-center gap-2", rootClassName)}>
			<AvatarDefault src={image} size={size} name={name} />

			<div
				className={cn(
					"flex flex-col items-start",
					dp === "center" && "flex-row items-center gap-2"
				)}>
				{dp === "top" && showDescription && (
					<span className={variantDescription({ size })}>{description}</span>
				)}
				<span className={cn(variantTitle({ size }), className)}>{name}</span>
				{(dp === "bottom" || dp === "center") && showDescription && (
					<span className={variantDescription({ size })}>{description}</span>
				)}
			</div>
		</div>
	)
}
