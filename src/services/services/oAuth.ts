import getUserData from "@/app/api/auth/callback/discord/getUserData"
import type { PrismaClient } from "@/app/generated/prisma"
import * as runtime from "@/app/generated/prisma/runtime/client"
import {
	BASE_URL,
	DISCORD_CLIENT_ID,
	DISCORD_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_SECRET
} from "@/shared/env"
import { prisma } from "@/shared/libs/prisma"
import { generateTokens } from "@/shared/utils/jwt"

import { BadRequestError, ServerError, UnauthorizedError } from "../errors/HttpError"
import { validateToken } from "../middleware/validateToken"
import type { TRedirectUrlProps } from "../validators/oAuth"

export async function connectDiscordService(action: TRedirectUrlProps["action"]) {
	const params = new URLSearchParams({
		client_id: DISCORD_CLIENT_ID,
		response_type: "code",
		redirect_uri: `${BASE_URL.replace(/\/$/, "")}/api/auth/callback/discord?action=${action}`,
		scope: "identify email"
	})

	const redirectUrl = new URL(`https://discord.com/oauth2/authorize?${params.toString()}`)

	return redirectUrl.href
}

export async function connectGithubService(action: TRedirectUrlProps["action"]) {
	const state = JSON.stringify({ action })

	const params = new URLSearchParams({
		client_id: GITHUB_CLIENT_ID,
		state: Buffer.from(state).toString("base64")
	})

	const redirectUrl = new URL(
		`https://github.com/login/oauth/authorize?${params.toString()}`
	)

	return redirectUrl.href
}

export async function callbackDiscordService(
	code: string,
	action: TRedirectUrlProps["action"]
) {
	console.log(
		"redirect_uri:",
		`${BASE_URL.replace(/\/$/, "")}/api/auth/callback/discord?action=${action}`
	)

	const response = await fetch(`https://discord.com/api/oauth2/token`, {
		method: "POST",
		body: new URLSearchParams({
			client_id: DISCORD_CLIENT_ID,
			client_secret: DISCORD_SECRET,
			grant_type: "authorization_code",
			code: code,
			scope: "identify email",
			redirect_uri: `${BASE_URL.replace(/\/$/, "")}/api/auth/callback/discord?action=${action}`
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	})

	if (response.status !== 200) {
		const data = await response.json()

		throw new BadRequestError(data.error_description || data.error)
	}

	const data = await response.json()

	const discordUser = await getUserData(data.access_token)

	if (!discordUser) {
		throw new UnauthorizedError("Discord User data not found")
	}

	const user = await prisma.user.findFirst({
		where: {
			email: discordUser.email,
			OR: [
				{
					accounts: {
						some: {
							provider: "DISCORD",
							providerAccountId: discordUser.id
						}
					}
				}
			]
		}
	})

	let token: string | undefined
	let refreshToken: string | undefined
	let userData:
		| { name: string | null; avatarUrl: string | null; email: string | null }
		| undefined

	if (!user || user === null || user === undefined) {
		await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					email: discordUser.email,
					name: discordUser.username,
					avatarUrl: `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`
				}
			})

			userData = {
				name: discordUser.username,
				avatarUrl: createdUser.avatarUrl,
				email: discordUser.email
			}

			await tx.account.create({
				data: {
					userId: createdUser.id,
					provider: "DISCORD",
					providerAccountId: discordUser.id
				}
			})

			const { newToken, newRefreshToken } = await generateSession(
				createdUser.id,
				createdUser.email,
				tx
			)

			token = newToken
			refreshToken = newRefreshToken
		})
	} else {
		const { newToken, newRefreshToken } = await generateSession(user.id, user.email)

		userData = {
			name: user.name,
			avatarUrl: user.avatarUrl,
			email: user.email
		}

		token = newToken
		refreshToken = newRefreshToken
	}

	if (!token || !refreshToken || token === "" || refreshToken === "") {
		throw new ServerError()
	}

	return { token, refreshToken, user: userData }
}

