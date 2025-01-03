import { Badge } from "@/shared/components/atoms/badge"
import { Card } from "@/shared/components/molecules/card"

interface ChallengesCardProps {
	challenges: any // TODO: Importar as Propriedades de CHALLENGE e referenciar o tipo
}

export function ChallengesCard({ challenges }: ChallengesCardProps) {
	return (
		<>
			{challenges?.map(
				({ title, badges, body, thumbnail, createdAt, updateAt }, index) => {
					return (
						<Card
							key={`${createdAt}.${index}${title}.${updateAt}`}
							orientation="horizontal"
							className="w-full space-y-3 p-6"
							title={title}
							badges={badges?.map((content, index) => (
								<Badge key={`${content}-${index}`} variant={"outline"}>
									{content}
								</Badge>
							))}
							description={body}
							image={{ width: 118, ...thumbnail }}
						/>
					)
				}
			)}
		</>
	)
}
