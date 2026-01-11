import z from "zod"

const meUpdateSchema = z.object({
	name: z.string().min(3).max(50),
	avatarUrl: z.string().url()
})

type TMeUpdateProps = z.infer<typeof meUpdateSchema>

export { meUpdateSchema, type TMeUpdateProps }
