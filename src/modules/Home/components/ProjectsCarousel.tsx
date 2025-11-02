import { PiGithubLogoFill } from "react-icons/pi"

import { Button } from "../../../shared/components/atoms/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "../../../shared/components/atoms/carousel"
import { ProjectCard } from "../../../shared/components/molecules/ProjectCard"

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
		<div className="flex w-full flex-col items-center justify-center gap-16">
			<div className="space-y-1 text-center">
				<h3 className="text-5xl font-bold text-content-primary text-opacity-100">
					Projetos da Comunidade{" "}
				</h3>
				<p className="mx-auto w-[667px] text-[18px] text-content-tertiary">
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
				className="w-[80%]">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
							<ProjectCard classname="w-[350px]" {...mockData} />
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
