import { Skeleton } from "@/shared/components/molecules/skeleton"

import { ProfileActivitiesSkeleton } from "./ProfileActivitiesSkeleton"
import { ProfileInfoSkeleton } from "./ProfileInfoSkeleton"
import { ProfileStatsSkeleton } from "./ProfileStatsSkeleton"

export function ProfileLayoutSkeleton() {
	return (
		<main className="container grid gap-4 [grid-template-areas:'ProfileInfo'_'ProfileStats'_'ProfileActivities'_'Donation'] lg:[grid-template-areas:'ProfileInfo_ProfileStats'_'ProfileActivities_Donation'] lg:[grid-template-columns:874px_302px]">
			<ProfileInfoSkeleton className="h-fit [grid-area:ProfileInfo]" />
			<ProfileActivitiesSkeleton className="h-fit [grid-area:ProfileActivities]" />
			<ProfileStatsSkeleton className="h-fit [grid-area:ProfileStats]" />
			<div className="flex h-fit flex-col items-center gap-y-5 rounded-lg border border-content-shape-quaternary p-4 [grid-area:Donation] lg:relative lg:-top-14 lg:h-[292px] lg:w-[302px]">
				<Skeleton className="h-[60px] w-[284px]" />
				<Skeleton className="h-[32px] w-[268px]" />
				<Skeleton className="h-[36px] w-[229px]" />
				<Skeleton className="h-[36px] w-[229px] px-4 py-2" />
				<Skeleton className="h-[36px] w-[140px]" />
				<Skeleton className="h-[48px] w-[268px]" />
			</div>
		</main>
	)
}
