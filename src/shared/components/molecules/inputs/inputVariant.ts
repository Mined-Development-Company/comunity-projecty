import { cva } from "class-variance-authority"

export const inputVariant = cva("", {
	variants: {
		iconPosition: {
			left: "pl-8",
			right: "pr-8"
		}
	}
})
