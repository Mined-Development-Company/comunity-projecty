import Link from "next/link"

import type { UserProps } from "@/shared/@types/UserProps"
import { Card } from "@/shared/components/molecules/card"
import { CardInfo } from "@/shared/components/molecules/cardInfo"
import { formatTimestamp } from "@/shared/utils/formatTimestamp"

import type { ProfileProps } from "../../schema/Profile.schema"

interface QuestionsCardProps {
	name: ProfileProps["nickName"] | UserProps["name"]
	avatar: ProfileProps["avatar"] | UserProps["avatar"]
	posts: any // TODO: Importar as Propriedades de POSTS e referenciar o tipo
}

export function QuestionsCard({ name, avatar, posts }: QuestionsCardProps) {
	return (
		<>
			{posts?.map(({ title, body, comments, createdAt, updateAt }, index) => {
				const formattedDate: string = formatTimestamp(
					String(createdAt) ?? "01/01/1999",
					"pt-BR"
				)
				return (
					<Card
						key={`${createdAt}.${index}${title.trim().toLowerCase()}.${updateAt}`}
						orientation="vertical"
						className="w-full space-y-3 p-6"
						title={title}
						description={body}
						footerChildren={
							<section className="flex w-full justify-between">
								<header className="flex items-center space-x-2.5">
									<div className="space-x-1.5 text-sm">
										<span>{comments.length ?? 0}</span>
										<Link href={`/post/${title}#answers`} className="text-blue-light">
											Respostas
										</Link>
									</div>
									<div className="space-x-1.5 text-sm">
										<span>
											{comments.filter((comment) => comment.likes >= 5).length ?? 0}
										</span>
										<Link href={`/post/${title}#answers`} className="text-blue-light">
											Melhores Respostas
										</Link>
									</div>
								</header>
								<footer>
									<CardInfo
										image={`${avatar}`}
										title={`${name}`}
										description={`${formattedDate}`}
										dp="bottom"
										size="sm"
									/>
								</footer>
							</section>
						}
					/>
				)
			})}
		</>
	)
}
