import { type Meta, type StoryObj } from "@storybook/react"

import { Button } from "@/shared/components/atoms/button"
import { DivStories } from "@/shared/components/atoms/divStories"
import { Input } from "@/shared/components/atoms/input/input"
import { Label } from "@/shared/components/atoms/label"
import { SheetClose, SheetDescription, SheetTitle } from "@/shared/components/atoms/sheet"
import { SheetDefault } from "@/shared/components/molecules/sheets/SheetDefault"

const meta: Meta<typeof SheetDefault> = {
	title: "Molecules/SheetDefault",
	component: SheetDefault
}

export default meta

export const Default: StoryObj<typeof SheetDefault> = {
	render: () => (
		<DivStories>
			<SheetDefault
				trigger={<Button variant="outline">Open</Button>}
				header={
					<>
						<SheetTitle>Edit profile</SheetTitle>
						<SheetDescription>
							Make changes to your profile here. Click save when you're done.
						</SheetDescription>
					</>
				}
				content={
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Name
							</Label>
							<Input id="name" value="Pedro Duarte" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">
								Username
							</Label>
							<Input id="username" value="@peduarte" className="col-span-3" />
						</div>
					</div>
				}
				footer={
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				}
			/>
		</DivStories>
	)
}
