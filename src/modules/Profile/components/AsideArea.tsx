import { Icon } from "@/shared/components/atoms/icon/Icon"
import type { PhosphorIconsKey } from "@/shared/components/atoms/icon/iconType"
import { cn } from "@/shared/utils/cn"

export const AsideArea = () => {
	return (
		<div className="h-fit space-y-3 rounded-lg bg-content-shape-secondary p-8 ring-1 ring-gray-500/20 lg:max-w-[302px]">
			<p className="text-center text-xl font-bold">Contribuições</p>

			<div className="space-y-3">
				<p className="font-semibold">Perguntas:</p>
				<div className="space-y-2">
					<Card iconName="Question" label="Feitas" value={24} />
					<Card iconName="Lightbulb" label="Respondida" value={24} />
				</div>
			</div>

			<span className="block h-[1px] w-full bg-content-shape-quaternary" />

			<div className="space-y-3">
				<p className="font-semibold">Desafios:</p>
				<div className="space-y-2">
					<Card iconName="Trophy" label="Feitos" value={24} />
					<Card iconName="PencilCircle" label="Criados" value={24} />
				</div>
			</div>
		</div>
	)
}

type CardProps = {
	iconName: PhosphorIconsKey
	iconClassName?: string
	label: string
	value: number
}
const Card = ({ iconName, label, value, iconClassName }: CardProps) => {
	return (
		<div className="flex justify-between">
			<div className="flex items-center justify-center gap-2 text-content-tertiary">
				<Icon
					name={iconName}
					size={20}
					className={cn(iconClassName, "text-content-primary")}
				/>
				{label}
			</div>
			<p>{value}</p>
		</div>
	)
}
