import { cva } from "class-variance-authority"

export const selectVariants = cva(
	"flex h-9 w-[180px] items-center justify-between whitespace-nowrap rounded-md border border-content-shape-quaternary bg-content-shape-secondary px-2 py-2 text-sm [&>div>span]:text-content-primary shadow-sm ring-offset-background placeholder:text-muted-foreground focus:ring-1 focus:ring-white disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 [&>svg]:text-content-primary",
	{
		variants: {
			showPlaceholder: {
				true: "",
				false: "[&>div>span]:text-content-tertiary"
			}
		}
	}
)
