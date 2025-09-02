import type { RefObject } from 'react'
import { useState, useEffect } from 'react'

const useScrolling = (ref: RefObject<HTMLElement>) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false)
  useEffect(() => {
    if (ref?.current) {
      let timer: number
      const handleScroll = () => {
        setIsScrolling(true)
        clearTimeout(timer)
        timer = setTimeout(() => {
          setIsScrolling(false)
        }, 100)
      }
      ref.current.addEventListener('scroll', handleScroll)
      return () => {
        ref.current?.removeEventListener('scroll', handleScroll)
      }
    }
    return () => {}
  }, [ref])

  return isScrolling
}

export default useScrolling
