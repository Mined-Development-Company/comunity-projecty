import React from "react"

import CardsContainer from "../../components/molecules/cardsContainer/CardsContainer"
import Search from "../../components/organisms/search/Search"

const Challanges = () => {
	const items = [
		{
			label: "filtro1",
			value: "0"
		}
	]

	return (
		<div>
			<div className="my-20">
				<Search filters={items} />
			</div>
			<div>
				<CardsContainer />
			</div>
		</div>
	)
}

export default Challanges
