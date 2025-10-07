'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Ayni Sree Engineering Projects logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">AYNI SREE</div>
              <div className="text-sm text-orange-600 font-semibold">ENGINEERING PROJECTS</div>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200">
              About
            </Link>
            <Link href="/services" className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Services
            </Link>
            <Link href="/projects" className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Projects
            </Link>
            <Link href="/company-info" className="text-slate-700 hover:text-orange-600 font-medium transition-colors duration-200">
              Company
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-slate-800"></div>
              <div className="w-full h-0.5 bg-slate-800"></div>
              <div className="w-full h-0.5 bg-slate-800"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/about" className="text-slate-700 hover:text-orange-600 font-medium">About</Link>
              <Link href="/services" className="text-slate-700 hover:text-orange-600 font-medium">Services</Link>
              <Link href="/projects" className="text-slate-700 hover:text-orange-600 font-medium">Projects</Link>
              <Link href="/company-info" className="text-slate-700 hover:text-orange-600 font-medium">Company</Link>
              <Link href="/contact" className="btn-primary inline-block text-center">Get Quote</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}