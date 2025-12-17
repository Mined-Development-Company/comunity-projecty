import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

import { PrismaClient } from "../../../src/app/generated/prisma/client"

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

export const adapter = new PrismaPg(pool)

export const prisma = new PrismaClient({
	adapter
})
