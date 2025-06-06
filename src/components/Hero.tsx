"use client"

export default function Hero() {  return (
    <section className="py-12 px-6 bg-white dark:bg-black transition-colors duration-300">      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-black dark:text-white transition-colors duration-300">
          Hi, I'm Varshith
        </h1>
        
        <button className="border border-black dark:border-white py-1 px-6 rounded text-black dark:text-white bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-all text-xs">
          Run Script
        </button>
      </div>
    </section>
  )
}

