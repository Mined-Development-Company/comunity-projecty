/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import Logo from "../../../../../public/favicon.svg"
import { useHeader } from "../../../hooks/useHeader"
import { Button } from "../../atoms/button"
import { AvatarInfo } from "../../molecules/cardInfo"
import { SheetDefault } from "../../molecules/sheets/SheetDefault"
import { ButtonSideBar } from "./components/ButtonSideBar"
import { DiscordServer } from "./components/DiscordServer"
import { NavLink } from "./components/NavLink"
import Profile from "./components/Profile"

export function Header() {
	const { open, userData, navMobile, navDesktop, setOpen, handleNav, handleLogOut } =
		useHeader()

	return (
		<header className="fixed z-50 w-full bg-content-shape-secondary drop-shadow-[0px_2px_10px_rgba(0,0,0,0.10)]">
			<div className="container m-auto flex h-16 w-full items-center justify-between px-4 lg:px-[10px] xl:px-[7.5rem]">
				<Link className="-ml-2 flex items-center gap-1" href="/">
					<Image src={Logo} alt="Logo" priority />
					<p className="text-2xl font-bold text-content-primary">Rai Sync</p>
				</Link>

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
						{...userData}
						content={
							<div className="">
								<Button
									className="w-full"
									variant="ghost"
									onClick={() => handleNav(`/profile/${userData.profileId}`)}>
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
							{userData?.id && (
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
									image={userData.avatar}
									name={userData.name}
									description="Usuário"
									dp="bottom"
								/>
							)}
							<DiscordServer variant="mobile" />
						</div>
					}
				/>
			</div>
		</header>
	)
}
