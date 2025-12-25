import jwt from "jsonwebtoken"

import { JWT_SECRETE } from "@/shared/env"

export interface GenerateTokensResult {
	token: string
	refreshToken: string
}

export function generateTokens(
	sessionId: string,
	userId: string,
	email?: string | null
): GenerateTokensResult {
	const token = jwt.sign({ id: sessionId, userId, email }, JWT_SECRETE, {
		expiresIn: "15m"
	})

	const refreshToken = jwt.sign({ id: sessionId, userId, email }, JWT_SECRETE, {
		expiresIn: "7d"
	})

	return { token, refreshToken }
}
