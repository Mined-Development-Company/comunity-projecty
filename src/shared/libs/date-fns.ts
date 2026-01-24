import {
	formatDistanceToNow as formatDistanceToNowFn,
	type FormatDistanceToNowOptions
} from "date-fns"

type TProps = {
	date: Date
	options?: {
		addSuffix?: boolean
		locale?: FormatDistanceToNowOptions["locale"]
	}
}

export function formatDistanceToNow({ date, options }: TProps) {
	return formatDistanceToNowFn(date, {
		addSuffix: options?.addSuffix ?? true,
		locale: options?.locale ?? undefined
	})
}
