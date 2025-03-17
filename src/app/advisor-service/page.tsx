"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Briefcase, BarChart, Workflow, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"

export default function AdvisoryServices() {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="flex min-h-screen flex-col">

     <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Expert Advisory Services for SMEs
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    At Eazicred we specialize in providing expert advisory services tailored to the unique needs of
                    small and medium-sized enterprises (SMEs). Our mission is to empower businesses like yours with the
                    guidance and support needed to navigate challenges, seize opportunities, and thrive in today&apos;s
                    competitive landscape.
                  </p>
                </div>
               
              </div>
              <div id='form' className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Schedule a Consultation</h3>
                        <p className="text-sm text-muted-foreground">
                          Take the first step toward achieving your business goals with confidence.
                        </p>
                      </div>

                      <div className="grid gap-4">

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
                    src="https://x.loandisk.com/form_api/iframe.php?formSlug=REPjUVylX0YT3FArd7wtioxOfgekCh"
                    onLoad={() => setLoading(false)}
                    onError={() => setLoading(false)}
                ></iframe>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Expert Business Advisory</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;re committed to your business success with tailored solutions for SMEs
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailored Solutions for SMEs</h3>
                <p className="text-center text-muted-foreground">
                  We understand that every SME is unique. Whether you&apos;re a start-up looking for strategic direction or
                  an established business aiming for growth, we offer personalized solutions designed to meet your
                  specific goals.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Experienced Advisory Team</h3>
                <p className="text-center text-muted-foreground">
                  Our team consists of seasoned professionals with years of experience in various industries. From
                  financial management to strategic planning, we bring a wealth of knowledge and expertise to help you
                  make informed decisions.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Results-Oriented Approach</h3>
                <p className="text-center text-muted-foreground">
                  At Eazicred, we are committed to delivering practical, actionable advice that drives measurable
                  results. We don&apos;t just offer suggestions  we partner with you to create and implement strategies that
                  achieve your business objectives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border bg-background px-2.5 py-0.5 text-xs font-semibold">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Comprehensive Business Solutions
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a range of specialized services designed to help your business thrive
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Business Strategy & Planning</h3>
                      <p className="text-muted-foreground">
                        We help SMEs develop clear, actionable strategies for growth. Our team works with you to assess
                        your market, competition, and internal capabilities, ensuring that your business is positioned
                        for success.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Financial Management & Consulting</h3>
                      <p className="text-muted-foreground">
                        Managing finances effectively is critical for business sustainability. Our experts offer
                        guidance on accounting software setup, cash flow management, budgeting, financial forecasting,
                        and securing funding.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Operational Efficiency</h3>
                      <p className="text-muted-foreground">
                        Streamlining your operations can lead to significant cost savings and productivity improvements.
                        We help businesses optimize processes, improve supply chain management, and implement technology
                        solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 sm:mt-10 lg:mt-52">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    4
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">FX Brokerage</h3>
                    <p className="text-muted-foreground">
                      We help your business to access Foreign Exchange at very competitive rates. Whether to pay
                      suppliers abroad, or repatriate fx payments from clients abroad. We ensure your business gets the
                      best rates for FX.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    5
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">Business Exit & Succession Planning</h3>
                    <p className="text-muted-foreground">
                      Whether you&apos;re looking to retire, travel abroad or transition ownership, our experts provide
                      guidance on exit strategies, business valuations, and succession planning to ensure a smooth and
                      profitable transition.
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work With You</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our methodology ensures your business receives the support it needs to succeed
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Workflow className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Collaborative</h3>
                    <p className="text-center text-muted-foreground">
                      We believe in working closely with our clients, building strong partnerships based on trust and
                      transparency. Your success is our success, and we are dedicated to providing ongoing support
                      throughout your business journey.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <BarChart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Proactive</h3>
                    <p className="text-center text-muted-foreground">
                      We don&apos;t wait for problems to arise – we proactively identify potential challenges and provide
                      solutions before they become obstacles. Our forward-thinking approach ensures that your business
                      stays ahead of the curve.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Adaptable</h3>
                    <p className="text-center text-muted-foreground">
                      The business landscape is always changing, and so are the needs of your company. We stay flexible,
                      adapting our strategies and recommendations to fit the evolving needs of your business.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border bg-background px-2.5 py-0.5 text-xs font-semibold">
                  Industries
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Industries We Serve</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Specialized expertise across diverse sectors
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Manufacturing & Retail</h3>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Technology & Startups</h3>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Healthcare & Professional Services</h3>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Hospitality & Food Services</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Let&apos;s Build Your Future Together
                  </h2>
                  <p className="md:text-xl">
                    We are committed to helping SMEs unlock their full potential. Whether you&apos;re aiming for growth,
                    navigating challenges, or preparing for the future, we&apos;re here to provide the expertise and guidance
                    you need.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#form" scroll >
                    <Button size="lg" variant="secondary" className="gap-1">
                      Schedule a Consultation <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg bg-muted/10 p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold">Contact Us</h3>
                </div>
                <p>Contact us today to take the first step toward achieving your business goals with confidence.</p>
                <div className="grid gap-4">
                  <div className="flex flex-col space-y-2 rounded-lg bg-muted/20 p-4">
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-lg font-bold">contact@eazicred.com</p>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-lg bg-muted/20 p-4">
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-lg font-bold">+234 8020740286</p>
                    <p className="text-xs">Mon-Fri: 9am-5pm WAT</p>
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

