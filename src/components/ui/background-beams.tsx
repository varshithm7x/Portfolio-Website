"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
      >
        <g clipPath="url(#clip0_17_60)">
          <g filter="url(#filter0_f_17_60)">
            <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="url(#paint0_linear_17_60)"></path>
            <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="url(#paint1_linear_17_60)"></path>
            <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="url(#paint2_linear_17_60)"></path>
            <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="url(#paint3_linear_17_60)"></path>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_17_60"
            x="-159.933"
            y="-159.933"
            width="719.867"
            height="719.867"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
            <feGaussianBlur stdDeviation="79.9667" result="effect1_foregroundBlur_17_60"></feGaussianBlur>
          </filter>
          <linearGradient
            id="paint0_linear_17_60"
            x1="90.9504"
            y1="67.4955"
            x2="0.0000"
            y2="322.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_17_60"
            x1="51.5"
            y1="67.5"
            x2="240"
            y2="400"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint2_linear_17_60"
            x1="320"
            y1="400"
            x2="400"
            y2="78.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2"></stop>
          </linearGradient>
          <linearGradient
            id="paint3_linear_17_60"
            x1="400"
            y1="0"
            x2="51.5"
            y2="67.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0"></stop>
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2"></stop>
          </linearGradient>
          <clipPath id="clip0_17_60">
            <rect width="400" height="400" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
