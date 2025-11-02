"use client"

import { PiDiscordLogoFill } from "react-icons/pi"

import { Button } from "../../shared/components/atoms/button"

import { ChallengesCard } from "./components/ChallengesCard"
import { DiscussionForum } from "./components/DiscussionForum"
import { InteractiveGlobe } from "./components/InteractiveGlobe"
import { ProjectsCarousel } from "./components/ProjectsCarousel"

export default function Home() {
	return (
		<div className="size-full space-y-[100px] pb-11">
			<div className="container relative m-auto mt-[101px] flex w-full items-center px-4 lg:px-[10px] xl:px-[7.5rem]">
				<div className="space-y-4">
					<div className="relative">
						<h3 className="text-[90px] font-bold leading-[120px] text-content-primary">
							Let’s Grow up together
						</h3>
						<Button
							variant="secondary"
							className="absolute bottom-7 right-[36%] flex h-[48px] w-[160px] gap-3 rounded-[1.875rem] p-0 text-xl font-bold [&_svg]:size-[30px]">
							<PiDiscordLogoFill size={42} />
							<p className="text-xl"> Discord</p>
						</Button>
					</div>
					<p className="w-[480px] text-xl font-thin text-content-secondary">
						<strong className="text-green-hard">Seja bem-vindo(a)!</strong> Sinta-se à
						vontade para compartilhar suas ideias e opiniões.
					</p>
				</div>
				<div className="size-[456px]"></div>
				<div className="absolute right-24 top-16">
					<InteractiveGlobe
						autoRotate={true}
						rotationSpeed={0.002}
						enableZoom={true}
						enableRotate={true}
					/>
				</div>
			</div>

			<ChallengesCard />
			<DiscussionForum />
			<ProjectsCarousel />

			<div></div>
		</div>
	)
}
