"use client"

import { useState } from "react"

import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Input } from "@/shared/components/atoms/input/input"
import { formatCurrency, maskCurrency } from "@/shared/utils/formatCurrency"

export function DonateCard() {
  const [amountMasked, setAmountMasked] = useState<string>("5,00")

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmountMasked(maskCurrency(e.target.value))
  }

  function setPreset(value: number) {
    setAmountMasked(formatCurrency(value))
  }

  return (
    <section className="rounded-xl border border-content-shape-quaternary bg-content-shape-secondary p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-content-primary text-center">Ajude Nossa Comunidade a Crescer!</h2>
      <p className="mt-2 text-sm text-center text-content-secondary">Sua doação mantém nosso site ativo e nossas atualizações chegando.</p>

      <div className="mt-6 flex justify-center">
        <div className="flex w-[140px] justify-around">
          <button type="button" onClick={() => setPreset(5)} aria-label="Doar R$ 5">
            <Icon name="GlobeSimple" className="size-6 text-blue-soft" />
          </button>
          <button type="button" onClick={() => setPreset(10)} aria-label="Doar R$ 10">
            <Icon name="Heart" className="size-6 text-red-soft" />
          </button>
          <button type="button" onClick={() => setPreset(20)} aria-label="Doar R$ 20">
            <Icon name="ArrowsCounterClockwise" className="size-6 text-green-soft" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <label htmlFor="donation-value">R$</label>
        <Input
          id="donation-value"
          type="text"
          inputMode="numeric"
          placeholder="Valor da doação"
          className="flex-1 border-input-mid bg-content-shape-primary text-content-primary"
          value={amountMasked}
          onChange={handleAmountChange}
          aria-label="Valor da doação"
        />
      </div>

      <button className="mt-4 w-full rounded-md bg-green-hard px-3 py-2 text-sm font-bold text-content-primary" type="button">
        Doar
      </button>
      <p className="mt-4 text-center text-xs text-content-tertiary">Agradecemos seu apoio! Juntos, manteremos nossa comunidade forte e atualizada.</p>
    </section>
  )
}
