"use client"
import Image from 'next/image'

export default function Hero() {  
  return (
    <section className="py-4 md:py-8 px-4 md:px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <div className="flex-1 min-w-0">            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-black dark:text-white transition-colors duration-300 leading-tight">
              Varshith
            </h1>            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-1">
              aka VOLT
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Software Engineer
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48">
              <Image
                src="/images/profile.jpeg"
                alt="Varshith's profile picture"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 144px, 192px"
                className="rounded-full object-cover border-2 sm:border-3 md:border-4 border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

