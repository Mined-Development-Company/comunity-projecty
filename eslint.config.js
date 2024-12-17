import eslint from "@eslint/js"
import nextplugin from "@next/eslint-plugin-next"
import importplugin from "eslint-plugin-import"
import reactplugin from "eslint-plugin-react"
import hooksplugin from "eslint-plugin-react-hooks"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{ ignores: [".next", "node_modules", "**/*.config.{ts,tsx}"] },
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylisticTypeChecked,
			...tseslint.configs.recommendedTypeChecked
		],
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		plugins: {
			react: reactplugin,
			import: importplugin,
			"@next/next": nextplugin,
			"react-hooks": hooksplugin
		},
		languageOptions: {
			parserOptions: {
				projectService: true
			},
			globals: {
				React: "writable"
			}
		},
		rules: {
			...hooksplugin.configs.recommended.rules,
			...reactplugin.configs["jsx-runtime"].rules,
			...nextplugin.configs.recommended.rules,
			...nextplugin.configs["core-web-vitals"].rules,
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false
					}
				}
			],
			"@typescript-eslint/consistent-type-definitions": ["warn", { using: "type" }],
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unused-expressions": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true
				}
			]
		}
	}
)
