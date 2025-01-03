import React from "react"

import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Skeleton } from "@/shared/components/molecules/skeleton"
import { cn } from "@/shared/utils/cn"

type ProfileStatsProps = {
	posts: any // TODO: Importar as Propriedades de POSTS e referenciar o tipo
	challenges: any // TODO: Importar as Propriedades de CHALLENGE e referenciar o tipo
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default function ProfileStats({
	posts,
	challenges,
	className
}: ProfileStatsProps) {
	return (
		<section
			className={cn(
				"h-fit space-y-6 rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6 text-white lg:max-w-[302px]",
				className
			)}>
			<h2 className="text-center text-xl font-bold">Contribuições</h2>
			<header>
				<h3 className="text-base font-semibold leading-[18px]">Perguntas:</h3>
				<section className="mt-4 flex items-center justify-between text-sm">
					<p>
						<Icon className="mr-2 inline" size={20} name="Question" />
						Feitas:
					</p>
					<span>{posts ? posts?.length : 0}</span>
				</section>
				<section className="mt-2 flex items-center justify-between text-sm">
					<p>
						<Icon className="mr-2 inline" size={20} name="Lightbulb" />
						Respondidas:
					</p>
					<span>{posts ? posts?.length : 0}</span>
				</section>
			</header>
			<footer>
				<h3 className="text-base font-semibold leading-[18px]">Desafios:</h3>
				<section className="mt-4 flex items-center justify-between text-sm">
					<p>
						<Icon className="inline" size={20} name="Trophy" /> Concluídos:
					</p>
					<span>{challenges ? challenges.length : 0}</span>
				</section>
				<section className="mt-2 flex items-center justify-between text-sm">
					<p>
						<Icon className="inline" size={20} name="PencilCircle" /> Criados:
					</p>
					<span>{challenges ? challenges.length : 0}</span>
				</section>
			</footer>
		</section>
	)
}

export function ProfileStatsSkeleton({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<section
			className={cn(
				"space-y-6 rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6 text-white",
				className
			)}
			{...props}>
			<Skeleton className="m-[0_auto] h-[28px] w-[252px]" />
			<div>
				<Skeleton className="h-[18px] w-[10ch]" />
				<section className="mt-4 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[70px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
				<section className="mt-2 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[113px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
			</div>
			<div>
				<Skeleton className="h-[18px] w-[9ch]" />
				<section className="mt-4 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[98px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
				<section className="mt-2 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[76px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
			</div>
			{/* <header>
				<Skeleton className="w-[12ch]" />
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
			</header>
			<footer>
				<Skeleton className="w-[12ch]" />
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
			</footer> */}
		</section>
	)
}
