import { NextResponse } from "next/server"

import { HttpError } from "@/services/errors/HttpError"

export function handleError(error: unknown): NextResponse {
	if (error instanceof HttpError) {
		return NextResponse.json({ error: error.message }, { status: error.statusCode })
	}

	return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
}

