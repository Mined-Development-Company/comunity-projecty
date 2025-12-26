import getUserData from "@/app/api/auth/callback/discord/getUserData"
import { BASE_URL, DISCORD_CLIENT_ID, DISCORD_SECRET, GITHUB_CLIENT_ID, GITHUB_SECRET } from "@/shared/env"
import { prisma } from "@/shared/libs/prisma"
import { generateTokens } from "@/shared/utils/jwt"

import { BadRequestError, ServerError, UnauthorizedError } from "../errors/HttpError"
import type { TRedirectUrlProps } from "../validators/oAuth"

export async function connectDiscordService(action: TRedirectUrlProps["action"]) {
	const params = new URLSearchParams({
		client_id: DISCORD_CLIENT_ID,
		response_type: "code",
		redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`,
		scope: "identify email"
	})

	const redirectUrl = new URL(`https://discord.com/oauth2/authorize?${params.toString()}`)

	return redirectUrl.href
}

export async function connectGithubService(action: TRedirectUrlProps["action"]) {
	const state = JSON.stringify({ action })

	const params = new URLSearchParams({
		client_id: GITHUB_CLIENT_ID,
		state: Buffer.from(state).toString("base64"),
	})

	const redirectUrl = new URL(`https://github.com/login/oauth/authorize?${params.toString()}`)

	return redirectUrl.href
}

export async function callbackDiscordService(
	code: string,
	action: TRedirectUrlProps["action"]
) {
	const response = await fetch(`https://discord.com/api/oauth2/token`, {
		method: "POST",
		body: new URLSearchParams({
			client_id: DISCORD_CLIENT_ID,
			client_secret: DISCORD_SECRET,
			grant_type: "authorization_code",
			code: code,
			scope: "identify email",
			redirect_uri: `${BASE_URL.replace(/\/$/, "")}/${action}?provider=discord`
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

	if (user === null || user === undefined) {
		await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					email: discordUser.email,
					name: discordUser.username,
					avatarUrl: discordUser.avatar
				}
			})

			await tx.account.create({
				data: {
					userId: createdUser.id,
					provider: "DISCORD",
					providerAccountId: discordUser.id
				}
			})

			const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
				createdUser.id,
				createdUser.email
			)

			await tx.session.create({
				data: {
					userId: createdUser.id,
					sessionToken: newToken,
					sessionRefreshToken: newRefreshToken,
					expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
				}
			})

			token = newToken
			refreshToken = newRefreshToken
		})
	} else {
		const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
			user.id,
			user.email
		)

		token = newToken
		refreshToken = newRefreshToken
	}

	if (!token || !refreshToken || token === "" || refreshToken === "") {
		throw new ServerError()
	}

	return { token, refreshToken }
}

export async function callbackGithubService(
	code: string,
	state: string
) {
	const tokenRes: any = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        Accept: "application/json", 
      },
      body: new URLSearchParams({
				client_id: GITHUB_CLIENT_ID,
				client_secret: GITHUB_SECRET,
				code: code,
				redirect_uri: `${BASE_URL.replace(/\/$/, "")}/api/auth/callback/github?provider=github`,
			}),
    }
  );

	const tokenJson = await tokenRes.json();
  const accessToken = tokenJson.access_token as string | undefined;

	if (!accessToken) {
    throw new UnauthorizedError("Github User data not found")
	}

	const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",     
    },
  });

	const githubUser = await res.json();
		
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

	if (!user) {
		await prisma.$transaction(async (tx) => {
			const createdUser = await tx.user.create({
				data: {
					email: githubUser.email,
					name: githubUser.name,
					avatarUrl: githubUser.avatar_url
				}
			})

			await tx.account.create({
				data: {
					userId: createdUser.id,
					provider: "GITHUB",
					providerAccountId: githubUser.id.toString()
				}
			})

			const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
				createdUser.id,
				createdUser.email
			)

			await tx.session.create({
				data: {
					userId: createdUser.id,
					sessionToken: newToken,
					sessionRefreshToken: newRefreshToken,
					expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
				}
			})

			token = newToken
			refreshToken = newRefreshToken
		})
	} else {
		const { token: newToken, refreshToken: newRefreshToken } = generateTokens(
			user.id,
			user.email
		)

		token = newToken
		refreshToken = newRefreshToken
	}

	if (!token || !refreshToken || token === "" || refreshToken === "") {
		throw new ServerError()
	}

	return { token, refreshToken }
}

