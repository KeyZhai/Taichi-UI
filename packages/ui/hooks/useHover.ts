import { cloneElement, useState, type ReactElement } from 'react'

type Element = ReactElement | ((hovered: boolean) => ReactElement)

const useHover = (element: Element): [ReactElement, boolean] => {
  const [state, setState] = useState<boolean>(false)

  const onMouseEnter = (originalonMouseEnter?: any) => (event: any) => {
    originalonMouseEnter?.(event)
    setState(true)
  }

  const onMouseLeave = (originalonMouseLeave?: any) => (event: any) => {
    originalonMouseLeave?.(event)
    setState(false)
  }

  let reactElement: ReactElement
  if (typeof element === 'function') {
    reactElement = element(state)
  } else {
    reactElement = element
  }

  const el = cloneElement(reactElement, {
    onMouseEnter: onMouseEnter((reactElement.props as any)?.onMouseEnter),
    onMouseLeave: onMouseLeave((reactElement.props as any)?.onMouseLeave),
  } as any)

  return [el, state]
}
export default useHover
