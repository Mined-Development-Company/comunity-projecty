import { NextRequest } from "next/server"

import { connectController } from "@/services/controllers/oAuth"
import { handleError } from "@/app/api/utils/handleError"

export async function GET(req: NextRequest) {
	try {
		return await connectController(req)
	} catch (error) {
		console.log(error)
		return handleError(error)
	}
}
