"use client"

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import Header from "@/components/custom/Header"
import { Skeleton } from "@/components/ui/skeleton"
import Footer from '@/components/custom/Footer';

export default function InvestmentApplication() {

    const [loading, setLoading] = React.useState(true);


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Invest now
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl sm:w-full  items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Open an investment account</CardTitle>
                  <CardDescription>Fill out the form below to send us a message.</CardDescription>
                </CardHeader>
                <CardContent>

                {loading && 
                <div className="loading-spinner w-full">

                      <div className="flex items-center space-x-4 mb-10">
                            <div className="space-y-2">
                                <Skeleton className="h-12 w-[250px]" />
                                <Skeleton className="h-12 w-[200px]" />
                            </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-10">
                            <div className="space-y-2">
                                <Skeleton className="h-12 w-[250px]" />
                                <Skeleton className="h-12 w-[200px]" />
                            </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-10 w-full">
                            <div className="space-y-2">
                                <Skeleton className="h-12 w-[250px]" />
                                <Skeleton className="h-12 w-[200px]" />
                            </div>
                      </div>

                      
                </div>}
                <iframe
                    width="100%"
                    style={{ minHeight: '500px', padding: '5px' }}
                    allowFullScreen
                    src="https://x.loandisk.com/form_api/iframe.php?formSlug=H9VFhGUP3pzK4MBi6A7XnLRtIbwYWo"
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                ></iframe>

                </CardContent>
              </Card>
              <div className="space-y-4 mt-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+234 802 074 0286</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>contact@eazicred.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Address: Standard Alliance BuildingPlot 1, Block 94 Providence street,Lekki Phase 1, Lagos,</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

