"use client"

import dynamic from 'next/dynamic'
import Hero from "@/components/Hero"
import { useTheme } from "@/context/ThemeContext"

const ContributionGraph = dynamic(() => import("@/components/ContributionGraph"))
const Skills = dynamic(() => import("@/components/Skills"))
const Projects = dynamic(() => import("@/components/Projects"))
const Achievements = dynamic(() => import("@/components/Achievements"))
const Contact = dynamic(() => import("@/components/Contact"))
const PixelBlast = dynamic(() => import("@/components/ui/pixel-blast"), { ssr: false })

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen transition-colors duration-300 selection:bg-neutral-200 dark:selection:bg-neutral-800 relative">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-[#0b0b0b] transition-colors duration-300">
         <PixelBlast
           variant="triangle"
           pixelSize={3}
           color={theme === 'dark' ? '#ffffff' : 'blue'}
           pixelSizeJitter={0.35}
           patternScale={3.75}
           patternDensity={0.80}
           speed={2}
           edgeFade={0.2}
           enableRipples={true}
           liquid={false}
        />
      </div>
      
      <main className="w-full relative flex justify-center">
        <div className="w-full max-w-[80rem] min-h-screen overflow-hidden bg-[linear-gradient(90deg,transparent_0%,#ffffffd9_15%,#ffffffd9_85%,transparent_100%)] dark:bg-[linear-gradient(90deg,transparent_0%,#0b0b0bd9_15%,#0b0b0bd9_85%,transparent_100%)]">
          <Hero />
          <ContributionGraph />
          <Projects />
          <Skills />
          <Achievements />
          

        </div>
      </main>
      <Contact />
    </div>
  )
}
