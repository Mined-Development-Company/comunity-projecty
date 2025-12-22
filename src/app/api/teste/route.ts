import { NextResponse } from "next/server"

export async function POST(req: Request) {
	try {
		const { code, action } = await req.json()

		if (!code || !action) {
			return NextResponse.json(
				{ error: "Missing required fields: code and action" },
				{ status: 400 }
			)
		}

		return NextResponse.json({ message: "Hello, world!" })
	} catch (error) {
		console.log("error", error)
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
	}
}
