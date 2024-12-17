"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/shared/components/atoms/button"

type ProjectCardProps = {
	id: number
	img: string
	title: string
	description: string
	inProgress: boolean
}

export function ProjectCard({
	id,
	img,
	title,
	description,
	inProgress
}: ProjectCardProps) {
	const router = useRouter()

	return (
		<div className="flex w-full flex-col overflow-hidden rounded-lg border border-content-shape-quaternary bg-content-shape-secondary">
			<Image
				width={300}
				height={180}
				className="max-h-[200px] min-h-[200px] w-full md:max-h-[180px] md:min-h-[180px] 2xl:max-h-[250px] 2xl:min-h-[250px]"
				objectFit="fill"
				src={img}
				alt={"imagem do projeto" + title}
			/>
			<div className="border-t-1.5 flex flex-1 flex-col gap-3 border-content-shape-quaternary p-4">
				<h3 className="text-2xl font-bold text-content-primary">{title}</h3>
				<p className="line-clamp-3 text-sm text-content-quaternary">{description}</p>
				<Button
					className="mt-auto w-full text-base font-semibold"
					variant={inProgress ? "default" : "secondary"}
					onClick={() => router.push(`projects/project?project_id=${id}`)}>
					{inProgress ? "Participar" : "Ver desafio"}
				</Button>
			</div>
		</div>
	)
}
