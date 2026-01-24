"use client"

import { Breadcrumb } from "@/shared/components/molecules/breadcrumb"
import { SelectDefault } from "@/shared/components/molecules/select/SelectDefault"

import { AnswerCard } from "./components/AnswerCard"
import { AuthorCard } from "./components/AuthorCard"
import { DonateCard } from "./components/DonateCard"
import { QuestionHeaderCard } from "./components/QuestionHeaderCard"
import { YourAnswer } from "./components/YourAnswer"
import data from "./data.json"

export default function QuestionPage() {
	const { question, user } = data as any

	const paths = [
		{ title: "Lista de perguntas", href: "/help" },
		{ title: "Pergunta", href: "" }
	]

	return (
		<main className="min-h-screen">
			<div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
				<Breadcrumb paths={paths} />

				<div className="grid grid-cols-1 gap-6 md:grid-cols-12">
					{/* Esquerda */}
					<section className="space-y-6 md:col-span-8 lg:col-span-9">
						<QuestionHeaderCard
							title={question.title}
							description={question.description}
							answersCount={question.answersCount}
							bestAnswersCount={question.bestAnswersCount}
						/>

						{/* filter */}
						<div
							aria-label="filtros"
							className="pv-4 flex flex-wrap items-center justify-end gap-3">
							<SelectDefault
								items={[
									{ label: "Mais curtidas", value: "best" },
									{ label: "Mais recentes", value: "recent" },
									{ label: "Melhor para autor", value: "author" }
								]}
								hasHint={false}
								placeholder="Mostrar melhores respostas"
								classTrigger="min-w-[220px] border-input-mid bg-content-shape-secondary"
								classContent="min-w-[220px]"
								onValueChange={() => {}}
							/>
						</div>

						<section className="space-y-6" aria-label="lista de respostas">
							{/* Essa parte aqui ficou uma bosta, outro dia eu ajusto ela, tava pensando em usar o https://www.npmjs.com/package/md-editor-rt */}
							{/* {answers.map((a: any, idx: number) => ( */}
							<AnswerCard
							// key={idx}
							// authorName={a.authorName}
							// createdAt={a.createdAt}
							// likes={a.likes}
							// content={a.content}
							// comments={a.comments}
							/>
							{/* // ))} */}
						</section>
						<YourAnswer />
					</section>

					{/* Direita */}
					<aside className="space-y-6 md:col-span-4 lg:col-span-3">
						<AuthorCard user={user} createdAt={question.createdAt} />
						<DonateCard />
					</aside>
				</div>
			</div>
		</main>
	)
}
