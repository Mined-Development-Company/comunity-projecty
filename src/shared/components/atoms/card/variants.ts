import { cva, type VariantProps } from "class-variance-authority"

export const variantContent = cva("w-full h-fit flex p-4 [&>header>img]:bg-cover", {
	variants: {
		orientation: {
			vertical: "flex-col [&>header]:has-[img]:p-0",
			horizontal:
				"flex-row space-x-4 [&>header]:items-center [&>footer]:justify-center [&>header]:has-[img]:min-w-[118px] [&>header]:has-[img]:p-0 [&>header>img]:rounded-sm"
		}
	},
	defaultVariants: {
		orientation: "horizontal"
	}
})

export const variantTitle = cva(
	"h-fit font-semibold text-content-primary tracking-tight ",
	{
		variants: {
			size: {
				sm: "text-[16px] leading-[18px]",
				md: "text-[20px]",
				lg: "text-[24px]"
			}
		},
		defaultVariants: {
			size: "sm"
		}
	}
)

export const variantDescription = cva(
	"h-fit text-content-quaternary font-normal text-pretty",
	{
		variants: {
			size: {
				sm: "text-[14px] leading-[16px]",
				md: "text-[16px]",
				lg: "text-[18px]"
			}
		},
		defaultVariants: {
			size: "sm"
		}
	}
)

export type variantContentProps = VariantProps<typeof variantContent>
export type variantTitleProps = VariantProps<typeof variantTitle>
export type variantDescriptionProps = VariantProps<typeof variantDescription>
