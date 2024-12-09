// src/mocks/handlers.js

export async function getApp() {
	const response = await fetch("http://localhost:3000/user")
	const user = await response.json()
	return user
}
