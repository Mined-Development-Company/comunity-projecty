import { Card } from "@/shared/components/molecules/card"

interface ProjectsProps {
	projects: any // TODO: Importar as Propriedades de PROJECT e referenciar o tipo
}

export function ProjectsCard({ projects }: ProjectsProps) {
	return (
		<>
			{projects?.map(({ title, body, cover, createdAt, updateAt }, index) => {
				return (
					<Card
						key={`${createdAt}.${index}${title}.${updateAt}`}
						orientation="horizontal"
						className="w-full space-y-3 p-6"
						title={title}
						description={body}
						image={{ width: 118, ...cover }}
					/>
				)
			})}
		</>
	)
}
