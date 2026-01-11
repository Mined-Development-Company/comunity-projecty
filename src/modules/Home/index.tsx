"use client"

import { PiDiscordLogoFill } from "react-icons/pi"

import { Button } from "@/shared/components/atoms/button"

import { ChallengesCard } from "./components/ChallengesCard"
import { DiscussionForum } from "./components/DiscussionForum"
import { ProjectsCarousel } from "./components/ProjectsCarousel"
import { useModel } from "./hooks/useModel"

export default function Home() {
	const {} = useModel()

	return (
		<div className="size-full space-y-[100px] pb-11">
			<div className="container relative m-auto mt-20 flex w-full items-center px-4 md:mt-[101px] lg:px-[10px] xl:px-[7.5rem]">
				<div className="m-auto space-y-6 2xl:m-0 2xl:space-y-4">
					<div className="">
						<h3 className="text-wrap text-center text-5xl font-bold leading-normal text-content-primary md:text-5xl lg:text-7xl 2xl:w-[700px] 2xl:text-left 2xl:text-[90px] 2xl:leading-[120px]">
							Let’s Grow up together
						</h3>

						<Button
							variant="secondary"
							className="absolute bottom-[100px] left-[34%] hidden h-[48px] w-[160px] gap-3 rounded-[1.875rem] p-0 text-xl font-bold 2xl:flex [&_svg]:size-[30px]">
							<PiDiscordLogoFill size={42} />
							<p className="text-xl"> Discord</p>
						</Button>
					</div>

					<p className="text-center text-xl font-thin text-content-secondary md:m-auto md:w-[620px] 2xl:m-0 2xl:w-[480px] 2xl:text-start">
						<strong className="text-green-hard">Seja bem-vindo(a)!</strong> Sinta-se à
						vontade para compartilhar suas ideias e opiniões.
					</p>

					<Button
						variant="secondary"
						className="m-auto mt-6 flex h-[36px] w-[160px] gap-3 rounded-[1.875rem] p-0 font-bold 2xl:hidden [&_svg]:size-[20px]">
						<PiDiscordLogoFill size={36} />
						<p className="text-lg"> Discord</p>
					</Button>
				</div>

				<img
					className="absolute right-24 top-16 hidden size-[456px] 2xl:block"
					src="/globe.svg"
					alt="Globe"
				/>
			</div>

			<ChallengesCard />
			<DiscussionForum />
			<ProjectsCarousel />

			<div></div>
		</div>
	)
}
