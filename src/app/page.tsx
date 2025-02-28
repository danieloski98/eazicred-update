'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  Lock,
  MessageSquare,
  Shield,
  Star,
  Wallet,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LoanCalculator from "@/components/custom/LoanCalculator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primaryColor" />
            <span className="text-xl font-bold text-primaryColor">Eazicred</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Personal Loans
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Business Loans
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Mortgage
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:block text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primaryColor">
                    Fast & Flexible Loans for Every Need
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get the funds you need with competitive rates and flexible terms. Apply online in minutes and
                    receive a decision today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1 bg-primaryColor text-white">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-primaryColor text-primaryColor">
                    Calculate Your Rate
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primaryColor" />
                    <span>No hidden fees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primaryColor" />
                    <span>Secure process</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primaryColor" />
                    <span>Fast approval</span>
                  </div>
                </div>
              </div>


              <LoanCalculator />


            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-primaryColor border-primaryColor">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primaryColor">Lending Made Simple</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've streamlined the loan process to make borrowing easier, faster, and more transparent.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 border-primaryColor">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-primaryColor" />
                </div>
                <h3 className="text-xl font-bold text-primaryColor">Quick Application</h3>
                <p className="text-center text-muted-foreground">
                  Complete our simple online application in as little as 5 minutes.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 border-primaryColor">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primaryColor" />
                </div>
                <h3 className="text-xl font-bold text-primaryColor">Secure Process</h3>
                <p className="text-center text-muted-foreground">
                  Your data is protected with bank-level security and encryption.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 border-primaryColor">
                <div className="rounded-full bg-primary/10 p-3">
                  <DollarSign className="h-6 w-6 text-primaryColor" />
                </div>
                <h3 className="text-xl font-bold text-primaryColor">Competitive Rates</h3>
                <p className="text-center text-muted-foreground">
                  Get access to competitive interest rates and flexible repayment terms.
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
                  <div className="inline-flex items-center rounded-full border bg-background px-2.5 py-0.5 text-xs font-semibold border-primaryColor text-primaryColor">
                    How It Works
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primaryColor">
                    Three Simple Steps to Get Your Loan
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our streamlined process makes it easy to get the funds you need quickly.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-primaryColor">Apply Online</h3>
                      <p className="text-muted-foreground">
                        Fill out our simple application form with your personal and financial details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-primaryColor">Get Approved</h3>
                      <p className="text-muted-foreground">
                        Receive a decision quickly, often within minutes. We'll review your application and provide loan
                        options.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-primaryColor">Receive Funds</h3>
                      <p className="text-muted-foreground">
                        Once approved, funds can be deposited directly into your bank account as soon as the next
                        business day.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="gap-1 text-primaryColor">
                    Start Your Application <ChevronRight className="h-4 w-4 text-primaryColor" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/pay.svg"
                  width={500}
                  height={500}
                  alt="Loan application process"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primaryColor">Loan Options for Every Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our range of loan products designed to meet your specific financial needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="border-primaryColor">
                <CardContent className="p-6 border-primaryColor">
                  <div className="flex flex-col items-center space-y-4">
                    <CreditCard className="h-12 w-12 text-primaryColor" />
                    <h3 className="text-xl font-bold text-primaryColor">Personal Loans</h3>
                    <p className="text-center text-muted-foreground">$1,000 - $50,000</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Debt consolidation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Home improvements</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Major purchases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Medical expenses</span>
                      </li>
                    </ul>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primaryColor">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Wallet className="h-12 w-12 text-primaryColor" />
                    <h3 className="text-xl font-bold text-primaryColor">Business Loans</h3>
                    <p className="text-center text-muted-foreground">$10,000 - $500,000</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Working capital</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Equipment financing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Business expansion</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Inventory purchase</span>
                      </li>
                    </ul>
                    <Button className="w-full">Learn More</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primaryColor">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <Lock className="h-12 w-12 text-primaryColor" />
                    <h3 className="text-xl font-bold text-primaryColor">Secured Loans</h3>
                    <p className="text-center text-muted-foreground">$5,000 - $250,000</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Lower interest rates</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Higher borrowing limits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Longer repayment terms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Flexible collateral options</span>
                      </li>
                    </ul>
                    <Button className="w-full">Learn More</Button>
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
                <div className="inline-flex items-center rounded-full border bg-background px-2.5 py-0.5 text-xs font-semibold text-primaryColor border-primaryColor">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primaryColor">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our customers have to say about their experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primaryColor text-primaryColor" />
                        ))}
                    </div>
                    <p className="text-muted-foreground">
                      "The application process was incredibly simple, and I received my funds within 24 hours. The
                      customer service team was helpful and responsive throughout."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="Customer"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Personal Loan Customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primaryColor text-primaryColor" />
                        ))}
                    </div>
                    <p className="text-muted-foreground">
                      "As a small business owner, I needed capital quickly to take advantage of a growth opportunity.
                      LoanEase delivered with competitive rates and minimal paperwork."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="Customer"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Michael Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Business Loan Customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primaryColor text-primaryColor" />
                        ))}
                    </div>
                    <p className="text-muted-foreground">
                      "I was able to consolidate my high-interest debt into one manageable monthly payment. The interest
                      rate was much lower than I expected, and the process was transparent from start to finish."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-1">
                        <Image
                          src="/placeholder.svg?height=40&width=40"
                          width={40}
                          height={40}
                          alt="Customer"
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Jennifer Lee</p>
                        <p className="text-xs text-muted-foreground">Debt Consolidation Customer</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primaryColor">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our loan products and application process.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primaryColor font-semibold" >How do I qualify for a loan?</AccordionTrigger>
                  <AccordionContent>
                    Qualification criteria vary by loan type, but generally include factors such as credit score,
                    income, employment history, and debt-to-income ratio. We consider multiple factors beyond just
                    credit score to provide the best possible loan options.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primaryColor font-semibold" >How long does the application process take?</AccordionTrigger>
                  <AccordionContent>
                    Our online application takes as little as 5 minutes to complete. Most applicants receive a decision
                    within minutes, and if approved, funds can be deposited as soon as the next business day after all
                    verification is complete.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primaryColor font-semibold" >What interest rates do you offer?</AccordionTrigger>
                  <AccordionContent>
                    Interest rates vary based on loan type, amount, term, and your credit profile. Our rates are
                    competitive and personalized based on your specific situation. You can check your rate without
                    affecting your credit score.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primaryColor font-semibold" >Are there any fees associated with your loans?</AccordionTrigger>
                  <AccordionContent>
                    We pride ourselves on transparency. Some loans may include an origination fee, which is clearly
                    disclosed before you accept the loan. There are no hidden fees, no application fees, and no
                    prepayment penalties.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primaryColor font-semibold" >Can I pay off my loan early?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can pay off your loan at any time with no prepayment penalties. Making extra payments or
                    paying off your loan early can save you money on interest over the life of the loan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-primaryColor font-semibold" >What if I have bad credit?</AccordionTrigger>
                  <AccordionContent>
                    We work with borrowers across the credit spectrum. While having good credit can help you qualify for
                    better rates, we consider multiple factors beyond just credit score. We offer options for those with
                    less-than-perfect credit and can provide guidance on improving your financial profile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                  <p className="md:text-xl">Apply now and get the funds you need as soon as tomorrow.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Speak to an Advisor
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg bg-muted/10 p-6">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Have Questions?</h3>
                </div>
                <p>
                  Our loan specialists are available to answer any questions you may have about our loan products or
                  application process.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col space-y-2 rounded-lg bg-muted/20 p-4">
                    <p className="text-sm font-medium">Call Us</p>
                    <p className="text-lg font-bold">1-800-555-LOAN</p>
                    <p className="text-xs">Mon-Fri: 8am-8pm ET</p>
                  </div>
                  <div className="flex flex-col space-y-2 rounded-lg bg-muted/20 p-4">
                    <p className="text-sm font-medium">Email Us</p>
                    <p className="text-lg font-bold">support@loanease.com</p>
                    <p className="text-xs">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">LoanEase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making lending simple, transparent, and accessible for everyone.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Facebook</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Instagram</span>
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Products</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Personal Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Business Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Debt Consolidation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Home Improvement Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Auto Loans
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} LoanEase. All rights reserved.</p>
            <p className="mt-2">
              LoanEase is a financial technology company, not a bank. Banking services provided by our partner banks.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

