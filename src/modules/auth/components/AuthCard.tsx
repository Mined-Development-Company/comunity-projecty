import React, { type MouseEventHandler } from "react"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"

interface AuthCardProps {
	action: "login" | "register"
	onClickDiscord?: MouseEventHandler<HTMLButtonElement>
	onClickGithub?: MouseEventHandler<HTMLButtonElement>
}

export function AuthCard({ action, onClickGithub, onClickDiscord }: AuthCardProps) {
	return (
		<section className="flex w-[400px] flex-col items-center justify-center gap-5 rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6">
			<div className="space-y-1 text-center text-content-primary">
				<h1 className="text-2xl font-bold text-content-primary">
					{action === "login" ? "Login" : "Registrar-se"}
				</h1>
				<p className="text-sm text-content-tertiary">
					{action === "login"
						? "Escolha um método para fazer login"
						: "Escolha um método para fazer o registro"}
				</p>
			</div>
			<div className="flex w-full flex-col gap-5">
				<Button
					className="w-full text-sm font-medium text-content-primary"
					variant="secondary"
					size="lg"
					onClick={onClickGithub}>
					<Icon
						className="min-h-[20px] min-w-[20px]"
						name="GithubLogo"
						weight="regular"
					/>
					Github
				</Button>
				<Button
					className="w-full text-sm font-medium text-content-primary"
					variant="secondary"
					size="lg"
					onClick={onClickDiscord}>
					<Icon
						className="min-h-[20px] min-w-[20px]"
						name="DiscordLogo"
						weight="regular"
					/>
					Discord
				</Button>
			</div>
		</section>
	)
}
