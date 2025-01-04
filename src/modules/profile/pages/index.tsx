"use client"

import type React from "react"

import { Skeleton } from "@/shared/components/molecules/skeleton"
import { Donation } from "@/shared/components/organisms/donation"

import { ProfileActivities } from "../components/ProfileActivities"
import ProfileInfo from "../components/ProfileInfo"
import ProfileStats from "../components/ProfileStats"
import { ProfileActivitiesSkeleton } from "../components/skeletons/ProfileActivitiesSkeleton"
import { ProfileInfoSkeleton } from "../components/skeletons/ProfileInfoSkeleton"
import { ProfileStatsSkeleton } from "../components/skeletons/ProfileStatsSkeleton"
import { useModel } from "./hooks/useModel"

function ProfileLayoutSkeleton() {
	return (
		<main className="container grid gap-4 [grid-template-areas:'ProfileInfo'_'ProfileStats'_'ProfileActivities'_'Donation'] lg:[grid-template-areas:'ProfileInfo_ProfileStats'_'ProfileActivities_Donation'] lg:[grid-template-columns:874px_302px]">
			<ProfileInfoSkeleton className="h-fit [grid-area:ProfileInfo]" />
			<ProfileActivitiesSkeleton className="h-fit [grid-area:ProfileActivities]" />
			<ProfileStatsSkeleton className="h-fit [grid-area:ProfileStats]" />
			<div className="flex h-fit flex-col items-center gap-y-5 rounded-lg border border-content-shape-quaternary p-4 [grid-area:Donation] lg:relative lg:-top-14 lg:h-[292px] lg:w-[302px]">
				<Skeleton className="h-[60px] w-[284px]" />
				<Skeleton className="h-[32px] w-[268px]" />
				<Skeleton className="h-[36px] w-[229px]" />
				<Skeleton className="h-[36px] w-[229px] px-4 py-2" />
				<Skeleton className="h-[36px] w-[140px]" />
				<Skeleton className="h-[48px] w-[268px]" />
			</div>
		</main>
	)
}

export function Profile() {
	const { data: profileData, isLoading } = useModel()

	if (isLoading && !profileData) return <ProfileLayoutSkeleton />

	return (
		<main className="grid gap-4 [grid-template-areas:'ProfileInfo'_'ProfileStats'_'ProfileActivities'_'Donation'] lg:[grid-template-areas:'ProfileInfo_ProfileStats'_'ProfileActivities_Donation'] lg:[grid-template-columns:874px_302px]">
			<ProfileInfo
				className="[grid-area:ProfileInfo]"
				data={{
					id: profileData.id!,
					avatar: profileData.avatar!,
					name: profileData.nickName || profileData.name || "",
					banner: profileData.banner!,
					description: profileData.description
				}}
			/>
			<ProfileActivities
				className="[grid-area:ProfileActivities]"
				profileData={{
					avatar: profileData.avatar!,
					name: profileData.nickName || profileData.name || ""
				}}
				posts={null} // TODO: Inserir os dados referentes aos POSTS do PERFIL e atribuir sua tipagem no componente
				challenges={null} // TODO: Inserir os dados referentes aos CHALLENGES do PERFIL e atribuir sua tipagem no componente
				projects={null} // TODO: Inserir os dados referentes aos PROJECTS do PERFIL e atribuir sua tipagem no componente
			/>
			<ProfileStats
				className="[grid-area:ProfileStats]"
				posts={null} // TODO: Inserir os dados referentes aos POSTS do PERFIL e atribuir sua tipagem no componente
				challenges={null} // TODO: Inserir os dados referentes aos CHALLENGES do PERFIL e atribuir sua tipagem no componente
			/>
			<Donation className="w-max [grid-area:Donation] lg:relative lg:-top-14" />
		</main>
	)
}
