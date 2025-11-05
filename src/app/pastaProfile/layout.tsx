"use client"

import React, {  type ReactNode } from "react"



type LayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {


    

    return (
        <div className="container mx-auto ">
            {children}
        </div>
    )
}
