import { Box } from "../../../../../shared/components/atoms/box"

type AboutProps = {
	title: string
	description: string
}

export function About({ title, description }: AboutProps) {
	return (
		<Box className="w-full space-y-6">
			<h1 className="text-xl font-bold text-content-primary md:text-2xl">{title}</h1>
			<div className="space-y-3">
				<h3 className="font-bold text-content-primary">Sobre o Projeto</h3>{" "}
				<div
					className="text-sm text-content-quaternary"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
		</Box>
	)
}
