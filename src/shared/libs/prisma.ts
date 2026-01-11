import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

import { PrismaClient } from "@/app/generated/prisma"

// Quando usando adapter-pg, devemos usar a conexão direta (DIRECT_URL)
const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL

if (!connectionString) {
	throw new Error(
		"Por favor, defina DATABASE_URL ou DIRECT_URL nas variáveis de ambiente"
	)
}

const pool = new Pool({
	connectionString
})

const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({
	adapter
})
