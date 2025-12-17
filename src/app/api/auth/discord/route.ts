import { NextRequest, NextResponse } from "next/server"

import { BASE_URL, DISCORD_CLIENT_ID } from "@/shared/env"

export async function GET(req: NextRequest) {
	try {
		const action = req.nextUrl.searchParams.get("action")

		if (!action) {
			return NextResponse.json({ error: "Action is required" }, { status: 400 })
		}

		const params = new URLSearchParams({
			client_id: DISCORD_CLIENT_ID,
			response_type: "code",
			redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`,
			scope: "identify email"
		})

		return NextResponse.redirect(
			new URL(`https://discord.com/oauth2/authorize?${params.toString()}`)
		)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
	}
}
