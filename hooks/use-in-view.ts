'use client'

import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const { threshold = 0.2, rootMargin = '0px', triggerOnce = true } = options
  const ref = useRef<T | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [replayKey, setReplayKey] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  // Allows replaying animations on hover or click
  const triggerReplay = () => {
    setReplayKey((prev) => prev + 1)
  }

  return { ref, isInView, replayKey, triggerReplay }
}
