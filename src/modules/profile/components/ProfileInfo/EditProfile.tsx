"use client"

import type React from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { ProfileSchema, type ProfileProps } from "@/shared/schemas/Profile.schema"
import { useProfile } from "@/modules/profile/pages/hooks/useProfile"
import { Button } from "@/shared/components/atoms/button"
import { Icon } from "@/shared/components/atoms/icon/Icon"
import { Input } from "@/shared/components/atoms/input/input"
import { Textarea } from "@/shared/components/atoms/textArea"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/shared/components/molecules/form"
import { InputFile } from "@/shared/components/molecules/inputs/inputFile"
import { Modal, ModalClose } from "@/shared/components/molecules/modal"

export default ({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Button>) => {
	const { updateProfile } = useProfile()

	const form = useForm<ProfileProps>({
		resolver: zodResolver(ProfileSchema)
	})
	return (
		<Modal
			className="max-h-[816px] max-w-[395px] md:w-[670px]"
			trigger={
				<Button variant={"secondary"} size={"sm"} className={className} {...props}>
					<Icon name="Pen" />
					<span className="sr-only">Editar Perfil</span>
				</Button>
			}
			children={
				<section>
					<Form {...form}>
						<form onSubmit={form.handleSubmit((data) => updateProfile(data))}>
							<FormField
								name="avatar"
								control={form.control}
								render={({ field }) => (
									<FormItem className="space-y-1.5">
										<div className="m-[0_auto] size-32 rounded-full bg-white"></div>
										<FormControl>
											<InputFile
												className="m-[0_auto] w-[174px]"
												label=""
												placeholder="Alterar Avatar"
												{...field}
											/>
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="nickName"
								control={form.control}
								render={({ field }) => (
									<FormItem className="space-y-1.5">
										<FormLabel>Nome</FormLabel>
										<FormControl>
											<Input placeholder="Name" {...field} />
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								name="description"
								control={form.control}
								render={({ field }) => (
									<FormItem className="space-y-1.5">
										<FormLabel>Descrição</FormLabel>
										<FormControl>
											<Textarea placeholder="" {...field} />
										</FormControl>
										<FormDescription />
										<FormMessage />
									</FormItem>
								)}
							/>
							<section className="mt-2 space-y-4 md:space-y-0">
								<h3 className="fon-bold text-[16px] leading-[18px]">Redes Sociais</h3>
								<div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
									<FormField
										name="social.facebook"
										control={form.control}
										render={({ field }) => (
											<FormItem className="flex items-center gap-x-2 space-y-1.5">
												<FormLabel className="">
													<span className="sr-only">Facebook</span>
													<Icon name="FacebookLogo" size={20} />
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														placeholder="facebook.com/username"
														{...field}
													/>
												</FormControl>
												<FormDescription />
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="social.instagram"
										control={form.control}
										render={({ field }) => (
											<FormItem className="flex items-center gap-x-2 space-y-1.5">
												<FormLabel className="">
													<span className="sr-only">Instagram</span>
													<Icon name="InstagramLogo" size={20} />
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														placeholder="instagram.com/username"
														{...field}
													/>
												</FormControl>
												<FormDescription />
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
								<div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
									<FormField
										name="social.linkedin"
										control={form.control}
										render={({ field }) => (
											<FormItem className="flex items-center gap-x-2 space-y-1.5">
												<FormLabel className="">
													<span className="sr-only">LinkedIn</span>
													<Icon name="LinkedinLogo" size={20} />
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														placeholder="linkedin.com/in/username"
														{...field}
													/>
												</FormControl>
												<FormDescription />
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										name="social.github"
										control={form.control}
										render={({ field }) => (
											<FormItem className="flex items-center gap-x-2 space-y-1.5">
												<FormLabel className="">
													<span className="sr-only">GitHub</span>
													<Icon name="GithubLogo" size={20} />
												</FormLabel>
												<FormControl>
													<Input
														className="w-full"
														placeholder="github.com/username"
														{...field}
													/>
												</FormControl>
												<FormDescription />
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</section>
						</form>
					</Form>
				</section>
			}
			customActions={
				<>
					<ModalClose asChild>
						<Button variant={"secondary"} className="w-fit min-w-[] md:w-full">
							cancelar
						</Button>
					</ModalClose>
					<Button type="submit" variant={"default"} className="min-w- w-fit md:w-full">
						salvar
					</Button>
				</>
			}
			title=""
			description=""
			layout="WithCustomActions"
		/>
	)
}
