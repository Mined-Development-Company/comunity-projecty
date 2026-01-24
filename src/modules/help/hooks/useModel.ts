import { useState } from "react"

export default function useModel() {
	const [selectedTags, setSelectedTags] = useState<string[]>([])

	const handleSelectTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		)
	}

	return { selectedTags, handleSelectTag, setSelectedTags }
}
