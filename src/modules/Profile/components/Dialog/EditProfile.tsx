import React from "react"

import { Button } from "@/shared/components/atoms/button"
import {
	DialogClose,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/shared/components/atoms/dialog"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Input } from "@/shared/components/atoms/input/input"
import { Label } from "@/shared/components/atoms/label"
import { Textarea } from "@/shared/components/atoms/textArea"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"

import { SocialItem } from "./SocialItem"

const Logo = [
	{ icon: "FacebookLogo", name: "Facebook" },
	{ icon: "LinkedinLogo", name: "LinkedIn" },
	{ icon: "InstagramLogo", name: "Instagran" },
	{ icon: "GithubLogo", name: "GitHub" }
] as const

export const EditProfile = () => {
	return (
		<>
			<DialogHeader>
				<DialogTitle className="flex flex-col items-center gap-4">
					<AvatarDefault
						src="https://github.com/shadcn.png"
						className="mx-10 h-[96px] w-[96px]"
					/>
					<Button variant={"secondary"}>
						<Icon name={"DownloadSimple"} /> Alterar Avatar
					</Button>
				</DialogTitle>
			</DialogHeader>
			<div className="grid gap-4">
				<div className="grid gap-3">
					<Label htmlFor="username-1">Nome</Label>
					<Input id="username-1" name="username" placeholder="Nome do desafio" />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="username-2">Descrição</Label>
					<Textarea
						className="min-h-32 resize-none text-wrap"
						id="username-2"
						name="username"
						placeholder="Nome do desafio"
					/>
				</div>
				<p>Redes Sociais</p>
				<div className="grid grid-cols-2">
					{Logo.map((item, index) => (
						<SocialItem name={item.name} logo={item.icon} key={index} size={32} />
					))}
				</div>
			</div>
			<DialogFooter>
				<DialogClose asChild>
					<Button variant="outline">Cancel</Button>
				</DialogClose>
				<Button type="submit">Salvar</Button>
			</DialogFooter>
		</>
	)
}
