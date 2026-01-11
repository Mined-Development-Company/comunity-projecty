import type { NextRequest } from "next/server"

import { meController } from "@/services/controllers/me"

import { handleError } from "../utils/handleError"

export async function GET(req: NextRequest) {
	try {
		return await meController(req)
	} catch (error) {
		return handleError(error)
	}
}
