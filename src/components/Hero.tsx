"use client"
import Image from 'next/image'

export default function Hero() {  
  return (
    <section className="py-12 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white transition-colors duration-300">
              Hi, I'm Varshith
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 transition-colors duration-300">
              aka VOLT
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48">
              <Image
                src="/images/profile.jpeg"
                alt="Varshith's profile picture"
                fill
                className="rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

