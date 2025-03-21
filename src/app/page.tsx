'use client'
import React from 'react';
import Link from "next/link"
import { ArrowRight, BriefcaseBusiness, Gauge, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/custom/Header"
import Footer from '@/components/custom/Footer';


export default function Home() {
  const [loanAmount, setLoanAmount] = React.useState(10000);
  const [loanPeriod, setLoanPeriod] = React.useState(3)
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primaryColor">
                  Fast, Flexible Loans on the go.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get the funding you need with competitive rates and a seamless online application process.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={'/application'}>
                  <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Eazicred</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Gauge className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Lightning Fast Approval</CardTitle>
                </CardHeader>
                <CardContent>Get a decision on your loan application in minutes, not days.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Bank-Level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Your data is protected with state-of-the-art encryption and security measures.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BriefcaseBusiness className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>Competitive Rates</CardTitle>
                </CardHeader>
                <CardContent>We offer some of the most competitive interest rates in the industry.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="loans" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Loan Products</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Loans</CardTitle>
                  <CardDescription>For your personal financial needs</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Borrow up to NGN2,000,000</li>
                    <li>Flexible repayment period</li>
                    <li>Terms up to 12 months</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Business Loans</CardTitle>
                  <CardDescription>Fuel your business growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Borrow up to NGN10,000,000</li>
                    <li>Flexible repayment terms</li>
                    <li>Quick access to funds</li>
                    <li>Tailored for small to medium businesses</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Asset Financing Loans</CardTitle>
                  <CardDescription>Finance fixed assets</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {/* <li>Borrow up to NGN10,000,000</li> */}
                    <li>Competitive interest rates</li>
                    <li>Collaterize the asset against your loan</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className='w-full mt-10 flex justify-center items-center'>
            <Link href={'/application'}>
                  <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
            </div>

          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="pt-10">
                  <div className="flex items-center space-x-4 mb-4">

                    <div>
                      <h3 className="font-semibold">Abereniboye John J.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Personal Loan Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    The application process was incredibly smooth, and I received my funds within 24 hours. Highly
                    recommended!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <div className="flex items-center space-x-4 mb-4">

                    <div>
                      <h3 className="font-semibold">Joyce Emmanuel</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Business Loan Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Eazicred provided the capital I needed to expand my business. Their rates were unbeatable.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <div className="flex items-center space-x-4 mb-4">

                    <div>
                      <h3 className="font-semibold">Balogun Ayodeji</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Assets financing loan customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    I was able to finance my car and the repayment period was flexible and straight forward
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="process" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-white mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-500 dark:text-gray-400">Fill out our simple online application in minutes.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-white mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Get Approved</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive a decision quickly, often within minutes.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-4xl font-bold text-white mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Receive Funds</h3>
                <p className="text-gray-500 dark:text-gray-400">Get your money as soon as the next business day.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Your Loan Estimate</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  See how much you can borrow and what your payments might be.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-sm space-y-6 py-12">
              <div className="space-y-2">
                <label htmlFor="loan-amount" className="text-sm font-medium">
                  Loan Amount: {loanAmount.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
                </label>
                <Slider
                  id="loan-amount"
                  defaultValue={[1000]}
                  value={[loanAmount]}
                  max={10000000}
                  step={1000}
                  onValueChange={(value) => setLoanAmount(value[0])}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="loan-term" className="text-sm font-medium">
                  Loan Term: {loanPeriod} months
                </label>
                <Slider id="loan-term" defaultValue={[loanPeriod]} value={[loanPeriod]} onValueChange={(v) => setLoanPeriod(v[0])} max={12} step={3} />
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <label htmlFor="interest-rate" className="text-sm font-medium">
                    Interest Rate: 5%
                  </label>
                  <br />
                  <label htmlFor="total-repayment" className="text-sm font-medium">
                    Total Repayment Amount
                  </label>
                  <div id="total-repayment" className="text-lg font-bold">
                    {(loanAmount * (1 + 0.05 * (loanPeriod / 12))).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}
                  </div>
                </div>
              </div>
              <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
                Checking your rate won&apos;t affect your credit score
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I qualify for a loan?</AccordionTrigger>
                <AccordionContent>
                  Qualification criteria vary by loan type but generally include factors such as credit score, income,
                  and employment history. We consider multiple factors to provide the best possible loan options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                <AccordionContent>
                Our online application takes as little as 5 minutes to complete. Most applicants receive a decision within minutes, and if approved, funds can be deposited as soon as the next business day. Change to same day.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are there any fees associated with your loans?</AccordionTrigger>
                <AccordionContent>
                  We pride ourselves on transparency. Some loans may include an origination fee, which is clearly
                  disclosed before you accept the loan. There are no hidden fees, no application fees, and no prepayment
                  penalties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I pay off my loan early?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can pay off your loan at any time with no prepayment penalties. Making extra payments or
                  paying off your loan early can save you money on interest over the life of the loan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What if I have bad credit score?</AccordionTrigger>
                <AccordionContent>
                  We work with borrowers across the credit spectrum. While having good credit can help you qualify for
                  better rates, we consider multiple factors beyond just credit score. We offer options for those with
                  less-than-perfect credit and can provide guidance on improving your financial profile.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Apply now and get the funds you need as soon as tomorrow.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={'/application'}>
                  <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={'/contact'}>
                  <Button
                    variant="outline"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
     
     <Footer />

    </div>
  )
}

