import Image, { type ImageProps } from "next/image"

import { Badge } from "@/shared/components/atoms/badge/badge"
import { cn } from "@/shared/utils/cn"

type TProps = {
	title: string
	description: string
	image?: ImageProps
	badges?: string[]
	className?: string
	classNameDescription?: string
}

export function ProjectCard({
	title,
	description,
	image,
	badges,
	className,
	classNameDescription
}: TProps) {
	return (
		<div
			className={cn(
				"flex w-fit flex-col justify-center gap-4 rounded-lg border border-content-shape-quaternary p-4 md:max-h-[158px] md:min-h-[146px] md:flex-row md:p-6",
				className
			)}>
			{image && (
				<Image
					className="container max-h-[200px] min-h-[200px] w-full rounded-sm md:min-h-[98px] md:min-w-[118px] md:max-w-[118px]"
					width={118}
					height={98}
					{...image}
				/>
			)}
			<div className="flex w-full flex-col gap-2">
				<h3 className="font-bold text-content-primary">{title}</h3>
				{badges && (
					<div className="flex flex-row flex-wrap items-center gap-2.5">
						{badges.map((badge) => (
							<Badge
								key={badge}
								className="border border-content-shape-quaternary bg-transparent text-[12px] text-secondary">
								{badge}
							</Badge>
						))}
					</div>
				)}
				<p
					className={cn(
						"line-clamp-3 text-ellipsis text-sm text-content-tertiary",
						classNameDescription
					)}>
					{description}
				</p>
			</div>
		</div>
	)
}
