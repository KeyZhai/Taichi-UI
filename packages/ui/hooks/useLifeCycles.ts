import { useEffect } from 'react'

const useLifeCycles = (onMounted: () => void, unMounted: () => void) => {
  useEffect(() => {
    if (onMounted) {
      onMounted()
    }
    return () => {
      if (unMounted) {
        unMounted()
      }
    }
  }, [])
}

export default useLifeCycles
