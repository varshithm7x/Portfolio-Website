"use client"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-4 left-4 z-50">
      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-xl p-2 shadow-lg transition-colors duration-300">
        <Image
          src="/images/logo.png"
          alt="Varshith's Logo"
          width={40}
          height={40}
          className="rounded-lg object-contain"
          priority
        />
      </div>
    </header>
  )
}
