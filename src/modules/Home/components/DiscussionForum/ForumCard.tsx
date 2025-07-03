import type { DetailedHTMLProps, HTMLAttributes } from "react"

import { Button } from "@/shared/components/atoms/button"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { cn } from "@/shared/utils/cn"

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function ForumCard({ className, style, onBlur, onFocus, ...rest }: Props) {
	return (
		<div
			className={cn(
				"flex h-[448px] w-[400px] flex-col justify-between rounded-[8px] border border-content-shape-quaternary bg-content-shape-secondary p-4 drop-shadow-[0px_4px_15.6px_rgba(0,0,0,0.8)]",
				className
			)}
			style={style}
			onBlur={onBlur}
			onFocus={onFocus}
			{...rest}>
			<div className="flex items-center justify-between">
				<div className="flex gap-2">
					<AvatarDefault
						className="max-h-[45px] max-w-[45px] border-2 border-[#02070F]"
						src="https://github.com/shadcn.png"
						name="AN"
					/>
					<div className="-space-y-0.5">
						<p className="font-semibold">Ana Paula</p>
						<p className="text-sm text-content-quaternary">Enviado em 20/05/2023</p>
					</div>
				</div>

				<div className="size-fit rounded-full bg-gradient-to-t from-green-hard to-[#035941] p-[1px] pr-[1.5px] pt-[1.5px]">
					<div className="rounded-full bg-content-shape-secondary px-2 font-medium">
						Python
					</div>
				</div>
			</div>

			<h3 className="font-bold">Como remover duplicatas de uma lista em Python?</h3>

			<p className="text-sm font-medium text-content-quaternary">
				Existem várias maneiras de remover elementos duplicados de uma lista em Python.
				Qual é a forma mais eficiente usando estruturas de dados built-in?
			</p>

			<div className="rounded-md bg-[#B9B9B9] p-3 font-mono text-black">
				<span># Exemplo:</span>
				<br />
				<span>lista_original = [1, 2, 2, 3, 4, 3, 5]</span>
				<br />
				<span>lista_sem_duplicatas = list(set(lista_original))</span>
				<br />
				<span>print(lista_sem_duplicatas)</span>
			</div>

			<Button>Ver respostas</Button>
		</div>
	)
}
