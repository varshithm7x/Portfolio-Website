"use client"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <main className="max-w-5xl mx-auto pb-8 bg-white dark:bg-black transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <Contact />
    </div>
  )
}
