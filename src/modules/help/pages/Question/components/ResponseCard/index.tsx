import React, { useEffect, useRef, useState } from "react"

import { formatDistanceToNow } from "date-fns"
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi"

import { AvatarInfo } from "@/shared/components/molecules/cardInfo"
import { cn } from "@/shared/utils/cn"

import { ButtonIconComment } from "./ButtonIconComment"
import { Line } from "./Line"

export type ResponseCardProps = {
	id: number
	likes: number
	liked?: boolean | null
	avatar: string
	content: string
	index?: number
	replies?: ResponseCardProps[]
	isReply?: boolean
	disLikes: number
	isSource?: boolean
	createdAt: string
	className?: string
	authorName: string
	sourceHeight?: number
	respondingToId: number | null
}

export function ResponseCard({
	index,
	likes,
	liked,
	avatar,
	content,
	replies,
	disLikes,
	isReply = false,
	isSource = true,
	className,
	createdAt,
	authorName,
	sourceHeight = 0,
}: ResponseCardProps) {
	const [likeHoverRef, setLikeHoverRef] = useState<boolean>(false)
	const [dislikeHoverRef, setDislikeHoverRef] = useState<boolean>(false)
	const [showReplies, setShowReplies] = useState<boolean>(true)
	const [commentBoxSize, setCommentBoxSize] = useState<number>(0)
	
	const commentBoxSizeRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (commentBoxSizeRef.current) {
			setCommentBoxSize(commentBoxSizeRef.current.clientHeight)
		}
	}, [commentBoxSizeRef])

	const isRepliesController = replies && replies.length > 0 

	if (isReply && !showReplies && !isSource) {
		return (
			<div className="relative">
				<div
					className="absolute -left-11 top-[-78px] flex items-center gap-4"
					style={{ top: `-${sourceHeight - 10}px` }}>
					<Line height={sourceHeight} />
				</div>

				<button
					className="flex w-fit items-center justify-start gap-2 pt-1"
					onClick={() => setShowReplies(true)}>
					<div className="bg-content-shape-secondary p-0.5">
						<FiPlusCircle size={18} />
					</div>

					<p className="text-sm font-semibold text-content-primary">{authorName}</p>
					<p className="text-[10px] text-content-quaternary">
						{formatDistanceToNow(new Date(createdAt))}
					</p>
				</button>
			</div>
		)
	}

	return (
		<div className="space-y-6">
			<div
				className={cn("relative flex flex-1 flex-col items-start gap-1", className)}
				ref={commentBoxSizeRef}>
				<AvatarInfo
					size="xs"
					dp="center"
					name={authorName}
					image={avatar}
					className="text-sm font-semibold text-content-primary"
					description={formatDistanceToNow(new Date(createdAt))}
				/>

				{isReply && (
					<div
						className={"absolute -left-11 flex items-center gap-4"}
						style={{ top: `-${sourceHeight - 10}px` }}>
						<Line height={sourceHeight} />

						{showReplies && isRepliesController &&(
							<button
								className="absolute left-[8.5px] top-[calc(100%-62px)] bg-content-shape-secondary p-0.5"
								onClick={() => setShowReplies(false)}>
								<FiMinusCircle size={18} />
							</button>
						)}
					</div>
				)}

				<div className="ml-10 space-y-4">
					<p className="text-sm text-blue-100">{content}</p>

					<div className="flex items-center gap-4">
						<ButtonIconComment
							count={likes}
							name="ThumbsUp"
							liked={liked === null || liked === false ? null : true}
							weight={likeHoverRef}
							onMouseEnter={() => setLikeHoverRef(true)}
							onMouseLeave={() => setLikeHoverRef(false)}
						/>

						<ButtonIconComment
							count={disLikes}
							name="ThumbsDown"
							liked={liked === null || liked === true ? null : false}
							weight={dislikeHoverRef}
							onMouseEnter={() => setDislikeHoverRef(true)}
							onMouseLeave={() => setDislikeHoverRef(false)}
						/>

						<button className="text-xs font-bold text-blue-soft">Responder</button>
					</div>
				</div>
			</div>

			{replies && showReplies && (
				<div className="ml-10 space-y-6">
					{replies.map((reply, index) => (
						<ResponseCard
							key={index}
							{...reply}
							index={index}
							isSource={false}
							isReply={true}
							sourceHeight={commentBoxSize}
						/>
					))}
				</div>
			)}
		</div>
	)
}
