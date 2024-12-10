"use client"

export function ButtonSideBar({ onClick }: { onClick: () => void }) {
	return (
		<button
			className="flex h-10 w-11 cursor-pointer flex-col justify-center space-y-1 lg:hidden"
			onClick={onClick}>
			<div
				className={
					"h-1 w-full rounded bg-content-primary transition-transform duration-300"
				}
			/>
			<div
				className={
					"h-1 w-full rounded bg-content-primary transition-opacity duration-300"
				}
			/>
			<div
				className={
					"h-1 w-full rounded bg-content-primary transition-transform duration-300"
				}
			/>
		</button>
	)
}
