import * as PhosphorsIcons from "@phosphor-icons/react"

export type PhosphorIconsKey = keyof typeof PhosphorsIcons

export type iconProps = PhosphorsIcons.IconProps & {
	name: PhosphorIconsKey
}
