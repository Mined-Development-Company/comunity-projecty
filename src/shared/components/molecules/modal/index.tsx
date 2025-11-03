import { forwardRef, type ReactNode } from "react"

import {
	DialogActions as ModalActions,
	DialogClose as ModalClose,
	DialogContent as ModalContent,
	DialogDescription as ModalDescription,
	DialogFooter as ModalFooter,
	DialogHeader as ModalHeader,
	DialogOverlay as ModalOverlay,
	DialogPortal as ModalPortal,
	Dialog as ModalRoot,
	DialogTitle as ModalTitle,
	DialogTrigger as ModalTrigger
} from "@/shared/components/atoms/dialog"
import { Icon } from "@/shared/components/atoms/icon/Icon"

type ModalProps = {
	title: string
	description: string
	trigger: ReactNode
	defaultCloseButton?: boolean
	layout?: "WithCloseAction" | "WithCustomActions" | undefined
	customActions?: ReactNode | undefined
} & React.ComponentPropsWithoutRef<typeof ModalContent>

const Modal = forwardRef<React.ElementRef<typeof ModalContent>, ModalProps>(
	(
		{
			title,
			description,
			trigger,
			children,
			defaultCloseButton = false,
			layout = "WithCloseAction",
			customActions,
			...props
		},
		ref
	) => {
		return (
			<ModalRoot modal>
				<ModalTrigger asChild>{trigger}</ModalTrigger>
				<ModalPortal>
					<ModalOverlay />
					<ModalContent
						ref={ref}
						onInteractOutside={(e) => e.preventDefault()}
						{...props}>
						<ModalHeader>
							<ModalTitle>{title}</ModalTitle>
							<ModalDescription>{description}</ModalDescription>
						</ModalHeader>
						{children}
						<ModalFooter>
							{layout === "WithCustomActions" && typeof customActions != "undefined" ? (
								<ModalActions className="flex flex-row flex-wrap">
									{defaultCloseButton && (
										<ModalClose className="absolute right-2.5 top-2.5 inline-flex size-10 justify-end">
											<Icon name="X" size="20" />
											<span className="sr-only">FECHAR</span>
										</ModalClose>
									)}
									{customActions}
								</ModalActions>
							) : (
								<ModalClose className="absolute right-2.5 top-2.5 inline-flex size-10 justify-end">
									<Icon name="X" size="20" />
									<span className="sr-only">FECHAR</span>
								</ModalClose>
							)}
						</ModalFooter>
					</ModalContent>
				</ModalPortal>
			</ModalRoot>
		)
	}
)

export { Modal, ModalClose }
export type { ModalProps }
