import { z } from "zod"

const discordParamsSchema = z.object({
	action: z.enum(["login", "register"]),
	code: z.string(),
	provider: z.literal("discord")
})

export type TRedirectUrlProps = z.infer<typeof discordParamsSchema>

export const payloadSchema = z.object({
	id: z.string(),
	userId: z.string(),
	email: z.string().email().nullable().optional(),
	iat: z.number(),
	exp: z.number()
})

export type TPayloadProps = z.infer<typeof payloadSchema>
