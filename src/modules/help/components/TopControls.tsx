"use client"

import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { InputDefault } from "@/shared/components/molecules/inputs/InputDefault"

type TopControlsProps = {
  className?: string
}

export function TopControls({ className }: TopControlsProps) {
  return (
    <div className={`flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6 ${className ?? ''}`}>
      <div className="flex-1">
        <InputDefault placeholder="Seu placeholder" icon="MagnifyingGlass" iconPosition="left" />
      </div>

      <div className="flex gap-3 self-stretch lg:self-auto">
        <Button variant="outline" className="flex-1 lg:flex-none">
          <Icon name="Books" /> Ver minhas perguntas
        </Button>
        <Button className="flex-1 lg:flex-none">
          <Icon name="Plus" /> Criar pergunta
        </Button>
      </div>
    </div>
  )
}
