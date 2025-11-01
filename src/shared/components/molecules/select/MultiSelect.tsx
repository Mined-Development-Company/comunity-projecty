"use client"

import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type ReactNode,
	type SetStateAction
} from "react"

import { ChevronDown } from "lucide-react"

import { cn } from "@/shared/utils/cn"

import Hint, { type HintProps } from "../../atoms/hint"
import { Icon } from "../../atoms/icon/Icon"
import { Label } from "../../atoms/label"
import { Popover, PopoverContent, PopoverTrigger } from "../../atoms/popover/popover"
import { selectVariants } from "./selectVariants"

type ISelectProps = {
	max: number
	hint?: HintProps
	items?: { label: ReactNode; value: string }[]
	itemsWithTitle?: { title: string; items: { label: ReactNode; value: string }[] }[]
	label?: string
	hasHint?: boolean
	placeholder?: string
	classTrigger?: string
	className?: string
	selectedValues?: string[]
	onValueChange?: Dispatch<SetStateAction<string[]>>
}

export const MultiSelect = ({
	max,
	hint,
	items = [],
	itemsWithTitle = [],
	label,
	hasHint = true,
	className,
	placeholder,
	classTrigger,
	selectedValues = [],
	onValueChange
}: ISelectProps) => {
	const [values, setValues] = useState<string[]>(selectedValues ?? [])
	const [widthContent, setWidthContent] = useState(0)

	const variantStyle = selectVariants({
		showPlaceholder: values.length !== 0,
		className: classTrigger
	})

	const triggerButtonRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (triggerButtonRef.current) {
			setWidthContent(triggerButtonRef.current.offsetWidth)
		}
	}, [triggerButtonRef, classTrigger])

	const handleSelectChange = (value: string) => {
		const newSelectedValues = values.includes(value)
			? values.filter((selectedValue) => selectedValue !== value)
			: [...values, value]
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		onValueChange && onValueChange(newSelectedValues)
		setValues(newSelectedValues)
	}

	const isOptionSelected = (value: string) => values.includes(value)

	return (
		<Popover>
			<div className={cn("space-y-0.5", className)}>
				<div className="flex flex-col gap-2">
					{label && <Label>{label}</Label>}
					<PopoverTrigger className="flex w-auto flex-1">
						<div className={variantStyle} ref={triggerButtonRef}>
							<div className="flex flex-1 items-end gap-1">
								{values.length !== 0 &&
									(!!items.length || !!itemsWithTitle.length) &&
									items
										.filter(
											(item) =>
												selectedValues.includes(item.value) || values.includes(item.value)
										)
										.slice(0, max)
										.map((item) => (
											<div
												key={item.value}
												className="relative rounded-md border border-input-mid p-[1px] px-2 text-white transition-colors duration-300 hover:bg-red-soft"
												onClick={(e) => {
													e.stopPropagation()
													handleSelectChange(item.value)
												}}>
												{item.label}
											</div>
										))}

								{values.length === 0 && items.length === 0 && <span>{placeholder}</span>}
								{values.length > max && <span>...</span>}
							</div>
							<ChevronDown className="h-4 w-4 opacity-50" />
						</div>
					</PopoverTrigger>
				</div>
				{hasHint && <Hint {...hint} />}
			</div>
			<PopoverContent
				style={{ width: widthContent }}
				onCloseAutoFocus={(e) => e.preventDefault()}>
				{items.map(({ label, value }) => (
					<button
						key={value}
						className="relative flex w-full cursor-default items-center rounded-sm py-1.5 pl-2 pr-8 text-sm text-content-primary outline-none hover:bg-content-shape-tertiary"
						onClick={() => handleSelectChange(value)}>
						{label}
						<span
							className={cn(
								"absolute right-2 hidden h-3.5 w-3.5 items-center justify-center",
								isOptionSelected(value) && "flex"
							)}>
							<Icon name="Check" className="h-4 w-4 text-white" />
						</span>
					</button>
				))}

				<div>
					{itemsWithTitle.map(({ title, items }) => (
						<div key={title}>
							<span className="px-2 text-xs font-semibold text-content-quaternary">
								{title}
							</span>
							{items.map(({ label, value }) => (
								<button
									key={value}
									className="relative flex w-full cursor-default items-center rounded-sm py-1.5 pl-2 pr-8 text-sm text-content-primary outline-none hover:bg-content-shape-tertiary"
									onClick={() => handleSelectChange(value)}>
									{label}
									<span
										className={cn(
											"absolute right-2 hidden h-3.5 w-3.5 items-center justify-center",
											isOptionSelected(value) && "flex"
										)}>
										<Icon name="Check" className="h-4 w-4 text-white" />
									</span>
								</button>
							))}
						</div>
					))}
				</div>
			</PopoverContent>
		</Popover>
	)
}
