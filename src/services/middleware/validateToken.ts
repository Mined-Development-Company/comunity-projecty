import JWT, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken"

import { JWT_SECRETE } from "@/shared/env"

import { UnauthorizedError } from "../errors/HttpError"
import { payloadSchema } from "../validators/oAuth"

/**
 * Valida o token JWT
 * @param token - Token JWT
 * @returns Decoded token
 */
export async function validateToken(token: string) {
	try {
		const decodedToken = JWT.verify(token, JWT_SECRETE)

		if (!payloadSchema.safeParse(decodedToken).success) {
			throw new UnauthorizedError("Token inválido")
		}

		return payloadSchema.parse(decodedToken)
	} catch (error) {
		if (error instanceof JsonWebTokenError || error instanceof TokenExpiredError) {
			throw new UnauthorizedError("Token inválido ou expirado")
		}
		throw error
	}
}
