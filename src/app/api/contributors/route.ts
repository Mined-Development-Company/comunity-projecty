import { NextResponse } from "next/server"

type GitHubContributor = {
	login: string
	avatar_url: string
	html_url: string
	contributions: number
}

export async function GET() {
	try {
		const response = await fetch(
			"https://api.github.com/repos/Mined-Development-Company/comunity-projecty/contributors",
			{
				headers: {
					"X-GitHub-Api-Version": "2022-11-28",
					Accept: "application/vnd.github+json"
				},
				next: {
					revalidate: 3600 // Cache por 1 hora
				}
			}
		)

		if (!response.ok) {
			throw new Error("Failed to fetch contributors")
		}

		const contributors: GitHubContributor[] = await response.json()

		// Filtrar e mapear apenas os dados necessários
		const formattedContributors = contributors
			.filter((contributor) => contributor.login !== "dependabot[bot]")
			.map((contributor) => ({
				login: contributor.login,
				avatar_url: contributor.avatar_url,
				html_url: contributor.html_url,
				contributions: contributor.contributions
			}))

		return NextResponse.json(formattedContributors)
	} catch (error) {
		console.error("Error fetching contributors:", error)
		return NextResponse.json(
			{ error: "Failed to fetch contributors" },
			{ status: 500 }
		)
	}
}

