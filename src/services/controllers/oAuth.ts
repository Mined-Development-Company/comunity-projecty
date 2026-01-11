import { NextRequest, NextResponse } from "next/server"

import { BASE_URL } from "@/shared/env"

import { BadRequestError } from "../errors/HttpError"
import {
	callbackDiscordService,
	callbackGithubService,
	connectDiscordService,
	connectGithubService,
	refreshTokenService
} from "../services/oAuth"
import type { TRedirectUrlProps } from "../validators/oAuth"

export async function connectController(req: NextRequest) {
	const action = req.nextUrl.searchParams.get("action") as TRedirectUrlProps["action"]
	const provider = req.nextUrl.searchParams.get(
		"provider"
	) as TRedirectUrlProps["provider"]

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
	try {
		const code = req.nextUrl.searchParams.get("code")
		const action = req.nextUrl.searchParams.get("action") as TRedirectUrlProps["action"]

		if (!code || !action) {
			return NextResponse.json(
				{ error: "Missing required fields: code and action" },
				{ status: 400 }
			)
		}

		const { token, refreshToken, user } = await callbackDiscordService(code, action)

		const response = NextResponse.redirect(new URL(`${BASE_URL}`))

		response.cookies.set("user", JSON.stringify(user), {
			httpOnly: false,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/"
		})

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
	} catch (error: any) {
		console.log(error)
		return NextResponse.redirect(`http://localhost:3000/login?error=${error.message}`)
	}
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

export async function callbackGithubController(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams

	const code = searchParams.get("code")
	const state = searchParams.get("state")

	if (!code || !state) {
		return NextResponse.json(
			{ error: "Missing required fields: code and action" },
			{ status: 400 }
		)
	}

	const stateBuffer = state
		? JSON.parse(Buffer.from(state, "base64").toString("utf-8")).action
		: null

	try {
		const { token, refreshToken, user } = await callbackGithubService(code)

		const response = NextResponse.redirect(new URL(`${BASE_URL}`))

		response.cookies.set("user", JSON.stringify(user), {
			httpOnly: false,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/"
		})

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
	} catch (error: any) {
		console.log(error)
		return NextResponse.redirect(
			`http://localhost:3000/${stateBuffer || "login"}?error=${error.message}`
		)
	}
}
