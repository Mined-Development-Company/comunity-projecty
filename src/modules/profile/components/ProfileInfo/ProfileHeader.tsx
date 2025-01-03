import React from "react"
import Image from "next/image"

import type { ProfileProps } from "@/shared/schemas/Profile.schema"
import { EditProfile } from "@/modules/profile/components/ProfileInfo"
import { Avatar, AvatarImage } from "@/shared/components/atoms/avatar"

interface ProfileHeaderProps {
	banner: ProfileProps["banner"]
	avatar: ProfileProps["avatar"]
	editEnabled?: boolean
}

const ProfileHeader = ({ avatar, banner, editEnabled = false }: ProfileHeaderProps) => {
	return (
		<header>
			<Image
				src={banner}
				datatype="image/png"
				alt="Profile background"
				className="w-full rounded-t-lg object-cover"
				width={874}
				height={240}
			/>
			<section className="mx-8 -mt-12 flex flex-row items-center justify-between">
				<Avatar size="lg" className="border-4 border-content-shape-quaternary">
					<AvatarImage className="object-cover" src={`${avatar}`} />
				</Avatar>
				{editEnabled && (
					// TODO: Realizar a verificação de permissão de edição de acordo com a sessão do usuário
					<EditProfile
						title="Editar Perfil"
						className={"size-7 rounded-full hover:bg-green-light"}
					/>
				)}
			</section>
		</header>
	)
}

export default ProfileHeader
