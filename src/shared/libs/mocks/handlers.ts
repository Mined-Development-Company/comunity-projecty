// src/mocks/handlers.js
import { http, HttpResponse } from "msw"

const localhost = process.env.NEXT_PUBLIC_DB_HOST

export const handlers = [
	// Intercept "GET https://example.com/user" requests...
	http.get(localhost + "/auth", () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json({
			id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
			name: "john cena",
			email: "johncena@gmail.com",
			avatar: "https://github.com/shadcn.png"
		})
	})
]
