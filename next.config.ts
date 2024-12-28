import type { NextConfig } from "next"

const nextConfig: NextConfig = process.env.NODE_ENV === "development" ? {
	reactStrictMode: true,
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
	}
} : {reactStrictMode: true}


export default nextConfig
