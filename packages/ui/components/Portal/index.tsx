import type { ReactNode, FC, Ref } from 'react'
import { useEffect, useImperativeHandle, useMemo } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  attach?: HTMLElement | string
  children: ReactNode
  ref?: Ref<HTMLElement>
}

const getAttach = (attach?: HTMLElement | string) => {
  if (typeof attach === 'string') {
    return document.querySelector(attach)
  }
  if (typeof attach === 'object' && attach instanceof HTMLElement) {
    return attach
  }
  return document.body
}

export const Portal: FC<PortalProps> = (props) => {
  const { attach, children, ref } = props

  const container = useMemo(() => {
    const el = document.createElement('div')
    el.className = `portal-wrapper`
    return el
  }, [])

  useEffect(() => {
    const parentElement = getAttach(attach)
    parentElement?.appendChild(container)
    return () => {
      parentElement?.removeChild(container)
    }
  }, [container, attach])

  useImperativeHandle(ref, () => container)

  return createPortal(children, container)
}
