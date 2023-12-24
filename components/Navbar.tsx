import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
        <div className=' flex-between mx-auto w-full max-w-sceen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/" >
                <Image src="/logo.svg" alt="logo" width={190} height={100} />
            </Link>
            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 '>
                <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div >
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar