async function initMocks() {
	if (typeof window === "undefined") {
		const { server } = await import("./server")
		return server.listen({ onUnhandledRequest: "bypass" })
	}
	const { worker } = await import("./browser")
	return worker.start({ onUnhandledRequest: "bypass" })
}

initMocks()

export {}
