import { cva } from "class-variance-authority"

export const variantTitle = cva("font-semibold text-content-primary", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-2xl"
		}
	}
})

export const variantDescription = cva("text-content-quaternary", {
	variants: {
		size: {
			xs: "text-[.625rem]",
			sm: "text-xs",
			md: "text-xs",
			lg: "text-sm"
		}
	}
})
