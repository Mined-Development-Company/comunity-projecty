import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../../../../public/favicon.svg"
import Discord from "../../../../public/icon/discord.svg"
import Twitch from "../../../../public/icon/twitch.svg"
import { MultiAvatar } from "../molecules/avatars/MultiAvatar"

const listAvatar = [
	{
		src: "https://i.pinimg.com/236x/54/90/5d/54905db6a983fa17c7e0fa80c7db478a.jpg",
		name: "Sam"
	},
	{
		src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHvHZ7u51v98c_fqdBe626-I9JJfMx5S4BKTaOHDAOpxTFnkB4nFjN2on7cv-_rVUysc&usqp=CAU",
		name: "Clover"
	},
	{
		src: "https://pbs.twimg.com/media/E2O8sHlVgAEmE2U.png:small",
		name: "Alex"
	},
	{
		src: "https://i.ytimg.com/vi/tqsteJIc6Ds/maxresdefault.jpg",
		name: "Phineas"
	},
	{
		src: "https://pm1.aminoapps.com/7023/bc7bda9e84fd98da0ebc2cfb07afb9b2cefeab3fr1-1896-1066v2_hq.jpg",
		name: "Ferb"
	}
]

export function Footer() {
	return (
		<footer className="h-[138px] bg-content-shape-secondary">
			<div className="container m-auto flex size-full items-center justify-between px-[7.5rem]">
				<div className="">
					<div className="flex items-center gap-1">
						<Image src={Logo} alt="Logo" />
						<p className="text-2xl font-bold text-content-primary">Rai Sync</p>
					</div>

					<nav className="ml-[53px]">
						<ul className="flex gap-3">
							<li className="transition-all duration-300 hover:scale-110">
								<Link href={""}>
									<Image src={Discord} alt="Discord" />
								</Link>
							</li>
							<li>
								<Link href={""}>
									<Image src={Twitch} alt="Twitch" />
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex flex-col items-center justify-center text-content-primary">
					<p className="text-xl font-bold">Junte-se à nossa comunidade!</p>
					<p className="text-sm">
						Venha fazer parte de uma comunidade vibrante de desenvolvedores
					</p>
				</div>

				<div className="space-y-2">
					<p className="font-bold text-white">Nossos desenvolvedores</p>
					<MultiAvatar className="w-full justify-end" listAvatar={listAvatar} />
				</div>
			</div>
		</footer>
	)
}
