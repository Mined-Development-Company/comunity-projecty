"use client"

import type React from "react"
import { useParams } from "next/navigation"

import type { UserProps } from "@/shared/@types/UserProps"
import { cn } from "@/shared/utils/cn"

import { type ProfileProps } from "../../schema/Profile.schema"
import ProfileFooter from "./ProfileFooter"
import ProfileHeader from "./ProfileHeader"

export { default as EditProfile } from "./EditProfile"

type ProfileInfoProps = {
	data: Pick<ProfileProps, "avatar" | "banner" | "social" | "description" | "id"> &
		Pick<UserProps, "name">
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>

export default function ({ className, data, ...props }: ProfileInfoProps) {
	const { id: currentProfileId } = useParams()
	return (
		<section
			className={cn(
				"rounded-lg border border-content-shape-quaternary bg-content-shape-secondary",
				className
			)}
			{...props}>
			<ProfileHeader
				editEnabled={currentProfileId === data.id}
				avatar={data.avatar}
				banner={data.banner}
			/>
			<ProfileFooter name={data.name} socialLinks={data.social} bio={data.description} />
		</section>
	)
}
