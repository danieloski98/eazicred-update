"use client"

import type React from "react"
import Link from "next/link"
import Header from "@/components/custom/Header"

export default function Application() {




    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Loan Application
                            </h1>
                            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                                Quick and Easy Loan Application
                            </p>
                        </div>

                        <div className="sm:mx-3 lg:mx-auto max-w-5xl sm:w-full flex justify-center ">
                            <div className="sm:w-full lg:w-[50%] pb-6">

                                <iframe width="100%" style={{ minHeight: '1000px', padding: '5px' }} src="https://x.loandisk.com/form_api/iframe.php?formSlug=L1MjtT58VAmNfHcYpIU7uWa4Dek692"></iframe>

                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-zinc-50 py-6 dark:bg-zinc-900">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
                    <div className="flex items-center gap-4 px-8 md:px-0">
                        <p className="text-center text-sm leading-loose text-zinc-500 md:text-left dark:text-zinc-400">
                            © 2023 Eazicred. All rights reserved.
                        </p>
                    </div>
                    <nav className="flex items-center gap-4 sm:gap-6">
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Terms of Service
                        </Link>
                        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                            Privacy
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

