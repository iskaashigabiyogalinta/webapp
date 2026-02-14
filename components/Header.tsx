'use client'

import Link from 'next/link'
import { translations } from '@/lib/translations'

export default function Header() {
  const t = translations

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Iskaashiga Biyogalinta Hargeysa
          </Link>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <Link 
                href="#about" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {t.nav.howItWorks}
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
            
            <Link
              href="/login"
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors text-sm font-medium"
            >
              {t.nav.login}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
