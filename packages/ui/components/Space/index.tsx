import type { CSSProperties, ReactNode, HTMLAttributes, FC } from 'react'
export type SizeType = 'small' | 'middle' | 'large' | number | undefined

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: CSSProperties
  size?: SizeType | [SizeType, SizeType]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  split?: ReactNode
  wrap?: boolean
}

export const Space: FC<SpaceProps> = (props) => {
  const { style, className, ...otherprops } = props
  return <div style={style} className={className} {...otherprops}></div>
}
