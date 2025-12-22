import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { handleError } from "@/app/api/utils/handleError"
import { callbackDiscordController } from "@/services/controllers/oAuth"

export async function OPTIONS() {
	return new NextResponse(null, {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Credentials": "true"
		}
	})
}

export async function POST(req: NextRequest) {
	try {
		const response = await callbackDiscordController(req)
		return response
	} catch (error: any) {
		console.error("Error in callback route:", error)
		return handleError(error)
	}
}
