"use client"

import axios from "axios"

import { API_URL } from "../env"

export const api = axios.create({
	baseURL: API_URL || "",
	timeout: 30000,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json"
	}
})
