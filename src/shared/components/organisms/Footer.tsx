import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../../../../public/favicon.svg"
import Discord from "../../../../public/icon/discord.svg"
import Twitch from "../../../../public/icon/twitch.svg"
import { FooterContributors } from "./Footer/components/FooterContributors"

export function Footer() {
	return (
		<footer className="flex h-fit bg-content-shape-secondary py-6">
			<div className="container m-auto flex w-full max-w-[1280px] justify-between px-2 lg:px-2 2xl:px-0">
				<div>
					<div className="flex items-center gap-1">
						<Image className="size-[35px] lg:size-10" src={Logo} alt="Logo" priority />
						<p className="font-bold text-content-primary lg:text-2xl">Rai Sync</p>
					</div>

					<nav className="pl-[53px]">
						<ul className="flex gap-3">
							<li className="transition-all duration-300 hover:scale-110">
								<Link href={"https://discord.gg/krY98xMNQg"} target="_blank">
									<Image src={Discord} alt="Discord" />
								</Link>
							</li>
							<li>
								<Link href={"https://www.twitch.tv/devrogerinho"} target="_blank">
									<Image src={Twitch} alt="Twitch" />
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="hidden flex-col items-center justify-center text-content-primary lg:flex">
					<p className="text-lg font-bold 2xl:text-xl">Junte-se à nossa comunidade!</p>
					<p className="text-sm">
						Venha fazer parte de uma comunidade vibrante de desenvolvedores
					</p>
				</div>

				<div className="space-y-2">
					<p className="text-xs font-bold text-white lg:text-base">Colaboradores</p>
					<FooterContributors />
				</div>
			</div>
		</footer>
	)
}
