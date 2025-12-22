import jwt from "jsonwebtoken"

import { JWT_SECRETE } from "@/shared/env"

export interface GenerateTokensResult {
	token: string
	refreshToken: string
}

export function generateTokens(userId: string, email?: string | null): GenerateTokensResult {
	const token = jwt.sign(
		{ userId, email, expiresIn: "15m" },
		JWT_SECRETE
	)

	const refreshToken = jwt.sign(
		{ userId, expiresIn: "7d" },
		JWT_SECRETE
	)

	return { token, refreshToken }
}

