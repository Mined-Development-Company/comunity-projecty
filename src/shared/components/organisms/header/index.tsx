import React, { Suspense } from "react"
import { cookies } from "next/headers"
import Image from "next/image"
import Link from "next/link"

import type { TUserData } from "@/shared/store/userDataStore"

import Logo from "../../../../../public/favicon.svg"
import { HeaderClient } from "./components/HeaderClient"
import { SkeletonHeader } from "./components/SkeletonHeader"

async function getUserData(): Promise<TUserData | null> {
	const cookieStore = await cookies()
	const userCookie = cookieStore.get("user")?.value

	if (!userCookie) {
		return null
	}

	try {
		const user = JSON.parse(userCookie) as TUserData
		return user
	} catch {
		return null
	}
}

export async function Header() {
	const userData = await getUserData()

	return (
		<header className="fixed z-40 w-full bg-content-shape-secondary drop-shadow-[2px_1px_5px_rgba(0,0,0,0.10)]">
			<div className="container m-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-4 lg:px-[10px] xl:px-0">
				<Link className="-ml-2 flex items-center gap-1" href="/">
					<Image src={Logo} alt="Logo" priority />
					<p className="text-2xl font-bold text-content-primary">Rai Sync</p>
				</Link>

				<Suspense fallback={<SkeletonHeader />}>
					<HeaderClient userData={userData} />
				</Suspense>
			</div>
		</header>
	)
}
