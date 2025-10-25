"use client"

import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"

export type QuestionCardProps = {
  title: string
  excerpt: string
  answersCount: number
  bestAnswersCount: number
  userName: string
  userAvatarSrc: string
  date: string
}

export function QuestionCard({ title, excerpt, answersCount, bestAnswersCount, userName, userAvatarSrc, date }: QuestionCardProps) {
  return (
    <article className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-content-primary sm:text-xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-content-secondary">{excerpt}</p>
      <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-content-secondary">{answersCount}</span>
          <button className="text-blue-soft">Respostas</button>
          <span className="text-content-secondary">{bestAnswersCount}</span>
          <button className="text-blue-soft">Melhores respostas</button>
        </div>
        <div className="flex items-center gap-3">
          <AvatarDefault size="xs" src={userAvatarSrc} />
          <div className="leading-tight">
            <p className="text-xs font-semibold text-content-primary">{userName}</p>
            <p className="text-xs text-content-tertiary">{date}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

