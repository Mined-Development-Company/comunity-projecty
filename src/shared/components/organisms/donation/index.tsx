import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Input } from "@/shared/components/atoms/input/input"
import { Label } from "@/shared/components/atoms/label"
import { cn } from "@/shared/utils/cn"

export const Donation = ({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div
			className={cn(
				"h-fit space-y-3 rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6 text-center lg:max-w-[302px]",
				className
			)}
			{...props}>
			<h2 className="text-lg font-bold">Ajude Nossa Comunidade a Crescer!</h2>
			<p className="text-sm text-content-tertiary">
				Sua doação mantém nosso site ativo e nossas atualizações chegando.
			</p>

			<div className="flex flex-col space-y-5 text-center">
				<form className="space-y-5">
					<Label className="flex items-center space-x-[9px] [&>input[type=number]::-webkit-inner-spin-button]:appearance-none">
						<span className="text-base font-bold">R$</span>
						<Input
							min={0}
							placeholder="1,00"
							type="number"
							className="[appearance:_textfield]"
						/>
					</Label>
					<Button className="w-full">Doar</Button>
				</form>
				<section className="space-x-10">
					<Icon className="inline text-blue-soft" size={20} name="Globe" />
					<Icon className="inline text-red-soft" size={20} name="Heart" />
					<Icon className="inline text-green-soft" size={20} name="ArrowClockwise" />
				</section>
				<p className="text-sm leading-4 text-content-tertiary">
					Agradecemos seu apoio! Juntos, manteremos nossa comunidade forte e atualizada.
				</p>
			</div>
		</div>
	)
}
