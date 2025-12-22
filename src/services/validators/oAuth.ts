import { z } from "zod"

const discordParamsSchema = z.object({
	action: z.enum(["login", "register"]),
	code: z.string(),
	provider: z.literal("discord")
})

export type TRedirectUrlProps = z.infer<typeof discordParamsSchema>
