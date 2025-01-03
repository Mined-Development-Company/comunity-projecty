async function initMocks() {
	if (typeof window === "undefined") {
		const { server } = await import("./server")
		server.listen()
		console.log("passou na validação 1")
	} else {
		const { worker } = await import("./browser")
		await worker.start()
		console.log("passou na validação 2")
	}
}

if (process.env.NODE_ENV === "development") initMocks()

export {}
