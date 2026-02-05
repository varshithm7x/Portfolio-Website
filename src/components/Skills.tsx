"use client"

import { motion } from "framer-motion";
import { 
  SiPython, SiTypescript, SiJavascript, SiC, SiCplusplus, 
  SiMysql, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiGit, SiDocker, SiThreedotjs, SiTensorflow, SiFirebase, 
  SiPostgresql, SiGnubash, SiCss3, SiHtml5, SiSolidity, 
  SiYaml, SiBootstrap, SiVite, SiVercel, SiMongodb, SiRedis, 
  SiSupabase, SiHuggingface, SiNpm, SiGithub
} from "react-icons/si";
import { Cpu, Cloud, Layout, Database } from "lucide-react";

export default function Skills() {
  const stack = [
    { name: "C++", icon: SiCplusplus },
    { name: "Bash", icon: SiGnubash },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Solidity", icon: SiSolidity },
    { name: "Python", icon: SiPython },
    { name: "YAML", icon: SiYaml },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
    { name: "Firebase", icon: SiFirebase },
    { name: "Vercel", icon: SiVercel },
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Postgres", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "Supabase", icon: SiSupabase },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "GitHub", icon: SiGithub },
    { name: "npm", icon: SiNpm },
  ];

  return (
    <section id="skills" className="py-10 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[52rem] mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-neutral-800 dark:text-neutral-200 underline underline-offset-4 decoration-2 decoration-neutral-400 dark:decoration-neutral-600">
          Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-default group"
            >
              <item.icon className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
