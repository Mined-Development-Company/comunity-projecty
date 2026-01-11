import type { NextRequest } from "next/server"

import { meUpdateController } from "@/services/controllers/me"

import { handleError } from "../../utils/handleError"

export async function POST(req: NextRequest) {
	try {
		return await meUpdateController(req)
	} catch (error) {
		return handleError(error)
	}
}
