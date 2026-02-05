"use client"

import { GitHubCalendar } from 'react-github-calendar'
import { useTheme } from '@/context/ThemeContext'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContributionGraph() {
  const { theme } = useTheme()
  const [shouldLoad, setShouldLoad] = useState(false)
  
  return (
    <section className="pt-0 pb-5 px-6 md:px-12 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[52rem] mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "100px" }}
           onViewportEnter={() => setShouldLoad(true)}
           transition={{ duration: 0.5 }}
           className="w-full"
        >
          <div className="w-full overflow-x-auto text-left custom-scrollbar pb-2">
                {shouldLoad ? (
                  <GitHubCalendar 
                      username="varshithm7x" 
                      colorScheme={theme}
                      fontSize={12}
                      blockSize={12.7}
                      blockMargin={3}
                      showColorLegend={true}
                      showTotalCount={true}
                      showWeekdayLabels={false}
                      theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                  />
                ) : (
                  <div className="w-full h-[150px] animate-pulse bg-neutral-100 dark:bg-neutral-900/30 rounded-xl" />
                )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
