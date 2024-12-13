"use client"

import type { ReactNode } from "react"

import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetTitle,
	SheetTrigger
} from "../../atoms/sheet"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetDefault = (typeof SHEET_SIDES)[number]

interface SheetDefaultProps {
	open?: boolean
	header?: ReactNode
	footer?: ReactNode
	trigger: ReactNode
	content: ReactNode
	defaultOpen?: boolean
	classTrigger?: string
	classNameContent?: string
	accessibilityTitle?: string
	accessibilityDescription?: string
	onOpenChange?: (open: boolean) => void
}

export function SheetDefault({
	open,
	header,
	footer,
	content,
	trigger,
	defaultOpen,
	classTrigger,
	classNameContent,
	accessibilityTitle,
	accessibilityDescription,
	onOpenChange
}: SheetDefaultProps) {
	return (
		<Sheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
			<SheetTrigger className={classTrigger} asChild>
				{trigger}
			</SheetTrigger>
			<SheetContent className={classNameContent}>
				<VisuallyHidden asChild>
					{header ?? (
						<div>
							<SheetTitle>{accessibilityTitle}</SheetTitle>
							<SheetDescription>{accessibilityDescription}</SheetDescription>{" "}
						</div>
					)}
				</VisuallyHidden>
				{content}
				<SheetFooter>{footer}</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
