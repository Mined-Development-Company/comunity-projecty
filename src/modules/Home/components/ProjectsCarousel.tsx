import { PiGithubLogoFill } from "react-icons/pi"

import { Button } from "@/shared/components/atoms/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/shared/components/atoms/carousel"
import { ProjectCard } from "@/shared/components/molecules/ProjectCard"

const mockData = {
	id: 0,
	title: "App de Sustentabilidade",
	description:
		"Desenvolva um aplicativo que ajuda as pessoas a adotarem práticas mais sustentáveis no dia dkahshd ajshdjkgas a dasdsd aa kdkasdasdsasdas ",
	img: "/projects/p1.jpg",
	inProgress: true
}

export function ProjectsCarousel() {
	return (
		<div className="container m-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-16 px-16">
			<div className="space-y-1 text-center">
				<h3 className="text-2xl font-bold text-content-primary text-opacity-100 md:text-4xl lg:text-5xl">
					Projetos da Comunidade{" "}
				</h3>
				<p className=":md:w-[667px] mx-auto text-content-tertiary md:text-[18px]">
					Participe de{" "}
					<strong className="font-medium text-green-hard">
						{" "}
						projetos colaborativos para aprender mais e evoluir
					</strong>{" "}
					como desenvolvedor junto com a comunidade!
				</p>
			</div>

			<Carousel
				opts={{
					align: "start"
				}}
				className="w-full">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="basis-full md:basis-[40%] lg:basis-1/3 min-[1280px]:basis-1/4">
							<ProjectCard classname="max-w-[283px]" {...mockData} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className="flex items-center justify-center gap-8">
				<Button className="font-bold" size={"lg"}>
					Participar
				</Button>
				<Button
					className="flex items-center gap-2 px-4 text-lg font-bold [&_svg]:size-5 [&_svg]:text-green-hard"
					variant={"outline-green"}
					size={"lg"}>
					<PiGithubLogoFill />
					Github
				</Button>
			</div>
		</div>
	)
}
