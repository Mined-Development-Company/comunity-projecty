"use client"

import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"

export default function SendSolution() {
	return (
		<div className="space-y-[36px]">
			<div className="max-w-[519px] space-y-5">
				<Breadcrumb />
				<h2 className="text-3xl font-bold">Pagina de vendas E-commerce</h2>

				<p className="text-content-tertiary">
					Após o envio da sua solução ela ficará pendente até ser aprovada por um
					administrador, caso não veja ela imediatamente no site não se preocupe.
				</p>
			</div>

			<form className="flex flex-col items-end justify-end space-y-6">
				<div className="flex w-full flex-col justify-between gap-6">
					<InputDefault
						className="max-w-none flex-1"
						label="Link do projeto "
						placeholder="https://www.meusite.com.br"
					/>
					<InputDefault
						className="max-w-none flex-1"
						label="Link do repositório"
						placeholder="https://www.github.com/meu-repositorio"
					/>
				</div>
				<Button className="font-bold">
					Enviar Solução <Icon name="PaperPlaneRight" weight="bold" />
				</Button>
			</form>
		</div>
	)
}
