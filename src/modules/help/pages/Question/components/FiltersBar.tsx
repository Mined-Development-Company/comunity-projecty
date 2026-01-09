"use client"

import { SelectDefault } from "@/shared/components/molecules/select/SelectDefault"

export function FiltersBar() {
  return (
    <nav aria-label="filtros" className="pv-4 flex flex-wrap items-center gap-3">
      <SelectDefault
        items={[
          { label: "Melhores respostas", value: "best" },
          { label: "Mais recentes", value: "recent" },
          { label: "Menos relevantes", value: "less" }
        ]}
        hasHint={false}
        placeholder="Mostrar melhores respostas"
        classTrigger="min-w-[220px] border-input-mid bg-content-shape-secondary"
        classContent="min-w-[220px]"
        onValueChange={() => {}}
      />

      <SelectDefault
        items={[
          { label: "Todas as respostas", value: "all" },
          { label: "Melhores respostas", value: "best" }
        ]}
        hasHint={false}
        placeholder="Mostrar respostas"
        classTrigger="min-w-[200px] border-input-mid bg-content-shape-secondary"
        classContent="min-w-[200px]"
        onValueChange={() => {}}
      />
    </nav>
  )
}
