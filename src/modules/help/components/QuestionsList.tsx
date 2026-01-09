"use client"

import { QuestionCard } from "./QuestionCard"

type QuestionsListProps = {
  className?: string
}

export function QuestionsList({ className }: QuestionsListProps) {
  const items = [1, 2, 3, 4].map((i) => ({
    id: i,
    title: "Como formatar datas em ISO 8601 adicionando horas e minutos em JavaScript?",
    excerpt:
      "Estou trabalhando em um projeto que exige que eu manipule datas no formato ISO 8601 e adicione horas e minutos específicos a elas. Atualmente, estou usando a biblioteca date-fns para trabalhar com datas, mas …",
    answersCount: 8,
    bestAnswersCount: 2,
    userName: "Nome do usuário",
    userAvatarSrc:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Oct 30 at 22:28"
  }))

  return (
    <section className={`space-y-6 ${className ?? ''}`}>
      {items.map((it) => (
        <QuestionCard key={it.id} {...it} />
      ))}
    </section>
  )
}
