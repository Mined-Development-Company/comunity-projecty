export type QuestionCardProps = {
  title: string
  description: string
  answersCount: number
  bestAnswersCount: number
}

export function QuestionHeaderCard({ title, description, answersCount, bestAnswersCount }: QuestionCardProps) {
  return (
    <div>
      <h1 className="mb-4 mt-6 font-bold text-2xl text-content-primary">Pergunta</h1>

      <article className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6 md:p-8">
        <header className="mb-4">

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-2 text-sm text-content-secondary">{description}</p>
        </header>
        <footer className="mt-4 flex flex-wrap items-center gap-3 text-xs text-content-tertiary justify-end">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-content-secondary">{answersCount}</span>
            <button className="text-blue-soft">Respostas</button>
            <span className="text-content-secondary">{bestAnswersCount}</span>
            <button className="text-blue-soft">Melhores respostas</button>
          </div>
        </footer>
      </article>
    </div>
  )
}
