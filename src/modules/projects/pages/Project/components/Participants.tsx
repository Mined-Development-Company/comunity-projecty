import { Box } from "../../../../../shared/components/atoms/box"
import { AvatarDefault } from "../../../../../shared/components/molecules/avatars/AvatarDefault"

const avatars = [
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "0"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "1"
	},
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "2"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "3"
	},
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "4"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "5"
	},
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "6"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "7"
	},
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "8"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "9"
	},
	{
		src: "https://zanotti.com.br/blog/wp-content/uploads/2016/08/Modelo-Victoria-Secrets-Adriana-Lima.jpg",
		name: "10"
	},
	{
		src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Gisele_B%C3%BCndchen_em_junho_de_2006.jpg/800px-Gisele_B%C3%BCndchen_em_junho_de_2006.jpg",
		name: "11"
	}
]

export function Participants() {
	return (
		<Box className="space-y-3">
			<h3 className="font-bold text-content-primary">Participantes</h3>
			<div className="flex flex-wrap gap-3">
				{avatars.map(({ src }, index) => (
					<AvatarDefault key={index} src={src} size="sm" />
				))}
			</div>
		</Box>
	)
}
