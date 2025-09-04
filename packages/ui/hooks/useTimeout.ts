import { useCallback, useEffect, useRef } from 'react'

const useTimeout = (callback: () => void, delay: number) => {
  const fnRef = useRef<Function>(callback)
  // 因为fnRef只会在组件初始化的时候赋值current，为了避免闭包，每次组件刷新都需要手动重新赋值
  fnRef.current = callback

  const timerRef = useRef<number>(null)
  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  }, [])
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      fnRef.current()
    }, delay)
    return clear
  }, [delay])
}

export default useTimeout
