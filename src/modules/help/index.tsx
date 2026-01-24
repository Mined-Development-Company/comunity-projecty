"use client"

import { QuestionsList } from "./components/QuestionsList"
import { SidebarFilter } from "./components/SidebarFilter"
import { TopControls } from "./components/TopControls"
import useModel from "./hooks/useModel"

export default function HelpPage() {
	const { selectedTags, handleSelectTag, setSelectedTags } = useModel()

	return (
		<main className="container m-auto px-4 py-6 lg:px-[7.5rem] lg:py-10">
			<div className="mt-6 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-12">
				<SidebarFilter
					className="order-1 md:order-1 lg:order-1 lg:col-span-3"
					selectedTags={selectedTags}
					handleSelectTag={handleSelectTag}
					setSelectedTags={setSelectedTags}
				/>
				<div className="order-2 space-y-6 lg:order-2 lg:col-span-9">
					<TopControls />
					<QuestionsList />
				</div>
			</div>
		</main>
	)
}
