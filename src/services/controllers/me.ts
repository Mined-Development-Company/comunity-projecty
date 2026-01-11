import { NextResponse, type NextRequest } from "next/server"

import { BadRequestError, UnauthorizedError } from "../errors/HttpError"
import { meService, meUpdateService } from "../services/me"
import { meUpdateSchema } from "../validators/me"

export async function meController(req: NextRequest) {
	const token = req.cookies.get("token")?.value

	if (!token) {
		return new UnauthorizedError("Token is required")
	}

	const me = await meService(token)

	return NextResponse.json(me, { status: 200 })
}

export async function meUpdateController(req: NextRequest) {
	const token = req.cookies.get("token")?.value

	if (!token) {
		return new UnauthorizedError("Token is required")
	}

	const body = await req.json()

	if (!meUpdateSchema.safeParse(body).success) {
		return new BadRequestError("Invalid body")
	}

	const message = await meUpdateService(token, body)

	return NextResponse.json({ message }, { status: 200 })
}
