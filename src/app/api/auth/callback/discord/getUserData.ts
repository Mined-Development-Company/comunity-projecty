type Response = {
	id: string
	username: string
	email: string
	avatar: string
	discriminator: string
	public_flags: number
	flags: number
	global_name: string
	avatar_decoration_data: {
		asset: string
		sku_id: string
		expires_at: number
	}
	mfa_enabled: boolean
	locale: string
	premium_type: number
}

export default async function getUserData(token: string) {
	const response = await fetch("https://discord.com/api/users/@me", {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	if (!response.ok) {
		return null
	}

	return (await response.json()) as Response
}
