import { Icon } from "@/shared/components/atoms/icon/Icon"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"

export const InfoProfile = () => {
	return (
		<div className="max-w-4xl overflow-hidden rounded-md bg-[#0f1018] ring-1 ring-gray-500/20 relative">
			<img className="h-60 w-full max-w-4xl" src="/profile/banner1.png" alt="" />
			<AvatarDefault
				src="https://github.com/shadcn.png"
				className="absolute mx-10 mt-[-80px] h-[156px] w-[156px]"
			/>
			<div className="flex items-center justify-between mt-3 mb-2">
				<p className="mx-10 text-xl font-bold">Nome do Usuario</p>
				<div className="m-[10px] flex gap-4">
					<Icon name={"LinkedinLogo"} weight="fill" size={20} />
					<Icon name={"InstagramLogo"} weight="fill" size={20} />
				</div>
			</div>
			<p className="mx-10 mb-4 ">
				Desenvolvedor(a) Full Stack com foco em Next.js, TypeScript e Tailwind CSS,
				especializado(a) em criar interfaces acessíveis e responsivas, priorizando a
				experiência do usuário.
			</p>
		</div>
	)
}
