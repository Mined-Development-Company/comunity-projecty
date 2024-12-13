import { CardInfo } from "@/shared/components/molecules/cardInfo"

export default function Home() {
	return (
		<div className="bg-content-shape-primary">
			<CardInfo
				image="https://github.com/shadcn.png"
				title="Rogerinho"
				description="usuário"
				size="lg"
				dp="center"
			/>
		</div>
	)
}
