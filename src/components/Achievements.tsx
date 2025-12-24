"use client"

import { Trophy, Award, Calendar } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "HACKHAZARDS '25",
      award: "2nd Prize - Monad Track",
      project: "Ball-Maze with NFT Integration",
      description: "Blockchain gaming project combining traditional ball maze mechanics with NFT integration on Monad network",
      date: "April 2025",
      link: "https://devfolio.co/projects/ballmaze-with-nft-integration-5900",
      tech: "Three.js, Solidity, MetaMask, Monad"
    }
  ]
  return (
    <section id="achievements" className="py-4 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto"><h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300 flex items-center gap-2">
        Achievements
        <Trophy className="w-6 h-6 text-yellow-500" />
      </h2>

        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-gray-200 dark:border-white/10 p-6 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:shadow-lg dark:hover:border-white/20">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>

                  <div className="mb-3">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      🏆 {achievement.award}
                    </div>
                  </div>

                  <h4 className="text-md font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
                    {achievement.project}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300 text-base">
                    {achievement.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                      {achievement.tech}
                    </div>                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {achievement.date}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 inline-block transition-colors duration-300 border border-gray-300 dark:border-white/20 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-sm"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
