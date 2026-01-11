import Image from "next/image"

import { Marquee } from "@/shared/components/atoms/marquee"

const ReviewCard = () => {
	return (
		<div className="relative overflow-hidden rounded-[.5rem]">
			<div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-[#0C0D14]/20 to-transparent" />
			<Image
				className=""
				src={"/challenges/challenge.png"}
				width={350}
				height={250}
				alt="Globe image"
			/>
		</div>
	)
}

export function MarqueeDefault() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Marquee reverse pauseOnHover className="div-com-fade [--duration:20s]">
				{Array.from({ length: 4 }).map((_, index) => (
					<ReviewCard key={index} />
				))}
			</Marquee>
			<Marquee pauseOnHover className="div-com-fade [--duration:20s]">
				{Array.from({ length: 4 }).map((_, index) => (
					<ReviewCard key={index} />
				))}
			</Marquee>
		</div>
	)
}
