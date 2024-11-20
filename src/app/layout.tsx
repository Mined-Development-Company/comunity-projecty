import type { Metadata } from "next"
import localFont from "next/font/local"
import Head from "next/head"

import "../shared/styles/globals.css"

import { Toaster } from "../shared/components/atoms/sonner"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
})
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
})

export const metadata: Metadata = {
	title: "Rai Sync",
	description:
		"Este é o site oficial da nossa comunidade, criado para promover o aprendizado colaborativo, troca de conhecimentos e solução de dúvidas em um ambiente amigável e acessível. Nosso objetivo é construir um espaço onde todos possam aprender juntos, compartilhar experiências e crescer como comunidade."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<Head>
				<link rel="svg" type="image/svg+xml" href="/favicon.svg" />
			</Head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
