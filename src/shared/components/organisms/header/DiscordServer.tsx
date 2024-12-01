import React from "react"

import { AvatarDefault } from "../../molecules/avatars/AvatarDefault"

type DiscordServerProps = {
	variant: "desktop" | "mobile"
}

export function DiscordServer({ variant }: DiscordServerProps) {
	if (variant === "desktop")
		return (
			<div className="absolute right-24 hidden w-fit items-center justify-between gap-2 lg:flex">
				<AvatarDefault
					src="https://freepnglogo.com/images/all_img/1708701355discord-icon-png.png"
					size="xs"
				/>
				<div>
					<CircleValues value={214} color={"var(--color-green-hard)"} />
					<CircleValues value={714} color={"var(--color-content-tertiary)"} />
				</div>
			</div>
		)
	else
		return (
			<div className="flex w-full items-center justify-between gap-2">
				<div className="flex items-center gap-2">
					<AvatarDefault
						size="sm"
						className="outline outline-2 outline-green-hard"
						src="https://th.bing.com/th/id/OIG2.5H3sIwRfMqBCnSoAQoQr"
						name="Discord"
					/>
					<div>
						<p className="text-sm font-semibold tracking-wider text-content-primary">
							Minerados
						</p>
						<p className="text-xs text-content-tertiary">Discord</p>
					</div>
				</div>

				<div>
					<CircleValues value={214} color={"var(--color-green-hard)"} />
					<CircleValues value={714} color={"var(--color-content-tertiary)"} />
				</div>
			</div>
		)
}

type CircleValuesProps = {
	color: string
	value: string | number
}

function CircleValues({ color, value }: CircleValuesProps) {
	return (
		<div className="flex items-center gap-1">
			<span className="size-[5px] rounded-full" style={{ background: color }} />
			<span className="text-sm font-semibold" style={{ color: color }}>
				{value}
			</span>
		</div>
	)
}
