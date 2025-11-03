"use client"

import { useState, type ChangeEvent, type ReactNode } from "react"

import { cn } from "@/shared/utils/cn"

import { Input } from "../../atoms/input/input"
import { Label } from "../../atoms/label"

interface Props {
	label?: string
	className?: string
	placeholder?: ReactNode
	classNameInput?: string
	classNameLabel?: string
	classNameImage?: string
}

export function ImageUpload({
	label,
	className,
	placeholder,
	classNameInput,
	classNameLabel,
	classNameImage
}: Props) {
	const [image, setImage] = useState<string | null>(null)

	function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.[0]
		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setImage(reader.result as string)
			}
			reader.readAsDataURL(file)
		} else {
			setImage(null)
		}
	}

	return (
		<div className={cn("relative flex size-full flex-col gap-1.5", className)}>
			{label && (
				<Label htmlFor="image" className={cn("font-bold", classNameLabel)}>
					{label}
				</Label>
			)}

			{!image && (
				<div
					className={cn(
						"flex h-9 w-full flex-1 rounded-md border border-content-shape-quaternary bg-content-shape-secondary px-3 py-2 text-base text-content-primary",
						classNameInput
					)}>
					{placeholder}
				</div>
			)}

			<Input
				className={cn("absolute left-0 top-0 size-full bg-red-500 opacity-0")}
				id="image"
				type="file"
				accept="image/*"
				onChange={handleImageChange}
			/>

			{image && (
				<img
					src={image}
					alt="Preview"
					className={cn(
						"size-full rounded-md border border-content-shape-quaternary bg-content-shape-secondary object-contain",
						classNameImage
					)}
				/>
			)}
		</div>
	)
}
