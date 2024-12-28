import { cva, type VariantProps } from "class-variance-authority"

export const badgeVariants = cva(
	"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-green-hard text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-blue-hard text-secondary-foreground hover:bg-secondary/80",
				outline: "font-bold leading-4 border border-content-shape-quaternary text-white"
			}
		},
		defaultVariants: {
			variant: "default"
		}
	}
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
