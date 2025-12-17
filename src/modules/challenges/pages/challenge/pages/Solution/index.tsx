"use client"

// depois pergunto pro gpt
import React from "react"
import { usePathname } from "next/navigation"

import { useRouter } from "nextjs-toploader/app"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"
import { AvatarInfo } from "@/shared/components/molecules/cardInfo"

export function Solution() {
	const pathName = usePathname()
	const router = useRouter()

	if (!pathName) {
		return <h1>404 PAGE NOT FOUND</h1>
	}

	const paths = [
		{ title: "Desafio", href: "/challenges/challenge/1" },
		{ title: "Soluções", href: "/challenges/challenge/solutions/1" },
		{ title: "Solução", href: "" }
	]

	return (
		<div className="space-y-6">
			{/* HEADER */}
			<Breadcrumb paths={paths} />

			<div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
				<div className="flex flex-col gap-6 md:gap-10">
					<div className="space-y-2">
						<p className="text-content-quaternary">Submitted over 2 years ago</p>
						<h2 className="text-2xl font-bold md:text-3xl">
							Pagina de vendas E-commerce
						</h2>
					</div>

					<AvatarInfo
						rootClassName="w-fit"
						image="https://github.com/shadcn.png"
						name="Rogerinho"
						description="Adicionado por"
						size="md"
						dp="top"
					/>

					{/* BOTÕES */}
					<div className="flex gap-5 md:my-5">
						<Button
							variant="outline-green"
							className="font-bold"
							onClick={() => router.push("/challenges/challenge/send-solution/1")}>
							Ver website
							<Icon name="Desktop" />
						</Button>
						<Button
							variant="outline-green"
							className="font-bold"
							onClick={() => router.push("/challenges/challenge/solutions/1")}>
							Ver repositório
							<Icon name="GithubLogo" weight="fill" />
						</Button>
					</div>
				</div>

				{/* IMAGEM */}
				<iframe
					className="h-[280px] rounded-md md:w-[623px] lg:h-[379px]"
					src="https://embed.figma.com/design/jrpkGxF4Px3jH4QhwEKwiY/Community-Project?embed-host=share"></iframe>
			</div>
		</div>
	)
}
