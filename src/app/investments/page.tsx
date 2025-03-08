"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, BriefcaseBusiness, Calendar, PieChart, Wallet } from "lucide-react"
import Link from "next/link"
import Header from "@/components/custom/Header"
import { useContactModal } from "@/hooks/use-contact-modal"
import { ContactModal } from "@/components/custom/ContactModal"

export default function Investments() {
  const [amount, setAmount] = useState(1000)
  const [term, setTerm] = useState("annual")
  const { isOpen, openModal, closeModal } = useContactModal();


  const calculateReturns = () => {
    if (term === "annual") {
      return amount * 1.1
    } else {
      return amount * 1.05
    }
  }

  return (
    <div className="flex min-h-screen flex-col">

      <ContactModal isOpen={isOpen} onClose={() => closeModal()} />


      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Grow Your Wealth with Eazicred Investments
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Choose from our competitive investment options and watch your money grow.
              </p>
              <div className="space-x-4">
                <Button size="lg" onClick={openModal}>Start Investing</Button>
                {/* <Button variant="outline" size="lg">
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Investment Options</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Choose the investment plan that best suits your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart className="h-6 w-6 text-primary" />
                    Annual Investment Plan
                  </CardTitle>
                  <CardDescription>30% Annual Return on Investment</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Minimum investment: NGN1,000,000</li>
                    <li>12-month term</li>
                    <li>Compound interest</li>
                    <li>Reinvestment options</li>
                  </ul>
                  <Button onClick={openModal} className="w-full mt-4">Invest Now</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-primary" />
                    6-Month Investment Plan
                  </CardTitle>
                  <CardDescription>28% annaulized Return on Investment in 6 Months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Minimum investment: NGN500,000</li>
                    <li>6-month term</li>
                    <li>Flexible interest rate</li>
                    <li>Interest paid at maturity</li>
                  </ul>
                  <Button onClick={openModal} className="w-full mt-4">Invest Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Investment Calculator</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  See how much your investment could grow with Eazicred.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl space-y-6 py-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="investment-amount"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Investment Amount (NGN)
                      </label>
                      <Input
                        id="investment-amount"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        min={0}
                      />
                    </div>
                    <Tabs defaultValue="annual" onValueChange={(value) => setTerm(value)}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="annual">Annual (30% ROI)</TabsTrigger>
                        <TabsTrigger value="sixmonth">6 Months (14% ROI)</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Projected Return</h3>
                      <p className="text-3xl font-bold text-primary">NGN{calculateReturns().toFixed(2)}</p>
                      <p className="text-sm text-zinc-500">*This is an estimate. Actual returns may vary.</p>
                    </div>
                    <Button onClick={openModal} className="w-full">Start Investing</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Invest with Eazicred?</h2>
                <p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the benefits of investing with a trusted financial partner.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-primary-foreground text-primary h-44">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-6 w-6" />
                    Competitive Returns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Our investment options offer some of the most competitive returns in the market.
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary h-44">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BriefcaseBusiness className="h-6 w-6" />
                    Low Minimum Investment
                  </CardTitle>
                </CardHeader>
                <CardContent>Start investing with as little as NGN500,000 and grow your wealth over time.</CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary h-44">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-6 w-6" />
                    Flexible Options
                  </CardTitle>
                </CardHeader>
                <CardContent>Choose from various investment terms and payout options to suit your needs.</CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Find answers to common questions about our investment options.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is my investment guaranteed?</AccordionTrigger>
                  <AccordionContent>
                    While we strive to provide stable returns, all investments carry some risk. We recommend reviewing
                    our terms and conditions and consulting with a financial advisor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I withdraw my investment early?</AccordionTrigger>
                  <AccordionContent>
                    Early withdrawals are possible but may be subject to fees. The specific terms depend on your chosen
                    investment plan. Please contact our customer service for more details.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How are returns paid out?</AccordionTrigger>
                  <AccordionContent>
                    Returns can be paid out monthly or at the end of the investment term, depending on your chosen plan.
                    You also have the option to reinvest your returns for compound growth.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Are there any fees associated with investing?</AccordionTrigger>
                  <AccordionContent>
                    We pride ourselves on transparency. There are no hidden fees for our standard investment plans. Any
                    applicable fees, such as early withdrawal fees, will be clearly communicated before you invest.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50 dark:bg-zinc-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Growing Your Wealth?</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Join thousands of satisfied investors and start your journey to financial growth today.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" onClick={openModal}>Open an Investment Account</Button>
                <Button variant="outline" size="lg" onClick={openModal}>
                  Speak to an Advisor
                </Button>
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

