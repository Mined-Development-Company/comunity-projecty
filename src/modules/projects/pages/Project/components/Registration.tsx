"use client"

import { Box } from "../../../../../shared/components/atoms/box"
import { Button } from "../../../../../shared/components/atoms/button"
import { Checkbox } from "../../../../../shared/components/atoms/checkbox"
import { Label } from "../../../../../shared/components/atoms/label"
import { RadioGroup, RadioGroupItem } from "../../../../../shared/components/atoms/radioGroup"

const checkeds = [
	"Aprender novas habilidades",
	"Ter um projeto no portfólio",
	"Fazer networking",
	"Contribuir com a comunidade",
	"Outro"
]
const radios = [
	"Redes sociais",
	"Indicação de amigos ou colegas",
	"Site ou blog",
	"Outro"
]

export function Registration() {
	return (
		<Box>
			<form action="" className="space-y-6">
				<div>
					<p className="text-xl font-bold text-content-primary">
						Formulário de Participação
					</p>
					<p className="text-xs text-content-quaternary">
						Por favor, preencha as informações abaixo para participar do projeto.
					</p>
				</div>

				<div className="space-y-3">
					<p className="text-sm font-semibold text-content-primary">
						Por que você quer participar do projeto?
					</p>
					<div className="space-y-3">
						{checkeds.map((value) => (
							<div className="flex items-center space-x-2" key={value}>
								<Checkbox id="terms" />
								<label
									htmlFor="terms"
									className="text-sm font-medium leading-none text-content-quaternary peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
									{value}
								</label>
							</div>
						))}
					</div>
				</div>

				<div className="space-y-3">
					<p className="text-sm font-semibold text-content-primary">
						Como você descobriu este projeto?
					</p>

					<RadioGroup className="space-y-1">
						{radios.map((value, index) => (
							<div className="flex items-center space-x-2" key={index}>
								<RadioGroupItem value={value} id={value} />
								<Label className="text-content-quaternary" htmlFor={value}>
									{value}
								</Label>
							</div>
						))}
					</RadioGroup>
				</div>

				<Button className="w-full font-semibold" type="submit">
					Participar do projeto
				</Button>
			</form>
		</Box>
	)
}
