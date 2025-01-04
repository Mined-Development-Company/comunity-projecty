import { Skeleton } from "@/shared/components/molecules/skeleton"
import { cn } from "@/shared/utils/cn"

export function ProfileStatsSkeleton({
	className,
	...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {
	return (
		<section
			className={cn(
				"space-y-6 rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-6 text-white",
				className
			)}
			{...props}>
			<Skeleton className="m-[0_auto] h-[28px] w-[252px]" />
			<div>
				<Skeleton className="h-[18px] w-[10ch]" />
				<section className="mt-4 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[70px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
				<section className="mt-2 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[113px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
			</div>
			<div>
				<Skeleton className="h-[18px] w-[9ch]" />
				<section className="mt-4 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[98px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
				<section className="mt-2 flex items-center justify-between">
					<Skeleton className="h-[20px] w-[76px]" />
					<Skeleton className="h-[20px] w-[10px]" />
				</section>
			</div>
			{/* <header>
				<Skeleton className="w-[12ch]" />
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
			</header>
			<footer>
				<Skeleton className="w-[12ch]" />
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
				<section className="flex justify-between">
					<div className="">
						<Skeleton className="mr-2 size-5 rounded-lg" />
						<Skeleton className="w-[13ch]" />
					</div>
					<Skeleton className="w-[13ch]" />
				</section>
			</footer> */}
		</section>
	)
}
