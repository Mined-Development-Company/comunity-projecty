export interface InteractiveGlobeProps {
	className?: string
	size?: number
	autoRotate?: boolean
	rotationSpeed?: number
	enableZoom?: boolean
	enableRotate?: boolean
}

export interface EarthGlobeProps {
	hovered: boolean
	setHovered: (hovered: boolean) => void
}
