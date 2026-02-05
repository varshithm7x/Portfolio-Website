"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, FileText, Coffee } from 'lucide-react'
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-8 md:pt-24 md:pb-12 px-6 md:px-12 overflow-hidden text-black dark:text-white transition-colors duration-300">
      
      <div className="max-w-[52rem] mx-auto z-10 w-full relative">
        <div className="flex flex-col items-start gap-10">
          
          {/* Header Row: Image & Name */}
          <div className="flex gap-8">
            <div 
               className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Varshith"
                fill
                sizes="(max-width: 768px) 96px, 112px"
                className="object-cover rounded-2xl border-2 border-white dark:border-neutral-800 shadow-lg"
                priority
              />
            </div>

            <div
              className="flex flex-col justify-between py-1"
            >
              <div className="text-sm font-bold font-mono tracking-widest text-violet-600 dark:text-violet-400">
                aka VOLT
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
                  Varshith
                </h1>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start space-y-8">
            <div>
              <div className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-full">
                <p className="mb-2">
                   I engineer immersive web applications armed with <TechBadge><SiTypescript className="w-4 h-4 mr-1 text-[#3178C6]" /> TypeScript</TechBadge>, <TechBadge><SiReact className="w-4 h-4 mr-1 text-[#61DAFB]" /> React</TechBadge>, and <TechBadge><SiNextdotjs className="w-4 h-4 mr-1 text-black dark:text-white" /> Next.js</TechBadge>.
                </p>
                <p className="mb-3">
                   Deeply focused on building <span className="font-semibold text-black dark:text-white">Web3</span> solutions and interactive <span className="font-semibold text-black dark:text-white">3D Web</span> environments.
                </p>
                <p>
                   My goal is to build scalable products that look great, feel natural, and perform exceptionally well.
                </p>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-4"
            >
               <a 
                 href="https://buymeacoffee.com/voltcodes"
                 target="_blank"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
               >
                  <Coffee className="w-4 h-4" />
                  Buy Me a Coffee
               </a>
               <a 
                 href="mailto:m7xvoltx@gmail.com"
                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-80 transition-opacity"
               >
                  <Mail className="w-4 h-4" />
                  Email
               </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-lg font-semibold mx-1 align-middle">
      {children}
    </span>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-black dark:hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}
