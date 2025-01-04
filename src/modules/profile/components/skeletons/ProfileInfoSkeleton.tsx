import { Skeleton } from "@/shared/components/molecules/skeleton"
import { cn } from "@/shared/utils/cn"

export function ProfileInfoSkeleton({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<section
			className={cn(
				"animate-pulse rounded-lg border border-content-shape-quaternary",
				className
			)}
			{...props}>
			<header className="h-[280px]">
				<Skeleton className="h-[240px] w-full rounded-b-none rounded-t-lg" />
				<section className="mx-8 -mt-14 flex flex-row items-center justify-between">
					<Skeleton className="size-24 rounded-full border-4 border-content-shape-quaternary" />
					<Skeleton className="size-7 rounded-full" />
				</section>
			</header>
			<footer className="px-6 py-2.5">
				<section className="flex flex-row flex-wrap justify-between space-y-2">
					<Skeleton className="h-[20px] w-[18ch]" />
					<div className="inline-flex space-x-5">
						{new Array(3).fill(0).map((_, index) => (
							<Skeleton key={index} className="size-5 rounded-sm" />
						))}
					</div>
				</section>
				<Skeleton className="h-[20px] w-[50ch] py-3" />
			</footer>
		</section>
	)
}
