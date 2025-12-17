import React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/components/atoms/tabs"
import { capitalize } from "@/shared/utils/capitalize"
import { cn } from "@/shared/utils/cn"

interface IContent {
	title: string
	description?: string
	children?: React.ReactNode
}

type NavigationTabs = {
	tabs: IContent[]
	classNameTrigger?: string
} & React.ComponentPropsWithoutRef<typeof Tabs>

export const NavigationTabs = React.forwardRef<
	React.ElementRef<typeof Tabs>,
	NavigationTabs
>(({ tabs, className, classNameTrigger, ...props }, ref) => {
	return (
		<Tabs
			ref={ref}
			className={cn("w-fit gap-2 space-y-4 text-base leading-4 text-white", className)}
			{...props}>
			<TabsList>
				{tabs.map(({ title }, index) => {
					return (
						<TabsTrigger
							className={cn(classNameTrigger)}
							key={`${title}-${index}`}
							value={`${title}`}>
							{capitalize(title)}
						</TabsTrigger>
					)
				})}
			</TabsList>
			{tabs.map(({ title, description, children }, index) => (
				<TabsContent key={`${title}-${index}`} value={`${title}`}>
					<p className="text-sm text-muted-foreground">{description}</p>
					<section className="space-y-3">{children}</section>
				</TabsContent>
			))}
		</Tabs>
	)
})
