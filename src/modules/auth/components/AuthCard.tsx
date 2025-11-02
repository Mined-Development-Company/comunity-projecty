import React, { useState } from "react"

import { Button } from "../../../shared/components/atoms/button"
import { Icon } from "../../../shared/components/atoms/icon/Icon"

type AuthCardProps = {
	action: "login" | "register"
	isLoading: boolean
	onClickDiscord?: () => void
	onClickGithub?: () => void
}

export function AuthCard({
	action,
	isLoading,
	onClickGithub,
	onClickDiscord
}: AuthCardProps) {
	const [loads, setLoads] = useState({ discord: false, github: false })

	function handleSetLoads(action: "github" | "discord") {
		if (action === "github") {
			onClickGithub!() 
			setLoads((prev) => ({ ...prev, github: true }))
		} else {
			onClickDiscord!()
			setLoads((prev) => ({ ...prev, discord: true }))
		}
	}

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
					onClick={() => handleSetLoads("github")}
					isLoading={loads.github}
					disabled={isLoading}>
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
					isLoading={loads.discord}
					onClick={() => handleSetLoads("discord")}
					disabled={isLoading}>
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
