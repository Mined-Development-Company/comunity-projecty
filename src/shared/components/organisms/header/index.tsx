import React from "react"
import Image from "next/image"

import Logo from "../../../../../public/favicon.svg"
import { Button } from "../../atoms/button"
import { NavLink } from "./NavLink"

export function Header() {
	return (
		<header className="w-full bg-content-shape-secondary shadow-md">
			<div className="container m-auto flex h-16 w-full items-center justify-between px-[7.5rem]">
				<div className="flex items-center gap-1">
					<Image src={Logo} alt="Logo" />
					<p className="text-2xl font-bold text-content-primary">Rai Sync</p>
				</div>

				<nav>
					<ul className="flex gap-16 font-medium text-content-primary">
						<NavLink href="">Home</NavLink>
						<NavLink href="">Ajuda</NavLink>
						<NavLink href="">Desafio</NavLink>
						<NavLink href="">Projetos</NavLink>
					</ul>
				</nav>

				<div className="flex gap-3">
					<Button>Entrar</Button>
					<Button variant="outline">Registrar</Button>
				</div>
			</div>
		</header>
	)
}
