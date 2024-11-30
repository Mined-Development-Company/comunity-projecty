import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-content-primary font-medium tracking-wide",
	{
		variants: {
			variant: {
				default: "bg-green-hard hover:bg-green-hard/90",
				secondary:
					"bg-content-shape-secondary hover:bg-content-shape-secondary/80 border border-content-shape-quaternary",
				outline:
					"border border-input-mid bg-transparent hover:bg-content-shape-quaternary",
				"outline-green": "border border-green-hard hover:bg-content-shape-secondary",
				ghost: "hover:bg-content-shape-quaternary",
				link: "text-blue-soft underline-offset-4 hover:underline"
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3",
				lg: "h-10 rounded-md px-8"
			}
		},
		defaultVariants: {
			variant: "default",
			size: "default"
		}
	}
)
