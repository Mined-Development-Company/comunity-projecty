"use serve"
/**
 * @todo
 * Ajustar o "locale" para que ele pegue a propriedade "lang" da pagina de forma atomatizada
 */
export function formatTimestamp(timestamp: string | number, locale?: string): string {
	try {
		const date =
			typeof timestamp === "string" ? new Date(timestamp) : new Date(Number(timestamp))
		if (isNaN(date.getTime())) {
			throw new Error("Invalid date")
		}
		return new Intl.DateTimeFormat(locale ?? "en-US", {
			month: "short",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		}).format(date)
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error formatting timestamp:", error)
			return error.message
		}
		return "Unkoned Error"
	}
}