export async function callbackGithubService(code: string) {
	const tokenRes: any = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: {
			Accept: "application/json"
		},
		body: new URLSearchParams({
			client_id: GITHUB_CLIENT_ID,
			client_secret: GITHUB_SECRET,
			code: code,
			redirect_uri: `${BASE_URL.replace(/\/$/, "")}/api/auth/callback/github?provider=github`
		})
	})

	const tokenJson = await tokenRes.json()
	const accessToken = tokenJson.access_token as string | undefined

	if (!accessToken) {
		throw new UnauthorizedError("Github User data not found")
	}

	const res = await fetch("https://api.github.com/user", {
		headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/vnd.github+json"
		}
	})

	const githubUser = await res.json()

	const user = await prisma.user.findFirst({
		where: {
			email: githubUser.email,
			OR: [
				{
					accounts: {
						some: {
							provider: "GITHUB",
							providerAccountId: githubUser.id.toString()
						}
					}
				}
			]
		}
	})

	let token: string | undefined
	let refreshToken: string | undefined
	let userData:
		| { name: string | null; avatarUrl: string | null; email: string | null }
		| undefined

	if (!user || user === null || user === undefined) {
		await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					email: githubUser.email,
					name: githubUser.name,
					avatarUrl: githubUser.avatar_url
				}
			})

			userData = {
				name: githubUser.name,
				avatarUrl: createdUser.avatarUrl,
				email: githubUser.email
			}

			await tx.account.create({
				data: {
					userId: createdUser.id,
					provider: "GITHUB",
					providerAccountId: githubUser.id.toString()
				}
			})

			const { newToken, newRefreshToken } = await generateSession(
				createdUser.id,
				createdUser.email,
				tx
			)

			token = newToken
			refreshToken = newRefreshToken
		})
	} else {
		const { newToken, newRefreshToken } = await generateSession(user.id, user.email)

		userData = {
			name: user.name,
			avatarUrl: user.avatarUrl,
			email: user.email
		}

		token = newToken
		refreshToken = newRefreshToken
	}

	if (!token || !refreshToken || token === "" || refreshToken === "") {
		throw new ServerError()
	}

	return { token, refreshToken, user: userData }
}

export async function refreshTokenService(refreshToken: string) {
	const decodedToken = await validateToken(refreshToken)

	const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
		decodedToken.id,
		decodedToken.userId,
		decodedToken.email
	)

	const session = await prisma.session.findFirst({
		where: {
			id: decodedToken.id
		}
	})

	if (!session) {
		throw new UnauthorizedError("Session not found")
	}

	await prisma.session.update({
		where: {
			id: decodedToken.id
		},
		data: {
			sessionToken: newToken,
			sessionRefreshToken: newRefreshToken,
			expiresAt: new Date(Date.now() + 1000 * 60 * 15)
		}
	})

	return { token: newToken, refreshToken: newRefreshToken }
}

async function generateSession(
	userId: string,
	userEmail?: string | null,
	tx?: Omit<PrismaClient, runtime.ITXClientDenyList>
) {
	const p = tx ?? prisma

	// Cria uma nova sessão inicial vazia
	const newSession = await p.session.create({
		data: {
			userId: userId,
			sessionToken: "",
			sessionRefreshToken: "",
			expiresAt: new Date(Date.now() + 1000 * 60 * 15)
		}
	})

	// Gera os tokens usando informações apropriadas
	const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
		newSession.id,
		userId,
		userEmail
	)

	// Atualiza a sessão nova criada com os tokens
	await p.session.update({
		where: {
			id: newSession.id
		},
		data: {
			sessionToken: newToken,
			sessionRefreshToken: newRefreshToken
		}
	})

	if (!newToken || !newRefreshToken) {
		throw new ServerError()
	}

	return { newToken, newRefreshToken }
}
