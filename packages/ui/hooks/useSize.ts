import type { RefObject } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { useState, useEffect } from 'react'

type Size = { width: number; height: number }

const useSize = (targetRef: RefObject<HTMLElement>): Size | undefined => {
  const [size, setSize] = useState<Size | undefined>(() => {
    const el = targetRef.current
    // client = content + padding
    return el ? { width: el.clientWidth, height: el.clientHeight } : undefined
  })

  useEffect(() => {
    const el = targetRef.current
    if (!el) {
      return
    }
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { clientWidth, clientHeight } = entry.target
        setSize({ width: clientWidth, height: clientHeight })
      })
    })
    resizeObserver.observe(el)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return size
}

export default useSize
