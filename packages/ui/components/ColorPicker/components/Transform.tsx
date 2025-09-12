import type { FC, ReactNode, Ref } from 'react'

export interface TransformOffset {
  x: number
  y: number
}

export interface TransformProps {
  offset?: TransformOffset
  children: ReactNode
  ref?: Ref<HTMLDivElement>
}

export const Transform: FC<TransformProps> = (props) => {
  const { offset, children, ref } = props
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: offset?.x,
        top: offset?.y,
        zIndex: 1,
      }}
    >
      {children}
    </div>
  )
}
