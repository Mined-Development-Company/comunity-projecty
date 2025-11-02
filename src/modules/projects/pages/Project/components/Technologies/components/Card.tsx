import { cn } from "../../../../../../../shared/utils/cn"

type CardProps = {
	title?: string
	className: string
	description?: string
}

export function Card({ title, className, description }: CardProps) {
	return (
		<div className={cn("flex-1 space-y-2 rounded-lg p-4", className)}>
			<p className="font-bold text-[#08080F]">{title}</p>
			{description && (
				<div
					className="text-content-quaternary"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
		</div>
	)
}
