"use client"

import { useState, type ReactNode } from "react"

import { cn } from "@/shared/utils/cn"

import Hint, { type HintProps } from "../../atoms/hint"
import { Icon } from "../../atoms/icon/Icon"
import type { iconProps } from "../../atoms/icon/iconType"
import { Label } from "../../atoms/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "../../atoms/select"
import { selectVariants } from "./selectVariants"

export type SelectDefaultProps = {
	icon?: iconProps["name"]
	items: { label: ReactNode; value: string }[]
	hint?: HintProps
	label?: string
	hasHint: boolean
	iconColor?: string
	placeholder?: string
	classTrigger?: string
	classContent?: string
	onValueChange: (value: string) => void
}

export function SelectDefault({
	icon,
	items,
	hint,
	label,
	hasHint = true,
	iconColor = "white",
	placeholder,
	classTrigger,
	classContent,
	onValueChange
}: SelectDefaultProps) {
	const [value, setValue] = useState<string>()

	const variantStyle = selectVariants({
		showPlaceholder: !!value,
		className: classTrigger
	})

	function handleValueChange(value: string) {
		setValue(value)
		onValueChange(value)
	}

	return (
		<Select onValueChange={handleValueChange}>
			<div className="space-y-0.5">
				<div className="flex flex-col gap-2">
					{label && <Label>{label}</Label>}
					<SelectTrigger className={variantStyle}>
						<div className="flex w-full gap-2">
							{icon && <Icon name={icon} size={20} color={iconColor} />}
							<SelectValue placeholder={placeholder} />
						</div>
					</SelectTrigger>
				</div>
				{hasHint && <Hint {...hint} />}
			</div>
			<SelectContent
				className={cn(
					"border-content-shape-quaternary bg-content-shape-secondary",
					classContent
				)}>
				{items.map(({ label, value }) => (
					<SelectItem
						key={value}
						className={cn(
							"text-content-primary focus:bg-content-shape-quaternary focus:text-content-primary"
						)}
						value={value}>
						{label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
