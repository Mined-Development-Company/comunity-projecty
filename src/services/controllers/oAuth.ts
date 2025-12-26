import { NextRequest, NextResponse } from "next/server"

import { BadRequestError } from "../errors/HttpError"
import {
	callbackDiscordService,	
	refreshTokenService,
	connectDiscordService, 
	connectGithubService,
	callbackGithubService
} from "../services/oAuth"
import type { TRedirectUrlProps } from "../validators/oAuth"

export async function connectController(req: NextRequest) {
	const action = req.nextUrl.searchParams.get("action") as TRedirectUrlProps["action"]
	const provider = req.nextUrl.searchParams.get("provider") as TRedirectUrlProps["provider"]

	if (!action) {
		return NextResponse.json({ error: "Action is required" }, { status: 400 })
	}

	let redirectUrl: string

	if (provider === "discord") {
		redirectUrl = await connectDiscordService(action)
	} else {
		redirectUrl = await connectGithubService("login")
	}

	return NextResponse.redirect(redirectUrl)
}

export async function callbackDiscordController(req: NextRequest) {
	const body = await req.json()

	const { code, action } = body

	if (!code || !action) {
		return NextResponse.json(
			{ error: "Missing required fields: code and action" },
			{ status: 400 }
		)
	}

	const { token, refreshToken } = await callbackDiscordService(code, action)

	const response = NextResponse.json({ message: "conexão bem sucedida" }, { status: 200 })

	response.cookies.set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 15 * 60
	})

	response.cookies.set("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 7 * 24 * 60 * 60
	})

	return response
}

export async function refreshTokenController(req: NextRequest) {
    const refreshTokenCookie = req.cookies.get("refreshToken")?.value
    console.log("refreshTokenCookie", refreshTokenCookie)

    if (!refreshTokenCookie) {
        return new BadRequestError("Refresh token is required")
    }

    const { token, refreshToken } = await refreshTokenService(refreshTokenCookie)

    const response = NextResponse.json(
        { message: "Token refreshed successfully" },
        { status: 200 }
    )

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 15 * 60
    })

    response.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60
    })

    return response
}

export async function callbackGithubController(code: string | null, state: string | null) {	

	if (!code || !state) {
		return NextResponse.json(
			{ error: "Missing required fields: code and action" },
			{ status: 400 }
		)
	}

	const { token, refreshToken } = await callbackGithubService(code)

	const response = NextResponse.json({ message: "conexão bem sucedida" }, { status: 200 })

	response.cookies.set("token", token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 15 * 60
	})

	response.cookies.set("refreshToken", refreshToken, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 7 * 24 * 60 * 60
	})

	return response
}

