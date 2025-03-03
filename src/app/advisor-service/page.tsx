'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Handshake, PieChart } from "lucide-react"
import Link from "next/link"
import Header from "@/components/custom/Header"
import { ContactModal } from "@/components/custom/ContactModal"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function AdvisorServices() {
  const { isOpen, openModal, closeModal } = useContactModal();
  return (
    <div className="flex min-h-screen flex-col">

      <ContactModal isOpen={isOpen} onClose={() => closeModal()} />

      <Header />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Expert Financial Guidance at Your Fingertips
              </h1>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Our team of experienced advisors is here to help you make informed financial decisions and achieve your
                goals.
              </p>
              <div className="space-x-4">
                <Button size="lg" onClick={openModal}>Book a Consultation</Button>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Advisor Services</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Comprehensive financial advice tailored to your unique situation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="h-40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-6 w-6 text-primary" />
                    Financial Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Develop a comprehensive financial plan to achieve your short and long-term goals.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-6 w-6 text-primary" />
                    Loan Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Get expert advice on choosing the right loan products for your needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Financial Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Learn about personal finance, investing, and money management through our workshops.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Work with Our Advisors?</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Experience the benefits of personalized financial guidance.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Expert Knowledge</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our advisors have years of experience and stay up-to-date with the latest financial trends and
                  regulations.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Personalized Approach</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  We tailor our advice to your unique financial situation, goals, and risk tolerance.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Unbiased Recommendations</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Our advisors provide objective advice, always putting your interests first.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  We&apos;re here for you long-term, helping you adjust your financial strategy as your life changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a free consultation with one of our expert advisors today.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" size="lg" onClick={openModal}>
                  Book Appointment
                </Button>
                {/* <Button variant="outline" size="lg">
                  View Advisor Profiles
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="mx-auto max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Find answers to common questions about our advisor services.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much does a consultation cost?</AccordionTrigger>
                  <AccordionContent>
                    Your initial consultation is completely free. During this session, we&apos;ll discuss your financial
                    situation and goals, and determine how our services can best help you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What should I prepare for my first meeting?</AccordionTrigger>
                  <AccordionContent>
                    For your first meeting, it&apos;s helpful to bring recent financial statements, information about your
                    income and expenses, and any specific financial questions or goals you have. Don&apos;t worry if you
                    don&apos;t have everything – we can guide you through the process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often should I meet with my advisor?</AccordionTrigger>
                  <AccordionContent>
                    The frequency of meetings depends on your individual needs and preferences. Typically, we recommend
                    quarterly check-ins, with additional meetings as needed for significant life events or changes in
                    your financial situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I change my advisor if I&apos;m not satisfied?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely. We want you to feel comfortable and confident with your advisor. If you feel that
                    another advisor might be a better fit, we&apos;re happy to arrange a switch at any time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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

