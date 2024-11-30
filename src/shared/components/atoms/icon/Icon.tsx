import { type FunctionComponent } from "react"

import * as PhosphorsIcons from "@phosphor-icons/react"

import { type iconProps } from "./iconType"

export function Icon({ name, ...props }: iconProps) {
	const iconComponent = PhosphorsIcons[name]

	const Icon = iconComponent as FunctionComponent

	return Icon ? <Icon {...props} /> : null
}
