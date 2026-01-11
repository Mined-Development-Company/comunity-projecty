"use client"

import React from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"
import { ImageUpload } from "@/shared/components/molecules/ImageUpload"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"
import { TextareaDefault } from "@/shared/components/molecules/textareas/TextareaDefault"

export default function CreateChallenge() {
	return (
		<div className="space-y-[36px]">
			<div className="max-w-[519px] space-y-5">
				<Breadcrumb
					paths={[
						{ title: "Desafios", href: "/challenges" },
						{ title: "Criar desafio", href: "" }
					]}
				/>
				<h2 className="text-3xl font-bold">Criar desafio</h2>

				<p className="text-content-tertiary">
					Após o envio do seu desafio ele ficará pendente até ser aprovada por um
					administrador, caso não veja ele imediatamente no site não se preocupe.
				</p>
			</div>

			<form className="flex flex-col items-end justify-end space-y-6">
				<div className="flex w-full justify-between gap-6">
					<InputDefault
						className="max-w-none flex-1"
						label="Nome do desafio"
						placeholder="https://www.meusite.com.br"
					/>
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

				<div className="flex h-[364px] w-full justify-between gap-6">
					<TextareaDefault
						label="Descrição"
						placeholder="Ex: Um possível desafio é transformar em página o design da Loja de Chicletes, uma marca fictícia de gomas de mascar com diferentes sabores e embalagens. O objetivo é criar uma página responsiva e atraente que mostre os produtos da loja."
					/>
					<TextareaDefault
						label="Requisitos"
						placeholder="Ex: Você deve seguir as boas práticas de desenvolvimento web, como usar tags semânticas, manter o código organizado e comentado. Você também deve testar a página em diferentes dispositivos e navegadores, e garantir que ela seja acessível e compatível. O desafio é uma ótima oportunidade para praticar suas habilidades de front end e mostrar sua criatividade. Boa sorte! 🍀"
					/>

					<ImageUpload
						label="Imagem do desafio"
						className="max-h-[calc(100%-5px)]"
						classNameInput="border-2 border-dashed"
						placeholder={
							<p className="m-auto text-center text-content-quaternary">
								<strong className="font-normal text-green-hard">Clique aqui</strong> para
								selecionar uma imagem (formatos: PNG, JPEG, SVG)
							</p>
						}
					/>
				</div>
				<Button className="font-bold">
					Enviar Desafio <Icon name="PaperPlaneRight" weight="bold" />
				</Button>
			</form>
		</div>
	)
}
