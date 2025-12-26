import { callbackGithubController } from "@/services/controllers/oAuth"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
    
  const code = searchParams.get("code")
  const state = searchParams.get("state")  
  const stateBuffer = state ? JSON.parse(Buffer.from(state, "base64").toString("utf-8")).action : null

  try {    
    const response = await callbackGithubController(code, stateBuffer)
    return response
  } catch (error: any) {
    console.error("Error in callback route:", error)
    return NextResponse.redirect(`http://localhost:3000/${stateBuffer ? stateBuffer : "login"}?error=callback_error`)
  }
}

