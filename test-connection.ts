import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

import { PrismaClient } from "./src/app/generated/prisma/client"

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

const prisma = new PrismaClient({
	adapter
})

async function main() {
	//change to reference a table in your schema
	const val = await prisma.user.findMany({
		take: 10
	})
	console.log(val)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
