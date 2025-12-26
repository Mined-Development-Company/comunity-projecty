import type { NextRequest } from "next/server"

import { refreshTokenController } from "@/services/controllers/oAuth"

import { handleError } from "../../utils/handleError"

export async function POST(req: NextRequest) {
	try {
		return await refreshTokenController(req)
	} catch (error) {
		console.log(error)
		return handleError(error)
	}
}
