"use client"

import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"

import { cn } from "../../../utils/cn"

import { Icon } from "../icon/Icon"
import { buttonVariants } from "./variants"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
		isLoading?: boolean
	}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, children, isLoading, ...props }, ref) => {
		const Comp = asChild ? Slot : "button"
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}>
				{isLoading ? (
					<Icon name="CircleNotch" className="animate-spin text-white" />
				) : (
					children
				)}
			</Comp>
		)
	}
)
Button.displayName = "Button"

export { Button, buttonVariants }
