import { Icon } from "@/shared/components/atoms/icon/Icon"
import type { iconProps } from "@/shared/components/atoms/icon/iconType"
import { cn } from "@/shared/utils/cn"

type TIconCommentProps = Omit<iconProps, "weight"> & {
	count: number
	weight: boolean
	liked: boolean | null
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}

export const ButtonIconComment = ({
	name,
	count,
	liked,
	weight,
	onClick,
	onMouseEnter,
	onMouseLeave,
	...props
}: TIconCommentProps) => {
	function getIconWeight() {
		if (liked === null && !weight) return "regular"
		if (liked !== null) return "fill"
		return weight ? "fill" : "regular"
	}

	return (
		<button className="flex items-center justify-center gap-1" onClick={onClick}>
			<Icon
				name={name}
				size={20}
				weight={getIconWeight()}
				className={cn(
					liked === null && "!text-content-secondary",
					liked && "text-blue-light",
					!liked && "text-red-hard"
				)}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				{...props}
			/>

			<span className="pt-[2px] text-xs font-medium text-content-quaternary">
				{count}
			</span>
		</button>
	)
}
