import { cn } from "@/shared/utils/cn"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("animate-pulse rounded-lg bg-zinc-300/10", className)}
			{...props}
		/>
	)
}

export { Skeleton }
