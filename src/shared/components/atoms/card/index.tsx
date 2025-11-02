import * as React from "react"

import { cn } from "../../../utils/cn"
import {
	variantContent,
	variantDescription,
	variantTitle,
	type variantContentProps,
	type variantDescriptionProps,
	type variantTitleProps
} from "./variants"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"h-fit rounded-lg border border-content-shape-quaternary bg-content-shape-secondary text-white shadow",
				className
			)}
			{...props}
		/>
	)
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<header
			ref={ref}
			className={cn("flex flex-col space-y-1.5 p-4 pb-0", className)}
			{...props}
		/>
	)
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & variantTitleProps
>(({ size, className, ...props }, ref) => (
	<h3 ref={ref} className={cn(variantTitle({ size }), className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement> & variantDescriptionProps
>(({ size, className, ...props }, ref) => (
	<p ref={ref} className={cn(variantDescription({ size }), className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & variantContentProps
>(({ orientation, className, ...props }, ref) => (
	<div
		ref={ref}
		data-orientation={orientation}
		className={cn(variantContent({ orientation }), className)}
		{...props}
	/>
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
	({ className, ...props }, ref) => (
		<footer ref={ref} className={cn("flex flex-col", className)} {...props} />
	)
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
