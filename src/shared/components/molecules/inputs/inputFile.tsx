"use client"

import React, { ChangeEvent, HTMLAttributes, useState } from "react"

import { cn } from "@/shared/utils/cn"

import { DivInput } from "../../atoms/input/components/divInput"
import { Input } from "../../atoms/input/input"
import { Label } from "../../atoms/label"

type InputFileProps = HTMLAttributes<HTMLInputElement> & {
	label: string
	placeholder?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
	({ className, label, placeholder, onChange, ...props }, ref) => {
		const [file, setFile] = useState<File | null>(null)

		function handleChange(e: ChangeEvent<HTMLInputElement>) {
			setFile(e.target.files?.[0] ?? null)
			onChange && onChange(e)
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
			</DivInput>
		)
	}
)
InputFile.displayName = "InputFile"

export { InputFile }
