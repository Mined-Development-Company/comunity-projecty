"use client"

import React, { useState } from "react"
import Image from "next/image"

import Logo from "../../../../../public/favicon.svg"
import { Button } from "../../atoms/button"
import { SheetDefault } from "../../molecules/sheets/SheetDefault"
import { ButtonSideBar } from "./ButtonSideBar"
import { DiscordServer } from "./DiscordServer"
import { NavLink } from "./NavLink"

const NavData = [
	{ name: "Home", path: "" },
	{ name: "Ajuda", path: "" },
	{ name: "Desafio", path: "" },
	{ name: "Projetos", path: "" }
]

export function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className="w-full bg-content-shape-secondary shadow-md">
			<div className="container m-auto flex h-16 w-full items-center justify-between px-4 lg:px-[7.5rem]">
				<div className="flex items-center gap-1">
					<Image src={Logo} alt="Logo" />
					<p className="text-2xl font-bold text-content-primary">Rai Sync</p>
				</div>

				{/* Desktop */}
				<nav className="hidden lg:block">
					<ul className="flex gap-16 font-medium text-content-primary">
						{NavData.map(({ name, path }) => (
							<NavLink href={path} key={name}>
								{name}
							</NavLink>
						))}
					</ul>
				</nav>

				<div className="hidden gap-3 lg:flex">
					<Button>Entrar</Button>
					<Button variant="outline">Registrar</Button>
				</div>

				<DiscordServer variant="desktop" />

				{/* Mobile */}
				<SheetDefault
					open={open}
					onOpenChange={(open) => setOpen(open)}
					trigger={<ButtonSideBar onClick={() => setOpen(true)} />}
					classNameContent="flex flex-col"
					content={
						<nav className="flex-1">
							<ul className="flex flex-col font-medium text-content-primary">
								{NavData.map(({ name, path }) => (
									<NavLink className="w-fit py-3" href={path} key={name}>
										{name}
									</NavLink>
								))}
							</ul>
						</nav>
					}
					footer={<DiscordServer variant="mobile" />}
				/>
			</div>
		</header>
	)
}
