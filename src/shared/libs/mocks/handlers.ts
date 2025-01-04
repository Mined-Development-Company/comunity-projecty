import { randomUUID } from "crypto"

import { http, HttpResponse, type PathParams } from "msw"

import { type ProfileProps } from "@/modules/profile/schema/Profile.schema"
import { type UserProps } from "@/shared/@types/UserProps"

const localhost = String(process.env.NEXT_PUBLIC_DB_HOST)
const localDB = String(process.env.MSW_LOCAL_DATABASE_URL || "http://localhost:3005")

export const handlers = [
	// auth Routes
	http.post<PathParams, UserProps, any>(`${localhost}/auth`, async ({ request }) => {
		try {
			const data = await request.json()
			const id = String(randomUUID().split("-", 1).join())
			const res = await fetch(`${localDB}/users`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ ...data, id: id })
			})
			const content: UserProps = await res.json()
			return HttpResponse.json<UserProps>(content)
		} catch (error) {
			if (error instanceof Error) {
				return HttpResponse.json(JSON.stringify({ error: error.message }), {
					status: 403
				})
			}
			return HttpResponse.json(JSON.stringify(error), { status: 403 })
		}
	}), // Create User
	http.get<PathParams, UserProps, any>(`${localhost}/auth/:id`, async ({ params }) => {
		try {
			const { id } = params
			const res = await fetch(`${localDB}/users/${id}`)
			const content: UserProps = await res.json()
			return HttpResponse.json<UserProps>(content)
		} catch (error) {
			if (error instanceof Error) {
				return HttpResponse.json(JSON.stringify({ error: error.message }), {
					status: 403
				})
			}
			return HttpResponse.json(JSON.stringify(error), { status: 403 })
		}
	}), // Get User

	// profile Routes
	http.get<PathParams, ProfileProps, any>(`${localhost}/profile`, async () => {
		try {
			const request = await fetch(`${localDB}/profile`)
			const content: ProfileProps[] = await request.json()
			return HttpResponse.json<ProfileProps[]>(content)
		} catch (error) {
			if (error instanceof Error) {
				return HttpResponse.json(JSON.stringify({ error: error.message }), {
					status: 403
				})
			}
			return HttpResponse.json(JSON.stringify(error), { status: 403 })
		}
	}), // Get All Profiles
	http.get<PathParams, ProfileProps, any>(
		`${localhost}/profile/:id`,
		async ({ params }) => {
			try {
				const { id } = params
				const request = await fetch(`${localDB}/profiles/${id || "3fb746a9"}`)
				const content: ProfileProps = await request.json()
				return HttpResponse.json<ProfileProps>(content)
			} catch (error) {
				if (error instanceof Error) {
					return HttpResponse.json(JSON.stringify({ error: error.message }), {
						status: 403
					})
				}
				return HttpResponse.json(JSON.stringify(error), { status: 403 })
			}
		}
	), // Get Profile by ID
	http.post<PathParams, ProfileProps, any>(
		`${localhost}/profile`,
		async ({ request }) => {
			try {
				const data = await request.json()
				const id = String(randomUUID().split("-", 1).join())
				const res = await fetch(`${localDB}/profiles`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ ...data, id: id })
				})
				const content = await res.json()
				return HttpResponse.json<ProfileProps>(content)
			} catch (error) {
				if (error instanceof Error) {
					return HttpResponse.json(JSON.stringify({ error: error.message }), {
						status: 403
					})
				}
				return HttpResponse.json(JSON.stringify(error), { status: 403 })
			}
		}
	), // Create Profile
	http.put<PathParams, ProfileProps>(
		`${localhost}/profile/update/:id`,
		async ({ params, request }) => {
			try {
				const { id } = params
				const data = await request.json()
				const res = await fetch(`${localDB}/profiles/${id}`, {
					method: "PUT",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
				const content = await res.json()
				return HttpResponse.json(content)
			} catch (error) {
				if (error instanceof Error) {
					return HttpResponse.json(JSON.stringify({ error: error.message }), {
						status: 403
					})
				}
				return HttpResponse.json(JSON.stringify(error), { status: 403 })
			}
		}
	) // Update Profile
]
