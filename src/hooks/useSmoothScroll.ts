"use client"

import { useEffect } from 'react'

export const useSmoothScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling for the entire document
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Add Lenis smooth scroll for even smoother experience
    const lenis = async () => {
      const { default: Lenis } = await import('lenis')
        const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    // Only load Lenis in production for better performance
    if (typeof window !== 'undefined') {
      lenis().catch(() => {
        // Fallback to default smooth scroll if Lenis fails
        console.log('Using default smooth scroll')
      })
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])
}
