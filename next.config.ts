import path from "node:path"
import type { NextConfig } from "next"

const baseConfig: NextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		// Garante resolução correta de módulos em sistemas case-sensitive (Linux/Vercel)
		config.resolve.extensionAlias = {
			".js": [".js", ".ts", ".tsx"],
			".jsx": [".jsx", ".tsx"],
			".ts": [".ts", ".tsx"],
			".tsx": [".tsx"]
		}

		// Configura aliases para resolução de caminhos
		config.resolve.alias = {
			...config.resolve.alias,
			"@": path.resolve(__dirname, "./src")
		}

		// Garante que as extensões sejam resolvidas na ordem correta
		if (!config.resolve.extensions) {
			config.resolve.extensions = []
		}

		// Prioriza .tsx e .ts antes de .js
		config.resolve.extensions = [
			".tsx",
			".ts",
			...config.resolve.extensions.filter(
				(ext: string) => ext !== ".tsx" && ext !== ".ts"
			)
		]

		return config
	}
}

const nextConfig: NextConfig =
	process.env.NODE_ENV === "development"
		? {
				...baseConfig,
				images: {
					remotePatterns: [
						{
							hostname: "placehold.co",
							protocol: "https",
							pathname: "**"
						},
						{
							hostname: "github.com",
							protocol: "https",
							pathname: "**"
						}
					]
				},
				eslint: {
					ignoreDuringBuilds: true
				},
				typescript: {
					ignoreBuildErrors: true
				}
			}
		: {
				...baseConfig,
				eslint: {
					ignoreDuringBuilds: true
				},
				typescript: {
					ignoreBuildErrors: true
				}
			}

export default nextConfig
