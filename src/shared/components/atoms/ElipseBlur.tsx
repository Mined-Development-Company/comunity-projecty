type ElipseBlurProps = {
	width?: string
	height?: string
	colorCenter?: string
	colorMid?: string
	colorOuter?: string
	className?: string
}

export function ElipseBlur({
	width = "200px",
	height = "250px",
	colorCenter = "rgba(0,255,0,0.6)",
	colorMid = "rgba(0,255,0,0.1)",
	colorOuter = "transparent",
	className = ""
}: ElipseBlurProps) {
	const gradient = `radial-gradient(circle, ${colorCenter} 0%, ${colorMid} 40%, ${colorOuter} 100%)`

	return (
		<span
			className={`absolute z-0 scale-75 rounded-full blur-3xl ${className}`}
			style={{
				width,
				height,
				background: gradient
			}}
		/>
	)
}
