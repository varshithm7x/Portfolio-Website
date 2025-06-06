"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingNavProps {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
  }[]
  className?: string
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "fixed top-4 left-1/2 transform -translate-x-1/2 z-50",
        "flex items-center justify-center space-x-4",
        "bg-black/20 backdrop-blur-lg border border-white/10",
        "rounded-full px-6 py-3",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative flex items-center space-x-1 text-neutral-300 hover:text-blue-400",
            "transition-colors duration-200 px-3 py-1 rounded-full",
            "hover:bg-white/5"
          )}
        >
          {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
          <span className="text-sm font-medium">{navItem.name}</span>
        </a>
      ))}
    </motion.div>
  )
}
