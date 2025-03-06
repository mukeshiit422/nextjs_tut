"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navigation() {
const path = usePathname();
  return (
    <nav className='align-center text center'>
        <Link href="/" className={path === "/" ? "mr-4 text-white-500": 'mr-4 text-blue-500'}>Home</Link>
        <Link href="/about"  className={path === "/about" ? "mr-4 text-white-500": 'mr-4 text-blue-500'}>About</Link>
        <Link href="/product/mobile"  className={path === "/product/mobile" ? "mr-4 text-white-500": 'mr-4 text-blue-500'}>Product</Link>
    </nav>
  )
}
