"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function useHeader() {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	return { open, router, setOpen }
}
