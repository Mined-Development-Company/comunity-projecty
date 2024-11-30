import { cva } from "class-variance-authority"

export const variantAvatar = cva(
	"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
	{
		variants: {
			size: {
				xs: "w-8 h-8",
				sm: "w-10 h-10",
				md: "w-16 h-16",
				lg: "w-24 h-24"
			}
		}
	}
)
