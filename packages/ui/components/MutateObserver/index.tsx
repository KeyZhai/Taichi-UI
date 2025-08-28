import type { FC, ReactElement } from 'react'
import { cloneElement, useLayoutEffect, useRef, useState } from 'react'
import useMutationObserver from './useMutationObserver'

interface MutationObserverProps {
  options?: MutationObserverInit
  onMutate: (mutations: MutationRecord[], observer: MutationObserver) => void
  children: ReactElement
}

export const MutationObserver: FC<MutationObserverProps> = (props) => {
  const { options, onMutate, children } = props
  const elementRef = useRef<HTMLElement>(null)
  const [target, setTarget] = useState<HTMLElement>()
  useMutationObserver(target!, onMutate, options)
  useLayoutEffect(() => {
    setTarget(elementRef.current!)
  }, [])
  if (!children) return null
  return cloneElement(children, { ref: elementRef } as any)
}
