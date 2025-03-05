'use client'
import { Wallet, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold text-primary">
            <Image src={'/logo.png'} alt='logo' width={130} height={100} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="/" className={`text-md font-medium hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link href="/investments" className={`text-md font-medium hover:text-primary ${isActive('/investments') ? 'text-primary' : ''}`}>
              Investments
            </Link>
            <Link href="/advisor-service" className={`text-md font-medium hover:text-primary ${isActive('/advisor-service') ? 'text-primary' : ''}`}>
              Advisory
            </Link>
            <Link href="/contact" className={`text-md font-medium hover:text-primary ${isActive('/contact') ? 'text-primary' : ''}`}>
              Contact Us
            </Link>
          </nav>

          <Drawer direction='left' modal={false} onClose={() => setOpen(false)} open={open} dismissible >
            <DrawerTrigger asChild>
              <Menu size={25} className='text-primary lg:hidden sm:block cursor-pointer' onClick={() => setOpen(!open)} />
            </DrawerTrigger>
            <DrawerContent className='h-full w-[60%]'>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerClose />
              </DrawerHeader>
              <DrawerDescription>
                <div className="flex flex-col gap-4 pl-6">
                  <Link href="/" className={`text-sm font-medium hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}>
                    Home
                  </Link>
                  <Link href="/investments" className={`text-sm font-medium hover:text-primary ${isActive('/investments') ? 'text-primary' : ''}`}>
                    Investments
                  </Link>
                  <Link href="/advisor-service" className={`text-sm font-medium hover:text-primary ${isActive('/advisor-service') ? 'text-primary' : ''}`}>
                    Advisor
                  </Link>
                  <Link href="/contact" className={`text-sm font-medium hover:text-primary ${isActive('/contact') ? 'text-primary' : ''}`}>
                    Contact Us
                  </Link>
                </div>
              </DrawerDescription>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}

export default Header
