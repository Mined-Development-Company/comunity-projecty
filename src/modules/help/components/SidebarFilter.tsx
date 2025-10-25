"use client"

import React from "react"
import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"

type SidebarFilterProps = {
  className?: string
  tags?: string[]
}

export function SidebarFilter({ className, tags = ["CSS", "JS", "HTML", "C++", "Lua", "Java", "Ruby", "C#"] }: SidebarFilterProps) {
  return (
    <aside className={className}>
      <div className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 lg:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-content-primary">
            <span className="font-semibold">Filtro</span>
          </div>
          <Button variant="outline" className="lg:flex-none">
            <Icon name="Broom" /> Limpar filtro
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
  )
}
