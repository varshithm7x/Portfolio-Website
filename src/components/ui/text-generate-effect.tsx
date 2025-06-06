"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  let wordsArray = words.split(" ")
  
  return (
    <div className={cn("font-bold", className)}>
      <motion.div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-white opacity-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: idx * 0.1,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}
