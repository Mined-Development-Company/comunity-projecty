import { Icon } from "@/shared/components/atoms/icon/Icon"

export const AsideArea = () => {
	return (
		<div>
			<div className="h-fit rounded bg-[#0f1018] p-8 ring-1 ring-gray-500/20 lg:max-w-[302px]">
				<p className="text-center text-xl">Contribuições</p>
				<div className="mt-4">
					<div>
						<p>Perguntas:</p>
						<div className="flex justify-between">
							<div className="flex items-center justify-center gap-2">
								<Icon name="QuestionMark" size={20} className="rounded-full border-2" />
								Feitas
							</div>
							<p>24</p>
						</div>
					</div>
					<div>
						<div className="flex justify-between">
							<div className="flex items-center justify-center gap-2">
								<Icon name="Lightbulb" size={20} />
								Respondida
							</div>
							<p>24</p>
						</div>
					</div>
				</div>
				<div className="mt-4">
					<div>
						<p>Desafios:</p>
						<div className="flex justify-between">
							<div className="flex items-center justify-center gap-2">
								<Icon name="Trophy" size={20} className="" />
								Feitos
							</div>
							<p>24</p>
						</div>
					</div>
					<div>
						<div className="flex justify-between">
							<div className="flex items-center justify-center gap-2">
								<Icon name="PencilCircle" size={20} />
								Criados
							</div>
							<p>24</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
