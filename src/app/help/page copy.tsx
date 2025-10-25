import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"
import { AvatarDefault } from "@/shared/components/molecules/avatars/AvatarDefault"

export default function HelpPage() {
  // Apenas layout/HTML estático conforme solicitado
  const tags = ["CSS", "JS", "HTML", "C++", "Lua", "Java", "Ruby", "C#"]

  return (
    <main className="container m-auto px-4 py-6 lg:px-[7.5rem] lg:py-10">
      {/* Top controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex-1">
          <InputDefault
            placeholder="Seu placeholder"
            icon="MagnifyingGlass"
            iconPosition="left"
          />
        </div>

        <div className="flex gap-3 self-stretch lg:self-auto">
          <Button variant="outline" className="flex-1 lg:flex-none">
            <Icon name="Notebook" /> Ver minhas perguntas
          </Button>
          <Button className="flex-1 lg:flex-none">
            <Icon name="Plus" /> Criar pergunta
          </Button>
        </div>
      </div>

      {/* Content grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-12">
        {/* Sidebar filter */}
        <aside className="order-2 lg:order-1 lg:col-span-3">
          <div className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 lg:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-content-primary">
                <Icon name="SlidersHorizontal" size={18} />
                <span className="font-semibold">Filtro</span>
              </div>
              <Button variant="outline" size="sm" className="h-8 px-3">
                Limpar filtro
              </Button>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-content-secondary">Tag</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    className="rounded-md border border-input-mid bg-content-shape-secondary px-3 py-1.5 text-xs font-medium text-content-primary hover:bg-content-shape-quaternary"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Questions list */}
        <section className="order-1 space-y-6 lg:order-2 lg:col-span-9">
          {[1, 2, 3, 4].map((i) => (
            <article
              key={i}
              className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-content-primary sm:text-xl">
                Como formatar datas em ISO 8601 adicionando horas e minutos em JavaScript?
              </h2>

              <p className="mt-2 text-sm leading-6 text-content-secondary">
                Estou trabalhando em um projeto que exige que eu manipule datas no formato ISO 8601 e adicione horas e minutos específicos a elas. Atualmente, estou usando a biblioteca date-fns para trabalhar com datas, mas …
              </p>

              <div className="mt-4 flex items-end justify-between gap-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-content-secondary">8</span>
                  <button className="text-blue-soft">Respostas</button>
                  <span className="text-content-secondary">2</span>
                  <button className="text-blue-soft">Melhores respostas</button>
                </div>

                <div className="flex items-center gap-3">
                  <AvatarDefault
                    size="xs"
                    src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=80&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-content-primary">
                      Nome do usuário
                    </p>
                    <p className="text-xs text-content-tertiary">Oct 30 at 22:28</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
