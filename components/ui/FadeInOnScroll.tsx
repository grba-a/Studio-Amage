interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

// Scroll animations disabled — all elements render visible immediately.
// Re-enable IntersectionObserver-based animation after images are verified working.
export default function FadeInOnScroll({
  children,
  className = '',
  style,
}: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
