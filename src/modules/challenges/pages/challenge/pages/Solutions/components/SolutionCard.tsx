"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { AvatarInfo } from "@/shared/components/molecules/cardInfo"

interface Card {
	id: number
	image: string
	title: string
	thumb: string
	user?: { name: string; image: string }
	sendDate?: string
}

interface ChallengeCardProps {
	cardData: Card
	redirectUrl: string
}

export function SolutionCard({ cardData, redirectUrl }: ChallengeCardProps) {
	return (
		<Link href={redirectUrl}>
			<div className="w-full overflow-hidden rounded-lg border border-content-shape-quaternary bg-content-shape-secondary">
				<Image
					width={300}
					height={272}
					src={cardData.thumb}
					alt={"image card"}
					className="h-[272px] w-full object-cover"
				/>

				<div className="flex flex-col gap-y-6 p-7">
					<p className="text-sm text-content-quaternary">Submitted over 2 years ago</p>
					<h2 className="text-xl font-semibold capitalize">{cardData.title}</h2>

					<div className="flex w-full items-center justify-between">
						<AvatarInfo
							name="Nome do usuário"
							image="https://github.com/shadcn.png"
							description="@Nomedousuario"
							dp="bottom"
							{...cardData.user}
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}
