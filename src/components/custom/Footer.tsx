import { Instagram, Wallet, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col space-y-4">
          <Link className="flex items-center space-x-2" href="/">
            <Wallet className="h-6 w-6" />
            <span className="font-bold">Eazicred</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fast, flexible loans for your future. Eazicred is a financial technology company, not a bank.
          </p>
          <div className="flex space-x-4">
            <Link
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              href="https://www.instagram.com/eazicred.ng?igsh=NTc4MTIwNjQ2YQ=="
            >
              <span className="sr-only">Instagram</span>
              <Instagram className='text-lg' />
            </Link>

            <Link
              className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              href="https://www.linkedin.com/company/eazicred/"
            >
              <span className="sr-only">Instagram</span>
              <Linkedin className='text-lg' />
            </Link>
  
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Product</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/">
                Personal, Business an Asset Financing Loans
              </Link>
              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/investments">
                Investments
              </Link>
              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/advisor-service">
                Advisory
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500 dark:text-gray-400">

              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/contact">
                Contact
              </Link>
              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="hover:text-gray-600 dark:hover:text-gray-300" href="/terms-and-conditions">
                Terms and Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Eazicred. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer