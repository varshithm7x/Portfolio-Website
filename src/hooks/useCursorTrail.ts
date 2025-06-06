"use client"

import { useEffect, useState } from 'react'

export const useCursorTrail = () => {
  const [dots, setDots] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let nextId = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: nextId++
      }
      
      setDots(prev => [...prev.slice(-20), newDot]) // Keep only last 20 dots
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Clean up old dots
    const cleanup = setInterval(() => {
      setDots(prev => prev.slice(-10))
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanup)
    }
  }, [])

  return dots
}
