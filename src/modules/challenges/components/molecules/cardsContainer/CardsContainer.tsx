import React from "react"

import CardAtoms from "../../atoms/cardAtoms/CardAtoms"

const CardsContainer = () => {
	const cardItems = [
		{
			src: "https://s3-alpha-sig.figma.com/img/28a5/efd0/d71151b66d5da53b4347c1156050bebc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fU8o2FZ1b6RaQlhsZIT2AAbALAv-lKFR76QO81eZu6SGe0l8PyTkOpRslS0SASfKUx8DRQjt1pYap1DPczB0Z0P3~lTUa-zPsiWW67uxEVgXG8ZGpb6E5WCyTTzyivqUglQjnxQ4e7Py~eck-ISxTGcDsHrtw2xDMwU120LyHry25X0I2Hr4A99I7eH7G7-YQLhjSYP8747yCE9sjS72VNEMdqoHI1F~7FRgXdpzrHV4HoYFVppq0jfVaF4Kpj4Z2~q64I94yrYEKf9hMUXFcFFuLC6rQHJ0CcWMceSQn0f71VVmNMlo9BEncDMK3YQZdvAO75eIVnoFxuHjhgLdvQ__",
			alt: "imagem-card",
			title: "Loja de Criação de Items",
			difficulty: 1,
			features: ["html", "css", "js"]
		},
		{
			src: "https://placeholder.com/300",
			alt: "imagem-card",
			title: "Loja de Produtos",
			difficulty: 2, // Intermediário
			features: ["react", "tailwind", "node.js"]
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/28a5/efd0/d71151b66d5da53b4347c1156050bebc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fU8o2FZ1b6RaQlhsZIT2AAbALAv-lKFR76QO81eZu6SGe0l8PyTkOpRslS0SASfKUx8DRQjt1pYap1DPczB0Z0P3~lTUa-zPsiWW67uxEVgXG8ZGpb6E5WCyTTzyivqUglQjnxQ4e7Py~eck-ISxTGcDsHrtw2xDMwU120LyHry25X0I2Hr4A99I7eH7G7-YQLhjSYP8747yCE9sjS72VNEMdqoHI1F~7FRgXdpzrHV4HoYFVppq0jfVaF4Kpj4Z2~q64I94yrYEKf9hMUXFcFFuLC6rQHJ0CcWMceSQn0f71VVmNMlo9BEncDMK3YQZdvAO75eIVnoFxuHjhgLdvQ__",
			alt: "imagem-card",
			title: "Loja de Criação de Items",
			difficulty: 1,
			features: ["html", "css", "js"]
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/28a5/efd0/d71151b66d5da53b4347c1156050bebc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fU8o2FZ1b6RaQlhsZIT2AAbALAv-lKFR76QO81eZu6SGe0l8PyTkOpRslS0SASfKUx8DRQjt1pYap1DPczB0Z0P3~lTUa-zPsiWW67uxEVgXG8ZGpb6E5WCyTTzyivqUglQjnxQ4e7Py~eck-ISxTGcDsHrtw2xDMwU120LyHry25X0I2Hr4A99I7eH7G7-YQLhjSYP8747yCE9sjS72VNEMdqoHI1F~7FRgXdpzrHV4HoYFVppq0jfVaF4Kpj4Z2~q64I94yrYEKf9hMUXFcFFuLC6rQHJ0CcWMceSQn0f71VVmNMlo9BEncDMK3YQZdvAO75eIVnoFxuHjhgLdvQ__",
			alt: "imagem-card",
			title: "Loja de Criação de Items",
			difficulty: 1,
			features: ["html", "css", "js"]
		},
		{
			src: "https://placeholder.com/300",
			alt: "imagem-card",
			title: "Loja de Produtos",
			difficulty: 2, // Intermediário
			features: ["react", "tailwind", "node.js"]
		},
		{
			src: "https://s3-alpha-sig.figma.com/img/28a5/efd0/d71151b66d5da53b4347c1156050bebc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fU8o2FZ1b6RaQlhsZIT2AAbALAv-lKFR76QO81eZu6SGe0l8PyTkOpRslS0SASfKUx8DRQjt1pYap1DPczB0Z0P3~lTUa-zPsiWW67uxEVgXG8ZGpb6E5WCyTTzyivqUglQjnxQ4e7Py~eck-ISxTGcDsHrtw2xDMwU120LyHry25X0I2Hr4A99I7eH7G7-YQLhjSYP8747yCE9sjS72VNEMdqoHI1F~7FRgXdpzrHV4HoYFVppq0jfVaF4Kpj4Z2~q64I94yrYEKf9hMUXFcFFuLC6rQHJ0CcWMceSQn0f71VVmNMlo9BEncDMK3YQZdvAO75eIVnoFxuHjhgLdvQ__",
			alt: "imagem-card",
			title: "Loja de Criação de Items",
			difficulty: 1,
			features: ["html", "css", "js"]
		}
	]
	return (
		<div className="m-auto grid w-[1200px] grid-cols-3 gap-y-9">
			<CardAtoms cardItems={cardItems} />
		</div>
	)
}

export default CardsContainer
