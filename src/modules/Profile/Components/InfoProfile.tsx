import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { Dialog } from "@/shared/components/molecules/dialog"

import { EditProfile } from "./Dialog/EditProfile"
import { IconEditProfile } from "./Dialog/IconEditProfile"

export const InfoProfile = () => {
	return (
		<div className="overflow-hidden rounded-lg bg-content-shape-secondary ring-1 ring-gray-500/20">
			<img className="h-60 w-full object-cover" src="/profile/banner1.png" alt="" />
			<div className="h-[70px] px-10">
				<AvatarDefault
					src="https://github.com/shadcn.png"
					className="absolute -top-20 h-[156px] w-[156px] border-4 border-black"
				/>

				<div className="flex justify-end px-3 pt-4">
					<Dialog trigger={<IconEditProfile />} children={<EditProfile />} />
				</div>
			</div>

			<div className="space-y-2 px-6 py-4">
				<div className="flex items-center justify-between">
					<p className="text-xl font-bold">Nome do Usuario</p>

					<div className="flex gap-4">
						<Icon name={"LinkedinLogo"} weight="fill" size={24} />
						<Icon name={"InstagramLogo"} weight="fill" size={24} />
					</div>
				</div>
				<p className="text-content-secondary">
					Desenvolvedor(a) Full Stack com foco em Next.js, TypeScript e Tailwind CSS,
					especializado(a) em criar interfaces acessíveis e responsivas, priorizando a
					experiência do usuário.
				</p>
			</div>
		</div>
	)
}
