import { NextResponse, type NextRequest } from "next/server"

// import { validateSchema } from "@/app/api/utils/validateSchema"
import { BASE_URL, DISCORD_CLIENT_ID, DISCORD_SECRET } from "@/shared/env"
import { prisma } from "@/shared/libs/prisma"

import getUserData from "./getUserData"

// type CallbackDiscordProps = {
// 	code: string
// 	action: "login" | "register"
// 	provider: "discord" | "github"
// }

// const schema = {
// 	code: "string",
// 	action: ["login", "register"],
// 	provider: ["discord", "github"]
// }

export async function POST(req: NextRequest) {
	const body = await req.json()

	try {
		const { code, action } = body

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

		if (!response.ok) {
			const data = await response.json()
			return NextResponse.json(
				{ error: data.error_description || data.error },
				{ status: response.status }
			)
		}

		const data = await response.json()

		const discordUser = await getUserData(data.access_token)

		if (!discordUser) {
			return NextResponse.json({ error: "User data not found" }, { status: 400 })
		}

		const user = await prisma.user.findMany({
			where: {
				email: discordUser.email
				// OR: [
				// 	{
				// 		accounts: {
				// 			some: {
				// 				provider: "DISCORD",
				// 				providerAccountId: discordUser.id
				// 			}
				// 		}
				// 	}
				// ]
			}
		})

		console.log("existe usuário?", user)

		if (!user || user === null || user === undefined) {
			return NextResponse.json({ message: "Usuário já existe" }, { status: 200 })
		}

		// if (!user || user === null || user === undefined) {
		// 	await prisma.$transaction(async (tx) => {
		// 		const createdUser = await tx.user.create({
		// 			data: {
		// 				email: discordUser.email,
		// 				name: discordUser.username,
		// 				avatarUrl: discordUser.avatar
		// 			}
		// 		})

		// 		await tx.account.create({
		// 			data: {
		// 				userId: createdUser.id,
		// 				provider: "DISCORD",
		// 				providerAccountId: discordUser.id
		// 			}
		// 		})

		// 		const token = jwt.sign(
		// 			{ userId: createdUser.id, email: createdUser.email, expiresIn: "15m" },
		// 			JWT_SECRETE
		// 		)

		// 		const refreshToken = jwt.sign(
		// 			{ userId: createdUser.id, expiresIn: "7d" },
		// 			JWT_SECRETE
		// 		)

		// 		const session = await tx.session.create({
		// 			data: {
		// 				userId: createdUser.id,
		// 				sessionToken: token,
		// 				sessionRefreshToken: refreshToken,
		// 				expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
		// 			}
		// 		})

		// 		const response = NextResponse.next()

		// 		response.cookies.set("token", token, {
		// 			httpOnly: true,
		// 			secure: true,
		// 			maxAge: 15 * 60
		// 		})

		// 		response.cookies.set("refreshToken", refreshToken, {
		// 			httpOnly: true,
		// 			secure: true,
		// 			maxAge: 7 * 24 * 60 * 60
		// 		})

		// 		return session
		// 	})

		// 	return NextResponse.json({ message: "conexão bem sucedida" }, { status: 200 })
		// } else {
		// 	const token = jwt.sign(
		// 		{ userId: user.id, email: user.email, expiresIn: "15m" },
		// 		JWT_SECRETE
		// 	)

		// 	const refreshToken = jwt.sign({ userId: user.id, expiresIn: "7d" }, JWT_SECRETE)

		// 	const response = NextResponse.next()

		// 	response.cookies.set("token", token, {
		// 		httpOnly: true,
		// 		secure: true,
		// 		maxAge: 15 * 60
		// 	})

		// 	response.cookies.set("refreshToken", refreshToken, {
		// 		httpOnly: true,
		// 		secure: true,
		// 		maxAge: 7 * 24 * 60 * 60
		// 	})
		// }

		return NextResponse.json({ message: "conexão bem sucedida" }, { status: 200 })
	} catch (error: any) {
		console.log("Erro ao trocar código por token:", error)
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: error.status || 500 }
		)
	}
}
