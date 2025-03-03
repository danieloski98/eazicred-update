import Link from "next/link"
import { ArrowRight, DollarSign, Gauge, Shield, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/custom/Header"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primaryColor">
                  Fast, Flexible Loans for Your Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get the funds you need with competitive rates and a seamless online application process.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose LoanSwift</h2>
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
                  <DollarSign className="h-10 w-10 mb-4 text-primary" />
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
                    <li>Borrow up to $50,000</li>
                    <li>Fixed interest rates</li>
                    <li>Terms up to 60 months</li>
                    <li>No collateral required</li>
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
                    <li>Borrow up to $250,000</li>
                    <li>Flexible repayment terms</li>
                    <li>Quick access to funds</li>
                    <li>Tailored for small to medium businesses</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Home Improvement Loans</CardTitle>
                  <CardDescription>Transform your living space</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Borrow up to $100,000</li>
                    <li>Competitive interest rates</li>
                    <li>No home equity required</li>
                    <li>Fast funding for your projects</li>
                  </ul>
                </CardContent>
              </Card>
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
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Sarah J."
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h3 className="font-semibold">Sarah J.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Personal Loan Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The application process was incredibly smooth, and I received my funds within 24 hours. Highly
                    recommended!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Michael R."
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h3 className="font-semibold">Michael R.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Business Loan Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "LoanSwift provided the capital I needed to expand my business. Their rates were unbeatable."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="Emily T."
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h3 className="font-semibold">Emily T.</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Home Improvement Loan Customer</p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Thanks to LoanSwift, we were able to renovate our kitchen without touching our savings. Great
                    service!"
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
                  Loan Amount: $25,000
                </label>
                <Slider id="loan-amount" defaultValue={[25000]} max={100000} step={1000} />
              </div>
              <div className="space-y-2">
                <label htmlFor="loan-term" className="text-sm font-medium">
                  Loan Term: 36 months
                </label>
                <Slider id="loan-term" defaultValue={[36]} max={60} step={12} />
              </div>
              <div className="space-y-2">
                <label htmlFor="credit-score" className="text-sm font-medium">
                  Credit Score Range
                </label>
                <Select defaultValue="good">
                  <SelectTrigger id="credit-score">
                    <SelectValue placeholder="Select credit score range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (720+)</SelectItem>
                    <SelectItem value="good">Good (680-719)</SelectItem>
                    <SelectItem value="fair">Fair (640-679)</SelectItem>
                    <SelectItem value="poor">Poor (below 640)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Check Your Rate</Button>
              <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
                Checking your rate won't affect your credit score
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
                  Our online application takes as little as 5 minutes to complete. Most applicants receive a decision
                  within minutes, and if approved, funds can be deposited as soon as the next business day.
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
                <AccordionTrigger>What if I have bad credit?</AccordionTrigger>
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
                <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                  Start Your Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col space-y-4">
              <Link className="flex items-center space-x-2" href="/">
                <Wallet className="h-6 w-6" />
                <span className="font-bold">LoanSwift</span>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fast, flexible loans for your future. LoanSwift is a financial technology company, not a bank.
              </p>
              <div className="flex space-x-4">
                <Link
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  href="#"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  href="#"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold">Product</h3>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Personal Loans
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Business Loans
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Home Improvement
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    How It Works
                  </Link>
                </nav>
              </div>
              <div>
                <h3 className="font-semibold">Company</h3>
                <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    About Us
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Careers
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Contact
                  </Link>
                  <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="#">
                    Privacy Policy
                  </Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023 LoanSwift. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

