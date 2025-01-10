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
	}),
	http.get(localhost + "/challenge", () => {
		// ...and respond to them using this JSON response.
		return HttpResponse.json({
			id: 1,
			image:
				"https://s3-alpha-sig.figma.com/img/28a5/efd0/d71151b66d5da53b4347c1156050bebc?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOexFjdST2pRDMniKoUBZ1R4K~-aqlCOxTBRjAwPl5hjugVeEeiYz01tEcERqoniXVf4GhxS3qoAqw0GDguLlth001RvzsejlvPtlnUfuYY5YXE3pI8WpxubxcORAVWObHO6tGVn1tigVgG7z98pMKbXeKorHUKHJ-qpL6FU3hkt-fmU11c7~OwXjjozWPMuY1PGswaSWgWeDciFIsNoEkQiAwIASHDI-MDm7QHYJcQIwZJYMZ~92dI5Hmnklg-HzylJjOpqTtcHXFR-U195Voa6Mi6Znnef8ZHPeG6bB6arYOibtlvI0qXWXuXxOvQdNIPvt3kYIq~KF2gYKqJdww__",
			alt: "Image 1",
			level: "iniciante",
			title: "Loja de criação de lojas",
			description:
				"Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Manduma pindureta quium dia nois paga. Eu nunca mais boto a boca num copo de cachaça, agora eu ",
			skills: ["html", "css", "js"]
		})
	})
]
