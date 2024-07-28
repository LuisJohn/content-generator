import Link from 'next/link'
import React from 'react'
import Auth from './Auth'

export default function Navbar() {
  return (
    <header className="mx-4 px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <h1 className="text-xl font-bold">LOGO</h1>
          <span className="sr-only">Acme AI Content Generator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
        
          {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Auth
          </Link> */}
          <Auth/>
        </nav>
      </header>
  )
}
