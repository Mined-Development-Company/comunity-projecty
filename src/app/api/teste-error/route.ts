import { NotFoundError } from "@/services/errors/HttpError"
import { handleError } from "@/app/api/utils/handleError"

export async function GET() {
	try {
		throw new NotFoundError("Não deu pra encontrar")
	} catch (error) {
		console.log(error)
		return handleError(error)
	}
}
