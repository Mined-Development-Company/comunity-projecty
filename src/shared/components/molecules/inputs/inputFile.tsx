"use client"

import React, { useState, type ChangeEvent, type HTMLAttributes } from "react"

import { cn } from "../../../utils/cn"

import Hint from "../../atoms/hint"
import { DivInput } from "../../atoms/input/components/divInput"
import { Input } from "../../atoms/input/input"
import { Label } from "../../atoms/label"

type InputFileProps = HTMLAttributes<HTMLInputElement> & {
	label: string
	hint?: string
	hasHint?: boolean
	placeholder?: string
	hintClassName?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
	(
		{
			hint,
			hasHint = true,
			className,
			label,
			placeholder,
			hintClassName,
			onChange,
			...props
		},
		ref
	) => {
		const [file, setFile] = useState<File | null>(null)

		function handleChange(e: ChangeEvent<HTMLInputElement>) {
			setFile(e.target.files?.[0] ?? null)

			if (onChange) {
				onChange(e)
			}
		}

		return (
			<DivInput>
				<Label htmlFor="picture">{label}</Label>
				<Label
					htmlFor="picture"
					className={cn(
						"flex h-9 w-full items-center justify-start rounded-md bg-content-shape-secondary px-2",
						!file?.name && "text-content-quaternary",
						className
					)}>
					{file?.name ?? placeholder}
				</Label>
				<Input
					className="hidden"
					ref={ref}
					id="picture"
					type="file"
					{...props}
					onChange={handleChange}
				/>
				{hasHint && <Hint className={hintClassName} text={hint} />}
			</DivInput>
		)
	}
)
InputFile.displayName = "InputFile"

export { InputFile }
