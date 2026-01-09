"use client"

import { Icon } from "@/shared/components/atoms/icon/Icon"

export type CommentItem = {
  authorName: string
  createdAt: string
  content: string
  replies?: CommentItem[]
}

export type AnswerCardProps = {
  authorName: string
  createdAt: string
  likes?: number
  content: string
  comments?: CommentItem[]
}

export function AnswerCard({ authorName, createdAt, likes = 0, content, comments = [] }: AnswerCardProps) {
  return (
    <article className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6">
      <header className="mb-4 flex items-start gap-3">
        <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={`Avatar de ${authorName}`} className="size-9 rounded-full" />
        <div className="flex-1">
          <div className="flex flex-col gap-1 text-xs text-content-tertiary">
            <span className="text-base font-medium text-content-primary">{authorName}</span>
            <time className="text-[12px] text-content-text-quaternary" dateTime="2024-11-03">{createdAt}</time>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-xs">
          <button className="flex rounded-md px-2 py-1">
            <Icon name="Heart" className="size-6 text-content-primary" />
            <span className="ml-1 text-content-quaternary text-base">{likes}</span>
          </button>
        </div>
      </header>


      <div className="space-y-3 text-sm leading-6 text-content-secondary">
        <p>Você pode usar a biblioteca <code className="rounded bg-content-shape-tertiary px-1">date-fns</code> para adicionar horas e minutos à sua data ISO 8601.</p>
        <pre className="overflow-auto rounded-lg border border-content-shape-quaternary bg-content-shape-primary p-3 text-xs"><code>{`import { addHours, addMinutes } from 'date-fns'

const originalDate = new Date('2024-11-03T00:00:00Z')
const withHours = addHours(originalDate, 3)
const finalDate = addMinutes(withHours, 30)

console.log(finalDate.toISOString())`}</code></pre>
      </div>


      <section className="mt-6 space-y-4" aria-label="comentários">
        {comments.map((c, idx) => (
          <div key={idx} className="flex gap-3">
            <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" className="size-8 rounded-full" />
            <div className="flex-1 rounded-lg border border-content-shape-quaternary bg-content-shape-primary/40 p-3">
              <div className="mb-1 text-xs text-content-tertiary">{c.authorName} • {c.createdAt}</div>
              <div className="space-y-2 text-sm text-content-primary">
                <pre className="overflow-auto rounded-lg border border-content-shape-quaternary bg-content-shape-primary p-3 text-xs"><code>{`import { addHours, addMinutes } from 'date-fns'

const originalDate = new Date('2024-11-03T00:00:00Z')
const withHours = addHours(originalDate, 3)
const finalDate = addMinutes(withHours, 30)

console.log(finalDate.toISOString())`}</code></pre>
              </div>

              {c.replies && c.replies.length > 0 && (
                <div className="mt-3 space-y-3 border-l border-content-shape-quaternary pl-6">
                  {c.replies.map((r, rIdx) => (
                    <div key={rIdx} className="flex gap-3">
                      <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" className="size-7 rounded-full" />
                      <div className="flex-1 rounded-lg border border-content-shape-quaternary bg-content-shape-primary/40 p-3">
                        <div className="mb-1 text-xs text-content-tertiary">{r.authorName} • {r.createdAt}</div>
                        <div className="space-y-2 text-sm text-content-primary">
                          <pre className="overflow-auto rounded-lg border border-content-shape-quaternary bg-content-shape-primary p-3 text-xs"><code>{`import { addHours, addMinutes } from 'date-fns'

const originalDate = new Date('2024-11-03T00:00:00Z')
const withHours = addHours(originalDate, 3)
const finalDate = addMinutes(withHours, 30)

console.log(finalDate.toISOString())`}</code></pre>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <form className="mt-4" aria-label="adicionar comentário">
        <label htmlFor="comment-1" className="sr-only">Seu comentário</label>
        <textarea id="comment-1" className="w-full rounded-lg border border-content-shape-quaternary bg-content-shape-secondary p-3 text-sm text-content-primary placeholder:text-content-quaternary" rows={3} placeholder="Escreva um comentário." />
        <div className="mt-2 flex justify-end">
          <button type="button" className="rounded-md border border-input-mid px-3 py-2 text-sm">Responder</button>
        </div>
      </form>
    </article>
  )
}
