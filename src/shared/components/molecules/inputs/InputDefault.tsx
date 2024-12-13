"use client"

import React, { type ChangeEvent } from "react"

import { cn } from "@/shared/utils/cn"

import Hint, { type HintProps } from "../../atoms/hint"
import { Icon } from "../../atoms/icon/Icon"
import type { iconProps } from "../../atoms/icon/iconType"
import { DivInput } from "../../atoms/input/components/divInput"
import { Input } from "../../atoms/input/input"
import { Label } from "../../atoms/label"
import { inputVariant } from "./inputVariant"

export type InputDefaultProps = React.ComponentPropsWithRef<"input"> & {
	icon?: iconProps["name"]
	hint?: HintProps
	label?: string
	hasHint?: boolean
	iconPosition?: "right" | "left"
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputDefault = React.forwardRef<HTMLInputElement, InputDefaultProps>(
	(
		{ className, label, hint, icon, hasHint = true, iconPosition, onChange, ...props },
		ref
	) => {
		const variantStyle = inputVariant({ iconPosition, className })

		return (
			<DivInput>
				<div className="flex flex-col gap-1.5">
					{label && <Label htmlFor="input">{label}</Label>}
					<Label htmlFor="input" className="relative">
						{iconPosition === "left" && icon && (
							<Icon
								className="absolute left-2 top-1/2 -translate-y-1/2"
								name={icon}
								size={20}
							/>
						)}
						<Input ref={ref} id="input" className={variantStyle} {...props} />
						{iconPosition === "right" && icon && (
							<Icon
								className="absolute right-2 top-1/2 -translate-y-1/2"
								name={icon}
								size={20}
							/>
						)}
					</Label>
				</div>
				{hasHint && <Hint {...hint} />}
			</DivInput>
		)
	}
)

InputDefault.displayName = "InputDefault"

export { InputDefault }
