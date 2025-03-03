import { Wallet, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Eazicred
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/investments" className="text-sm font-medium hover:text-primary">
                Investments
            </Link>
            <Link  href="/advisor-service" className="text-sm font-medium hover:text-primary">
              Advisor Services
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button>Get Started</Button>
            <Menu size={25} className='text-primary lg:hidden sm:block' />
          </div>
        </div>
      </header>
  )
}

export default Header
