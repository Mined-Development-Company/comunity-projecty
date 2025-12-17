import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

import { PrismaClient } from "./src/app/generated/prisma/client"

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
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
