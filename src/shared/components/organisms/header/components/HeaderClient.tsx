"use client"

import React, { useState } from "react"

import { useRouter } from "nextjs-toploader/app"

import { Button } from "@/shared/components/atoms/button"
import { AvatarInfo } from "@/shared/components/molecules/cardInfo"
import { SheetDefault } from "@/shared/components/molecules/sheets/SheetDefault"
import { ButtonSideBar } from "@/shared/components/organisms/header/components/ButtonSideBar"
import { DiscordServer } from "@/shared/components/organisms/header/components/DiscordServer"
import { NavLink } from "@/shared/components/organisms/header/components/NavLink"
import Profile from "@/shared/components/organisms/header/components/Profile"
import type { TUserData } from "@/shared/store/userDataStore"

import { logoutAction } from "../actions/logoutAction"

const defaultNav = [
	{ name: "Home", path: "/" },
	{ name: "Ajuda", path: "/help" },
	{ name: "Desafio", path: "/challenges" },
	{ name: "Projetos", path: "/projects" }
]

const navGuest = [
	{ name: "Login", path: "/login" },
	{ name: "Register", path: "/register" }
]

type HeaderClientProps = {
	userData: TUserData | null
}

export function HeaderClient({ userData }: HeaderClientProps) {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	async function handleLogOut() {
		await logoutAction()
		router.refresh()
	}

	function handleNav(path: string) {
		router.push(path)
	}

	const navDesktop = defaultNav
	const navMobile = userData ? defaultNav : [...defaultNav, ...navGuest]

	return (
		<>
			{/* Desktop */}
			<nav className="hidden lg:block">
				<ul className="flex gap-16 font-medium text-content-primary">
					{navDesktop.map(({ name, path }) => (
						<NavLink href={path} key={name}>
							{name}
						</NavLink>
					))}
				</ul>
			</nav>

			{!userData ? (
				<div className="hidden gap-3 lg:flex">
					<Button onClick={() => handleNav("/login")}>Entrar</Button>
					<Button variant="outline" onClick={() => handleNav("/register")}>
						Registrar
					</Button>
				</div>
			) : (
				<Profile
					name={userData?.name || ""}
					avatar={userData?.avatarUrl || ""}
					content={
						<div className="">
							<Button
								className="w-full"
								variant="ghost"
								onClick={() => handleNav(`/profile`)}>
								Perfil
							</Button>
							<Button className="w-full" variant="ghost" onClick={handleLogOut}>
								Sair
							</Button>
						</div>
					}
				/>
			)}

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
							{navMobile.map(({ name, path }) => (
								<NavLink className="w-fit py-3" href={path} key={name}>
									{name}
								</NavLink>
							))}
						</ul>
						{userData && (
							<button
								className="group flex flex-col font-normal text-content-primary"
								onClick={handleLogOut}>
								<p>sair</p>

								<span className="min-h-[1px] w-0 rounded-full bg-green-hard transition-all duration-300 group-hover:w-full"></span>
							</button>
						)}
					</nav>
				}
				footer={
					<div className="w-full space-y-4">
						{userData && (
							<AvatarInfo
								rootClassName="w-fit"
								image={userData?.avatarUrl || ""}
								name={userData?.name || ""}
								description="Usuário"
								dp="bottom"
							/>
						)}
						<DiscordServer variant="mobile" />
					</div>
				}
			/>
		</>
	)
}
