import { z } from "zod"

export const ProfileSchema = z.object({
	id: z.string(),
	userId: z.string(),
	banner: z.string(),
	avatar: z.string(),
	nickName: z.string(),
	description: z.string().optional(),
	social: z
		.object({
			github: z.string().optional(),
			facebook: z.string().optional(),
			instagram: z.string().optional(),
			linkedin: z.string().optional()
		})
		.optional(),
	createdAt: z.any().default(new Date(Date.now()).toISOString()).optional(),
	updateAt: z.any().default(new Date(Date.now()).toISOString()).optional()
})

export type ProfileProps = z.infer<typeof ProfileSchema>
