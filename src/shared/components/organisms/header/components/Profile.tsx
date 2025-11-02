"use client"

import React, { useEffect, useRef, useState, type ReactNode } from "react"

import { cn } from "../../../../utils/cn"
import { Icon } from "../../../atoms/icon/Icon"
import { Popover, PopoverContent, PopoverTrigger } from "../../../atoms/popover/popover"
import { AvatarInfo } from "../../../molecules/cardInfo"

export type ProfileProps = {
	name: string
	avatar: string
	content: ReactNode
}

export default function Profile({ avatar, name, content }: ProfileProps) {
	const [open, setOpen] = useState(false)

	const [widthContent, setWidthContent] = useState(0)

	const triggerButtonRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (triggerButtonRef.current) {
			setWidthContent(triggerButtonRef.current.offsetWidth)
		}
	}, [])

	return (
		<Popover open={open} onOpenChange={(open) => setOpen(open)}>
			<PopoverTrigger className="hidden lg:block" ref={triggerButtonRef}>
				<div className="flex items-center justify-center gap-2">
					<AvatarInfo image={avatar} name={name} description="Usuário" />
					<Icon
						name="CaretDown"
						color="white"
						size={20}
						className={cn("transition-all duration-500", open && "rotate-180")}
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent className="h-fit" style={{ width: widthContent, height: "fit" }}>
				{content}
			</PopoverContent>
		</Popover>
	)
}
