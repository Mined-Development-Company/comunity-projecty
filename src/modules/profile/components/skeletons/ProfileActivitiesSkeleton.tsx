import { Skeleton } from "@/shared/components/molecules/skeleton"
import { cn } from "@/shared/utils/cn"

export function ProfileActivitiesSkeleton({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<section
			className={cn(
				"space-y-4 rounded-md border border-content-shape-quaternary bg-content-shape-secondary p-6",
				className
			)}
			{...props}>
			<header>
				<Skeleton className="h-[23px] w-[9ch]" />
				<div className="mt-3 flex flex-row gap-3">
					<Skeleton className="h-[24px] w-[101px]" />
					<Skeleton className="h-[24px] w-[103px]" />
					<Skeleton className="h-[24px] w-[113px]" />
				</div>
			</header>
			<footer className="flex h-full max-h-[274px] flex-col items-center justify-center space-y-2.5">
				<Skeleton className="h-[20px] w-[23ch]" />
				<div className="flex max-w-[46ch]">
					<Skeleton className="h-[16px] w-[100ch]" />
				</div>
			</footer>
		</section>
	)
}
