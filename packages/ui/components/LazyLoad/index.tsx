import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, FC, ReactNode } from 'react'

export interface LazyLoadProps {
  className?: string
  style?: CSSProperties
  placeholder?: ReactNode
  offset?: number | string
  width?: number | string
  height?: number | string
  onContentVisible?: () => void
  children: ReactNode
}

export const LazyLoad: FC<LazyLoadProps> = (props) => {
  const {
    className = '',
    style,
    placeholder,
    offset = 0,
    width,
    height,
    onContentVisible,
    children,
  } = props
  const [visible, setVisible] = useState(false)
  const styles = { style, width, height }
  const containerRef = useRef<HTMLDivElement>(null)
  const elementObserver = useRef<IntersectionObserver>(null)

  const lazyloadHandler = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    const { isIntersecting } = entry
    if (isIntersecting) {
      setVisible(true)
      onContentVisible?.()
      const node = containerRef.current
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  }

  useEffect(() => {
    const options: IntersectionObserverInit = {
      rootMargin: typeof offset === 'number' ? `${offset}px` : offset,
      threshold: 0,
    }
    elementObserver.current = new IntersectionObserver(lazyloadHandler, options)
    const node = containerRef.current
    if (node instanceof HTMLElement) {
      elementObserver.current.observe(node)
    }
    return () => {
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={className} style={styles}>
      {visible ? children : placeholder}
    </div>
  )
}
