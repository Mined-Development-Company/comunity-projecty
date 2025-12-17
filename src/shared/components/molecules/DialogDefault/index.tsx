import { type ReactNode } from "react"

import { cn } from "@/shared/utils/cn"

import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from "../../atoms/dialog"

type DialogContentProps = Omit<
	React.ComponentPropsWithoutRef<typeof DialogContent>,
	"children" | "content"
>

interface DialogDefaultProps extends DialogContentProps {
	trigger: ReactNode
	content: ReactNode
	classTrigger?: string
	classContent?: string
	open?: boolean
	onOpenChange?: (open: boolean) => void
	defaultOpen?: boolean
}

export function DialogDefault({
	open,
	trigger,
	content,
	defaultOpen,
	classTrigger,
	classContent,
	onOpenChange,
	className,
	...props
}: DialogDefaultProps) {
	return (
		<Dialog {...props}>
			<DialogTrigger className={classTrigger}>{trigger}</DialogTrigger>
			<DialogOverlay className="z-50 bg-content-shape-primary/75 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
			<DialogContent className={cn("z-50", classContent)}>{content as any}</DialogContent>
		</Dialog>
	)
}
