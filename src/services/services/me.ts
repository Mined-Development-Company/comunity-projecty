import { prisma } from "@/shared/libs/prisma"

import { NotFoundError } from "../errors/HttpError"
import { validateToken } from "../middleware/validateToken"
import type { TMeUpdateProps } from "../validators/me"

export async function meService(token: string) {
	const decodedToken = await validateToken(token)

	const me = await prisma.user.findUnique({
		where: {
			id: decodedToken.userId
		},
		select: {
			name: true,
			email: true,
			avatarUrl: true
		}
	})

	if (!me) {
		throw new NotFoundError("invalide user")
	}

	return me
}

export async function meUpdateService(token: string, body: TMeUpdateProps) {
	const decodedToken = await validateToken(token)

	const me = await prisma.user.findUnique({
		where: {
			id: decodedToken.userId
		}
	})

	if (!me) {
		throw new NotFoundError("invalide user")
	}

	await prisma.user.update({
		where: {
			id: decodedToken.userId
		},
		data: {
			name: body.name,
			avatarUrl: body.avatarUrl
		}
	})

	return "User updated successfully"
}
