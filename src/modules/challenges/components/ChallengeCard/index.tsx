"use client"

import React from "react"
import Link from "next/link"

import { AvatarInfo, type AvatarInfoProps } from "@/shared/components/molecules/cardInfo"

import { Skills } from "./Skills"

interface Card {
	id: number
	image: string
	alt?: string
	level: string
	title: string
	description: string
	skills: string[]
	thumb: string
	user?: { name: string; image: string }
	sendDate?: string
}

interface ChallengeCardProps {
	cardData: Card
	redirectUrl: string
}

export function ChallengeCard({ cardData, redirectUrl }: ChallengeCardProps) {
	return (
		<Link href={redirectUrl}>
			<div className="w-full overflow-hidden rounded-lg border border-content-shape-quaternary bg-content-shape-secondary">
				<div className="flex h-[272px] items-center justify-center overflow-hidden">
					<img
						src={cardData.thumb}
						alt={cardData.alt || "image card "}
						className="w-full object-cover"
					/>
				</div>
				<div className="flex flex-col gap-y-4 p-7">
					<div className="flex">
						<div>
							<h3 className="text-xl capitalize">{cardData.level}</h3>
							<div className="h-0.5 w-full bg-gradient-to-r from-green-hard to-content-shape-tertiary"></div>
						</div>
						<div className="w-full"></div>
					</div>
					<h2 className="text-2xl font-semibold capitalize">{cardData.title}</h2>
					<Skills skills={cardData.skills} /> {/* Corrigido aqui */}
					<p className="text-content-tertiary">{cardData.description}</p>
					{cardData.sendDate && cardData.user && (
						<div className="flex w-full items-center justify-between">
							<p className="text-sm font-bold text-content-tertiary">Enviado por:</p>
							<AvatarInfo
								description={cardData.sendDate}
								dp="bottom"
								{...cardData.user}
							/>
						</div>
					)}
				</div>
			</div>
		</Link>
	)
}
