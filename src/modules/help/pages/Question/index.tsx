import data from './data.json'
import { Breadcrumb } from "./components/Breadcrumb"
import { QuestionHeaderCard } from "./components/QuestionHeaderCard"
import { FiltersBar } from "./components/FiltersBar"
import { AnswerCard } from "./components/AnswerCard"
import { YourAnswer } from "./components/YourAnswer"
import { AuthorCard } from "./components/AuthorCard"
import { DonateCard } from "./components/DonateCard"

export default function QuestionPage() {
  const { question, answers, user } = data as any
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumb />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Esquerda */}
          <section className="md:col-span-8 lg:col-span-9 space-y-6">
            <QuestionHeaderCard
              title={question.title}
              description={question.description}
              answersCount={question.answersCount}
              bestAnswersCount={question.bestAnswersCount}
            />
            <FiltersBar />
            <section className="space-y-6" aria-label="lista de respostas">

              {/* Essa parte aqui ficou uma bosta, outro dia eu ajusto ela, tava pensando em usar o https://www.npmjs.com/package/md-editor-rt */}
              {answers.map((a: any, idx: number) => (
                <AnswerCard
                  key={idx}
                  authorName={a.authorName}
                  createdAt={a.createdAt}
                  likes={a.likes}
                  content={a.content}
                  comments={a.comments}
                />
              ))}
            </section>
            <YourAnswer />
          </section>

          {/* Direita */}
          <aside className="md:col-span-4 lg:col-span-3 space-y-6">
            <AuthorCard user={user} createdAt={question.createdAt} />
            <DonateCard />
          </aside>
        </div>
      </div>
    </main>
  )
}
