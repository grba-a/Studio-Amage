'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Extra delay before the element fades in, in milliseconds */
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeInOnScroll({
  children,
  className = '',
  style,
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.style.transitionDelay = delay ? `${delay}ms` : ''
        el.classList.add('fade-in-visible')
        observer.unobserve(el)
      },
      { threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-in-${direction} ${className}`} style={style}>
      {children}
    </div>
  )
}
