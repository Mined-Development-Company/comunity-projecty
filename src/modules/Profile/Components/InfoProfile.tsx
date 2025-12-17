import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { DialogDefault } from "@/shared/components/molecules/DialogDefault"

import { EditProfile } from "./Dialog/EditProfile"
import { IconEditProfile } from "./Dialog/IconEditProfile"

export const InfoProfile = () => {
	return (
		<div className="overflow-hidden rounded-lg bg-content-shape-secondary ring-1 ring-gray-500/20">
			<img className="h-60 w-full object-cover" src="/profile/banner1.png" alt="" />
			<div className="h-14 px-10 md:h-[70px]">
				<AvatarDefault
					src="https://github.com/shadcn.png"
					className="absolute -top-16 h-[120px] w-[120px] border-4 border-black md:-top-20 lg:h-[156px] lg:w-[156px]"
				/>

				<div className="flex justify-end px-3 pt-12 md:pt-4">
					<DialogDefault trigger={<IconEditProfile />} content={<EditProfile />} />
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
