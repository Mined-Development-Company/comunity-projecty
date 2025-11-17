import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"
import { Dialog } from "@/shared/components/molecules/dialog"
import { EditProfile } from "./Dialog/EditProfile"
import { IconEditProfile } from "./Dialog/IconEditProfile"



export const InfoProfile = () => {
	return (
		<div className="relative overflow-hidden rounded-md bg-[#0f1018] ring-1 ring-gray-500/20">
		
			<img className="h-60 w-full object-cover" src="/profile/banner1.png" alt="" />
			<div className="relative px-10">
				<AvatarDefault
					src="https://github.com/shadcn.png"
					className="absolute -top-20 h-[156px] w-[156px] border-4 border-black"
				/>
				
				<div className="flex justify-end pt-4">
					<Dialog	
						trigger={<IconEditProfile/>}
						children={<EditProfile/>}
					/>
				</div>
			</div>

			<div className="mb-2 mt-3 flex items-center justify-between">
				<p className="mx-10 text-xl font-bold">Nome do Usuario</p>

				<div className="m-[10px] flex gap-4">
					<Icon name={"LinkedinLogo"} weight="fill" size={20} />
					<Icon name={"InstagramLogo"} weight="fill" size={20} />
				</div>
			</div>
			<p className="mx-10 mb-4">
				Desenvolvedor(a) Full Stack com foco em Next.js, TypeScript e Tailwind CSS,
				especializado(a) em criar interfaces acessíveis e responsivas, priorizando a
				experiência do usuário.
			</p>
		</div>
	)
}
