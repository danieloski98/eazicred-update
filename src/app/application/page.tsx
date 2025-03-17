"use client"

import React from "react"
import Header from "@/components/custom/Header"
import { Skeleton } from "@/components/ui/skeleton"
import Footer from "@/components/custom/Footer"


export default function Application() {

    const [loading, setLoading] = React.useState(true);
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

                                {loading &&
                                    <div className="loading-spinner w-full mt-6">

                                        <div className="flex items-center space-x-4 mb-10">
                                            <div className="space-y-2">
                                                <Skeleton className="h-8 w-[250px]" />
                                                <Skeleton className="h-8 w-[200px]" />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4 mb-10">
                                            <div className="space-y-2">
                                                <Skeleton className="h-8 w-[250px]" />
                                                <Skeleton className="h-8 w-[200px]" />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4 mb-10 w-full">
                                            <div className="space-y-2">
                                                <Skeleton className="h-8 w-[250px]" />
                                                <Skeleton className="h-8 w-[200px]" />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-4 mb-10 w-full">
                                            <div className="space-y-2">
                                                <Skeleton className="h-8 w-[250px]" />
                                                <Skeleton className="h-8 w-[200px]" />
                                            </div>
                                        </div>

                                    </div>}

                                <iframe width="100%" style={{ minHeight: '1000px', padding: '5px' }} src="https://x.loandisk.com/form_api/iframe.php?formSlug=L1MjtT58VAmNfHcYpIU7uWa4Dek692" onLoad={() => setLoading(false)}
                                    onError={() => setLoading(false)}></iframe>

                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

