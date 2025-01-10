"use client"

import React from "react"

import { Skills } from "./Skills"
import Link from "next/link"

interface Card {
	id: number
	image: string
	alt?: string
	level: string
	title: string
	description: string
	skills: string[]
	thumb: string
}

interface ChallengeCardProps {
	cardData: Card
}


export function ChallengeCard({ cardData }: ChallengeCardProps) {
	return (
		<Link href={`challenges/challange/${cardData.id}`}>
			<div className="overflow-hidden rounded-lg border border-content-shape-quaternary bg-content-shape-secondary lg:max-w-[364px]">
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
				</div>
			</div>
		</Link>
	)
}
