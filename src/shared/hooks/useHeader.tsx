"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function useHeader() {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	return { open, router, setOpen }
}
