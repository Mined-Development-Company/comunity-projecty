"use client"

import React from "react"

import { formatDistanceToNow } from "date-fns"

import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarInfo } from "@/shared/components/molecules/cardInfo"

import { ResponseCard } from "./ResponseCard"

export type CommentItem = {
	authorName: string
	createdAt: string
	content: string
	replies?: CommentItem[]
}

export type AnswerCardProps = {}

export function AnswerCard({}: AnswerCardProps) {
	return (
		<article className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6">
			<header className="mb-4 flex items-start gap-3">
				<AvatarInfo
					size="sm"
					dp="bottom"
					name={"Shadcn pintorto"}
					image="https://github.com/shadcn.png"
					description={formatDistanceToNow(new Date())}
				/>

				<div className="ml-auto flex items-center gap-2 text-xs">
					<button className="flex rounded-md px-2 py-1">
						<Icon name="Heart" className="size-6 text-content-primary" />
						<span className="ml-1 text-base text-content-quaternary">{13}</span>
					</button>
				</div>
			</header>

			<div className="space-y-3 text-sm leading-6 text-content-secondary">
				<p>
					Você pode usar a biblioteca{" "}
					<code className="rounded bg-content-shape-tertiary px-1">date-fns</code> para
					adicionar horas e minutos à sua data ISO 8601.
				</p>
				<pre className="overflow-auto rounded-lg border border-content-shape-quaternary bg-content-shape-primary p-3 text-xs">
					<code>
						{`import { addHours, addMinutes } from 'date-fns'

							const originalDate = new Date('2024-11-03T00:00:00Z')
							const withHours = addHours(originalDate, 3)
							const finalDate = addMinutes(withHours, 30)

							console.log(finalDate.toISOString())`}
					</code>
				</pre>
			</div>

			<section className="mt-6 space-y-4" aria-label="comentários">
				<p className="text-lg font-semibold text-content-primary">3 Comentários</p>
				{comments.map((comment, index) => (
					<ResponseCard key={index} {...comment} index={index} />
				))}
			</section>

			{/* <form className="mt-4" aria-label="adicionar comentário">
				<label htmlFor="comment-1" className="sr-only">
					Seu comentário
				</label>
				<textarea
					id="comment-1"
					className="w-full rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-3 text-sm text-content-primary placeholder:text-content-quaternary"
					rows={3}
					placeholder="Escreva um comentário."
				/>
				<div className="mt-2 flex justify-end">
					<button
						type="button"
						className="rounded-md border border-input-mid px-3 py-2 text-sm">
						Responder
					</button>
				</div>
			</form> */}
		</article>
	)
}

const comments = [
	{
		id: 1,
		respondingToId: null,
		authorName: "Jhonny deep",
		avatar: "https://randomuser.me/api/portraits/men/31.jpg",
		createdAt: new Date("2026-01-14T14:30:00.000Z").toISOString(),
		content:
			"Quero agradecer pela resposta, foi muito útil e esclarecedora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime eum repellat quaerat dignissimos, nisi qui harum, soluta quasi illum saepe quas facere voluptate debitis quisquam ad vel fugiat nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime eum repellat quaerat dignissimos, nisi qui harum, soluta quasi illum saepe quas facere voluptate debitis quisquam ad vel fugiat nam",
		likes: 12,
		disLikes: 0,
		liked: false,
		replies: [
			{
				id: 2,
				respondingToId: 1,
				authorName: "Marcelo de oliveira",
				avatar: "https://randomuser.me/api/portraits/men/32.jpg",
				createdAt: new Date("2026-01-14T14:30:00.000Z").toISOString(),
				content:
					"Quero agradecer pela resposta, foi muito útil e esclarecedora. Quod maxime eum repellat quaerat dignissimos, nisi qui harum, soluta quasi illum saepe quas facere voluptate debitis quisquam ad vel fugiat nam.",
				likes: 6,
				disLikes: 0,
				liked: true,
				replies: [
					{
						id: 3,
						respondingToId: 2,
						authorName: "Sergio da silva",
						avatar: "https://randomuser.me/api/portraits/men/33.jpg",
						createdAt: new Date("2026-01-14T14:30:00.000Z").toISOString(),
						content: "Quero agradecer pela resposta, foi muito útil e esclarecedora.",
						likes: 40,
						disLikes: 0,
						replies: [
							{
								id: 4,
								respondingToId: 2,
								authorName: "Maria da silva",
								avatar: "https://randomuser.me/api/portraits/women/34.jpg",
								createdAt: new Date("2026-01-14T14:30:00.000Z").toISOString(),
								content: "Quero agradecer pela resposta, foi muito útil e esclarecedora.",
								likes: 6,
								disLikes: 0,
								liked: false
							}
						],
						liked: null
					},
					{
						id: 5,
						respondingToId: 2,
						authorName: "Maria da silva",
						avatar: "https://randomuser.me/api/portraits/women/34.jpg",
						createdAt: new Date("2026-01-14T14:30:00.000Z").toISOString(),
						content: "Quero agradecer pela resposta, foi muito útil e esclarecedora.",
						likes: 6,
						disLikes: 0,
						liked: false
					}
				]
			}
		]
	}
	// {
	// 	authorName: "Serjão da silva",
	// 	avatar: "https://randomuser.me/api/portraits/men/35.jpg",
	// 	createdAt: new Date("2026-01-10T14:30:00.000Z").toISOString(),
	// 	content: "Quero agradecer pela resposta, foi muito útil e esclarecedora."
	// }
]
