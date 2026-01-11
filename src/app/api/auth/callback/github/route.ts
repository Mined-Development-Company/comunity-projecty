import { type NextRequest } from "next/server"

import { callbackGithubController } from "@/services/controllers/oAuth"

export async function GET(req: NextRequest) {
	return await callbackGithubController(req)
}
