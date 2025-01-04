import React from "react"
import Link from "next/link"

import type { UserProps } from "@/shared/@types/UserProps"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { capitalize } from "@/shared/utils/capitalize"

import type { ProfileProps } from "../../schema/Profile.schema"

interface ProfileFooterProps {
	name: UserProps["name"] | ProfileProps["nickName"]
	socialLinks?: ProfileProps["social"]
	bio: ProfileProps["description"]
}

function ProfileFooter({ socialLinks, name, bio }: ProfileFooterProps) {
	return (
		<footer className="px-6 py-2.5">
			<div className="flex flex-row flex-wrap justify-between gap-2.5">
				<h2 className="text-xl font-bold leading-[23px] text-white">{name}</h2>
				<div className="inline-flex space-x-5">
					{socialLinks &&
						Object.entries<string>(socialLinks).map(([key, value], index) => {
							return (
								<Link
									title={`${capitalize(key)}`}
									aria-label={`Link de acesso ao ${capitalize(key)}`}
									key={`${key}${index}`}
									href={value}
									target="_blank">
									<Icon
										weight="fill"
										className="text-white hover:text-green-soft"
										aria-label={`Ícone do ${capitalize(key)}`}
										name={`${capitalize(key)}Logo`}
										size={20}
									/>
									<span className="sr-only">{capitalize(key)}</span>
								</Link>
							)
						})}
				</div>
			</div>
			<p className="py-3 leading-4 text-content-secondary">{bio}</p>
		</footer>
	)
}

export default ProfileFooter
