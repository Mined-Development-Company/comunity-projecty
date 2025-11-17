import { forwardRef, type ReactNode } from "react"

import {
	DialogActions,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	Dialog as DialogRoot,
	DialogTitle,
	DialogTrigger
} from "@/shared/components/atoms/dialog"
import { Icon } from "@/shared/components/atoms/icon/Icon"

type DialogProps = {
	title?: string
	description?: string
	trigger: ReactNode
	layout?: "WithCloseAction" | "WithCustomActions" | undefined
	customActions?: ReactNode | undefined
} & React.ComponentPropsWithoutRef<typeof DialogContent>

const Dialog = forwardRef<React.ElementRef<typeof DialogContent>, DialogProps>(
	(
		{
			title,
			description,
			trigger,
			children,
			layout = "WithCloseAction",
			customActions,
			...props
		},
		ref
	) => {
		return (
			<DialogRoot modal={false}>
				<DialogTrigger>{trigger}</DialogTrigger>
				<DialogPortal>
					<DialogOverlay />
					<DialogContent ref={ref} {...props}>
						<DialogHeader>
							<DialogTitle>{title}</DialogTitle>
							<DialogDescription>{description}</DialogDescription>
						</DialogHeader>
						{children}
						<DialogFooter>
							{layout === "WithCustomActions" && typeof customActions != "undefined" ? (
								<DialogActions>{customActions}</DialogActions>
							) : (
								<DialogClose className="absolute right-2.5 top-0 inline-flex  size-10 justify-end">
									{/*Descomentar para mostrar o X*/}
									{/* <Icon name="X" size="20" />
									<span className="sr-only">FECHAR</span> */} 
								</DialogClose>
							)}
						</DialogFooter>
					</DialogContent>
				</DialogPortal>
			</DialogRoot>
		)
	}
)

export { Dialog }
export type { DialogProps }
