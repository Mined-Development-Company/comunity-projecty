import { z } from "zod"

export const UserSchema = z.object({
	id: z.string(),
	email: z.string(),
	name: z.string(),
	avatar: z.string().optional(),
	profileId: z.string()
})

export type UserProps = z.infer<typeof UserSchema>
