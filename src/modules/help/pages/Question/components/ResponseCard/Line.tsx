import React from "react"

type TProps = {
	height: number
}

export function Line({ height }: TProps) {
	// Define a small radius for the curve at the bottom
	const curveRadius = 10
	const curveSpace = 15
	const verticalLineEnd = height - curveRadius - 1 // So the curve does not get out of container
	const curveEndY = height - 1

	// The curve: come down straight, then curve rightwards
	const d = `
		M17.5 0
		L17.5 ${verticalLineEnd}
		Q17.5 ${curveEndY}, ${17.5 + curveSpace} ${curveEndY}
		L35 ${curveEndY}
	`

	return (
		<svg
			width="50px"
			height={`${height + 6}px`}
			style={{ minHeight: "20px" }}
			viewBox={`0 0 45 ${height}`}
			xmlns="http://www.w3.org/2000/svg">
			<path d={d} stroke="#828282" strokeWidth="1" fill="transparent" />
		</svg>
	)
}
