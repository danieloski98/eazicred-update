"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/custom/Header"

export default function ContactUs() {




  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl sm:w-full  items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>Fill out the form below to send us a message.</CardDescription>
                </CardHeader>
                <CardContent>

                  <iframe width="100%" style={{ minHeight: '500px', padding: '5px' }} allowFullScreen src="https://x.loandisk.com/form_api/iframe.php?formSlug=REPjUVylX0YT3FArd7wtioxOfgekCh"></iframe>

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

