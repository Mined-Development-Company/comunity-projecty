"use client"


import { Icon } from "@/shared/components/atoms/icon/Icon";

export type AuthorCardProps = {
  name: string;
  socialLinkedin?: string;
  socialGithub?: string;
  socialTwitter?: string;
  socialFacebook?: string;
  socialInstagram?: string;
  questionsCount?: number;
  answersCount?: number;
};

export function AuthorCard({ user, createdAt }: { user: AuthorCardProps, createdAt: string }) {
  return (
    <div>
      <div className="flex flex-row justify-between items-end">
        <h1 className="mb-4 mt-6 font-bold text-2xl text-content-primary">Enviado por</h1>
        <div className="mb-4 mt-6 text-xs text-content-quaternary">{createdAt}</div>
      </div>
      <section className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6">

        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar do autor" className="size-12 rounded-full" />
          <div>
            <div className="flex flex-col justify-between">
              <div className="text-base font-medium mt-2 mb-2">{user.name}</div>
              <div className="flex">
                {user.socialLinkedin && (
                  <a href={user.socialLinkedin} target="_blank" rel="noopener noreferrer" className="mr-2 text-content-quaternary hover:text-blue-soft">
                    <Icon name="LinkedinLogo" className="size-5" />
                  </a>
                )}
                {user.socialGithub && (
                  <a href={user.socialGithub} target="_blank" rel="noopener noreferrer" className="mr-2 text-content-quaternary hover:text-blue-soft">
                    <Icon name="GithubLogo" className="size-5" />
                  </a>
                )}
                {user.socialTwitter && (
                  <a href={user.socialTwitter} target="_blank" rel="noopener noreferrer" className="mr-2 text-content-quaternary hover:text-blue-soft">
                    <Icon name="XLogo" className="size-5" />
                  </a>
                )}
                {user.socialFacebook && (
                  <a href={user.socialFacebook} target="_blank" rel="noopener noreferrer" className="mr-2 text-content-quaternary hover:text-blue-soft">
                    <Icon name="FacebookLogo" className="size-5" />
                  </a>
                )}
                {user.socialInstagram && (
                  <a href={user.socialInstagram} target="_blank" rel="noopener noreferrer" className="mr-2 text-content-quaternary hover:text-blue-soft">
                    <Icon name="InstagramLogo" className="size-5" />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>
        <div className="mt-4 flex justify-between">
          <div className="text-sm text-content-tertiary">
            <b className="font-bold text-white">{user.questionsCount}</b> perguntas
          </div>
          <div className="text-sm text-content-tertiary">
            <b className="font-bold text-white">{user.answersCount}</b> respostas
          </div>
        </div>
      </section>
    </div>
  )
}
