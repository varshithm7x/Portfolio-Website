"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Github, Link as LinkIcon, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";

const TextPressure = dynamic(() => import('./TextPressure'), { ssr: false });

export default function Projects() {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: "Veto",
      description: "A decentralized governance application enabling secure and transparent voting mechanisms on the Lisk blockchain.",
      header: (
        <div className="w-full h-60 rounded-xl overflow-hidden relative">
          <Image
            src="/images/veto.png"
            alt="Veto - Governance App"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-500 grayscale opacity-90 group-hover/bento:opacity-100 dark:opacity-100 dark:brightness-75 group-hover/bento:grayscale-0 group-hover/bento:brightness-100"
          />
        </div>
      ),
      repo: "https://github.com/varshithm7x/Veto",
      link: "https://veto-lisk.vercel.app/",
      tech: "Next.js, Lisk"
    },
    {
      title: "Espadas AI",
      description: "Intelligent interview preparation platform. features real-time voice interviews, AI feedback, and dynamic question generation.",
      header: (
        <div className="w-full h-60 rounded-xl overflow-hidden relative">
          <Image
            src="/images/espadas.png"
            alt="Espadas AI Platform"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-500 grayscale opacity-90 group-hover/bento:opacity-100 dark:opacity-100 dark:brightness-75 group-hover/bento:grayscale-0 group-hover/bento:brightness-100"
          />
        </div>
      ),
      repo: "https://github.com/varshithm7x/Espadas-AI",
      link: "https://espadas-ai.vercel.app",
      tech: "Next.js, Vapi AI, Firebase"
    },
    {
      title: "MathBox",
      description: "Interactive mathematics learning platform with courses, progress tracking, and visual demonstrations.",
      header: (
        <div className="w-full h-60 rounded-xl overflow-hidden relative flex items-center justify-center">
            <TextPressure
              text="SOON!"
              flex={false}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={theme === "dark" ? "#FFFFFF" : "#171717"}
              minFontSize={24}
            />
        </div>
      ),
      repo: null,
      link: null,
      tech: "React, JS, CSS"
    },
    {
      title: "CadGPT",
      description: "AI-powered CAD design assistant that converts natural language descriptions into CAD models. Bridging the gap between language and 3D design.",
      header: (
        <div className="w-full h-60 rounded-xl overflow-hidden relative flex items-center justify-center">
            <TextPressure
              text="SOON!"
              flex={false}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor={theme === "dark" ? "#FFFFFF" : "#171717"}
              minFontSize={24}
            />
        </div>
      ),
      repo: "https://github.com/varshithm7x/CadGPT",
      link: null,
      tech: "Python, AI/ML"
    },
  ];

  return (
    <section id="projects" className="py-10 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200 underline underline-offset-4 decoration-2 decoration-neutral-400 dark:decoration-neutral-600">
            Selected Work
          </h2>
        </div>

        <BentoGrid className="max-w-[52rem] mx-auto md:grid-cols-2 md:auto-rows-[25rem]">
          {projects.map((item, i) => (
            <BentoGridItem
              key={i}
              title={
                <div className="flex items-center justify-between w-full">
                   <span>{item.title}</span>
                   <div className="flex items-center gap-3">
                      {item.repo && (
                        <a href={item.repo} target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {item.link && (
                         <a href={item.link} target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                          <LinkIcon className="w-5 h-5" />
                        </a>
                      )}
                   </div>
                </div>
              }
              description={
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-neutral-700 dark:text-neutral-400">{item.description}</span>
                </div>
              }
              header={item.header}
              className=""
            />
          ))}
        </BentoGrid>

        <div className="flex justify-center mt-12">
           <a 
             href="https://github.com/varshithm7x?tab=repositories"
             target="_blank" 
             rel="noreferrer"
             className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
           >
             More Projects
             <ArrowUpRight className="w-4 h-4" />
           </a>
        </div>
      </div>
    </section>
  );
}
