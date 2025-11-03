import Image from "next/image"

import { Box } from "@/shared/components/atoms/box"

type ImagesProps = {
	data: string[]
}

export function Images({ data }: ImagesProps) {
	return (
		<Box className="space-y-4">
			<h3 className="font-bold text-content-primary">Imagens do Projeto</h3>
			<div className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2">
				{data.map((src, index) => (
					<Image
						key={index}
						className="h-full rounded-lg"
						src={src}
						width={340}
						height={210}
						alt={src}
					/>
				))}
			</div>
		</Box>
	)
}
