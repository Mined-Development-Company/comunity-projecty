import { NextResponse } from "next/server"

import { validateToken } from "@/services/middleware/validateToken"

import { handleError } from "../utils/handleError"

export async function POST(req: Request) {
	try {
		const { token } = await req.json()

		const decodedToken = await validateToken(token)
		console.log("decodedToken", decodedToken)

		return NextResponse.json({ decodedToken })
	} catch (error) {
		console.log("error", error)
		return handleError(error)
	}
}
