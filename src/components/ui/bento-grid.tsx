"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 shadow-none p-4 dark:bg-[#0d0d0d] dark:border-white/[0.2] bg-white border border-neutral-200 hover:border-black flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div>
        {icon}
        <div className="font-sans font-bold text-neutral-900 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-700 dark:text-neutral-400 text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  )
}
