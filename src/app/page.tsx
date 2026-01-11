import Home from "@/modules/Home"
import { ElipseBlur } from "@/shared/components/atoms/ElipseBlur"

export default function Page() {
	return (
		<div className="relative flex size-full flex-col items-center justify-center overflow-hidden bg-[#090910]">
			<ElipseBlur
				width="300px"
				height="300px"
				colorCenter="rgba(0,255,0,0.6)"
				colorMid="rgba(0,255,0,0.1)"
				colorOuter="transparent"
				className="-top-4 left-[140px] scale-[60%] opacity-50"
			/>

			<ElipseBlur
				width="300px"
				height="300px"
				colorCenter="rgba(10,51,255,0.8)"
				colorMid="rgba(10,51,255,0.2)"
				colorOuter="transparent"
				className="-right-16 -top-12 scale-[150%] opacity-50"
			/>

			<ElipseBlur
				width="300px"
				height="300px"
				colorCenter="rgba(61,8,98,0.5)"
				colorMid="rgba(61,8,98,0.2)"
				colorOuter="transparent"
				className="right-[44%] top-[550px] scale-[150%] opacity-70"
			/>

			<Home />
		</div>
	)
}
