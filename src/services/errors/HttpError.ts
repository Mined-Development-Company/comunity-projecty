export class HttpError extends Error {
	statusCode: number

	constructor(message: string, statusCode: number) {
		super(message)
		this.statusCode = statusCode
		this.name = "HttpError"
	}
}

export class BadRequestError extends HttpError {
	constructor(message: string) {
		super(message, 400)
		this.name = "BadRequestError"
	}
}

export class NotFoundError extends HttpError {
	constructor(message: string) {
		super(message, 404)
		this.name = "NotFoundError"
	}
}

export class UnauthorizedError extends HttpError {
	constructor(message: string) {
		super(message, 401)
		this.name = "UnauthorizedError"
	}
}

export class ServerError extends HttpError {
	constructor() {
		super("Internal Server Error	", 500)
		this.name = "NotFoundError"
	}
}

export class ForbiddenError extends HttpError {
	constructor(message: string) {
		super(message, 403)
		this.name = "ForbiddenError"
	}
}
