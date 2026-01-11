type Schema =
	| "string"
	| "number"
	| "boolean"
	| string // literal
	| string[] // union de literais
	| ["string" | "number" | "boolean" | string] // array tipado

export function validateSchema(
	schema: Record<string, Schema>,
	data: Record<string, any>
) {
	const errors: string[] = []

	for (const key in schema) {
		const rule = schema[key]
		const value = data[key]

		// 1) Se esquema é um tipo simples
		if (typeof rule === "string") {
			if (typeof value !== rule) {
				errors.push(`Parâmetro '${key}' invalido`)
			}
			continue
		}

		// 2) UNION literal: ["login", "register"]
		if (
			Array.isArray(rule) &&
			rule.length > 0 &&
			typeof rule[0] === "string" &&
			rule.length > 1
		) {
			if (!rule.includes(value)) {
				errors.push(`Parâmetro '${key}' invalido`)
			}
			continue
		}

		// 3) ARRAY tipado: ["string"]
		if (Array.isArray(rule) && rule.length === 1) {
			const expectedType = rule[0]

			if (!Array.isArray(value)) {
				errors.push(`Parâmetro '${key}' invalido`)
				continue
			}

			value.forEach((item: any, index: number) => {
				if (typeof item !== expectedType) {
					errors.push(`${key}[${index}] deve ser ${expectedType}`)
				}
			})

			continue
		}

		// fallback de segurança
		errors.push(`Regra inválida para campo ${key}`)
	}

	return errors.length > 0 ? errors : null
}
