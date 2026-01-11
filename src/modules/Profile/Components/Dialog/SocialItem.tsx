import { Icon } from "@/shared/components/atoms/icon/Icon"

type Props = {
	size: number
	logo: Parameters<typeof Icon>[0]["name"]
	name: string
    onClick?: () => void
}

export const SocialItem = ({ size, logo, name, onClick }: Props) => {
	return (
		<div className="mb-2 flex p-2" onClick={onClick}>
			<Icon name={logo} size={size} />
			<div className="ml-2 h-9 w-64 rounded-md p-2 text-gray-500 ring-1 ring-[#21222E]">
				{name}
			</div>
		</div>
	)
}
