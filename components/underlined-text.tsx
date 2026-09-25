'use client'

import React, { useState } from 'react'
import { useInView } from '@/hooks/use-in-view'

interface UnderlinedTextProps {
  children: React.ReactNode
  className?: string
  textClassName?: string
  strokeWidth?: number
  delay?: string
  duration?: string
}

export default function UnderlinedText({
  children,
  className = '',
  textClassName = 'font-serif italic font-normal text-blue-700 dark:text-blue-400',
  strokeWidth = 3.5,
  delay = '0.2s',
  duration = '1.2s',
}: UnderlinedTextProps) {
  const { ref, isInView, replayKey, triggerReplay } = useInView<HTMLSpanElement>({
    threshold: 0.15,
  })
  const [hoverCount, setHoverCount] = useState(0)

  const handleHover = () => {
    triggerReplay()
    setHoverCount((c) => c + 1)
  }

  const activeKey = `${replayKey}-${hoverCount}`

  return (
    <span
      ref={ref}
      className={`relative inline-block sm:whitespace-nowrap px-1 cursor-pointer select-none ${className}`}
      onMouseEnter={handleHover}
      title="Hover to replay underline"
    >
      <span className={`relative z-10 ${textClassName}`}>
        {children}
      </span>
      <svg
        key={activeKey}
        className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-3 sm:h-3.5 text-blue-500/80 dark:text-blue-400 overflow-visible pointer-events-none"
        viewBox="0 0 300 20"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M3 14.5C65 5.5 170 -1.5 295 11.5"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          className={isInView ? 'ink-path' : 'opacity-0'}
          style={
            {
              '--len': 320,
              '--dur': duration,
              '--delay': hoverCount > 0 ? '0s' : delay,
            } as React.CSSProperties
          }
        />
      </svg>
    </span>
  )
}
