import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Input } from "@/shared/components/atoms/input/input"
import { Label } from "@/shared/components/atoms/label"
import { Card } from "@/shared/components/molecules/card"
import { cn } from "@/shared/utils/cn"

export const Donation = ({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div className={cn("h-fit lg:max-w-[302px]", className)} {...props}>
			<Card
				className="space-y-5 text-center [&>*>p]:text-content-secondary [&>footer]:flex [&>footer]:flex-col [&>footer]:space-y-5 [&>footer]:text-center [&>header]:p-0"
				orientation="vertical"
				title="Ajude Nossa Comunidade a Crescer!"
				titleSize="md"
				description="Sua doação mantém nosso site ativo e nossas atualizações chegando."
				footerChildren={
					<>
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
						<p className="text-sm leading-4">
							Agradecemos seu apoio! Juntos, manteremos nossa comunidade forte e
							atualizada.
						</p>
					</>
				}
			/>
		</div>
	)
}
