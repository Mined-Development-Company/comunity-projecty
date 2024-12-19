import React from "react"
import Skills from "./parts/Skills"

interface Card {
	image: string
	alt?: string
	level: string
	title: string
	description: string
    skills: string[]
}

interface ChallengeCardProps {
	cards: Card[]
}

export default function ChallengeCard({ cards }: ChallengeCardProps) {
    return (
      <>
        {cards.map((card, index) => (
          <div key={index} className="lg:max-w-[364px] bg-content-shape-tertiary">
            <div className="flex h-[272px] items-center justify-center overflow-hidden">
              <img
                src={card.image}
                alt={card.alt || "image card "}
                className="w-full object-cover"
              />
            </div>
            <div className="flex p-3 flex-col gap-y-3">
              <div className="flex">
                <div>
                  <h3 className="text-xl capitalize">{card.level}</h3>
                  <div className="w-full h-1 bg-gradient-to-r from-green-hard to-content-shape-tertiary"></div>
                </div>
                <div className="w-full"></div>
              </div>
              <h2 className="text-2xl font-semibold capitalize">{card.title}</h2>
              <Skills skills={card.skills} /> {/* Corrigido aqui */}
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
