import React, { useMemo, useContext } from 'react'
import type { CSSProperties, ReactNode, HTMLAttributes, FC } from 'react'
import cs from 'classnames'
import styles from './style/Space.module.scss'
import { ConfigContext } from './ConfigProvider'
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

export enum SpaceSize {
  small = 8,
  middle = 16,
  large = 24,
}

const getNumberSize = (size: SizeType) => {
  return typeof size === 'number' ? size : (size ? SpaceSize[size] : 0) || 0
}

export const Space: FC<SpaceProps> = (props) => {
  const { space } = useContext(ConfigContext)
  const {
    style,
    className,
    direction = 'horizontal',
    size = space?.size || 'small',
    align,
    split,
    wrap = false,
    ...otherprops
  } = props
  const mergedAlign =
    direction === 'horizontal' && align === undefined ? 'center' : align
  const cn = cs(
    styles.space,
    styles[`space-${direction}`],
    {
      [styles[`space-align-${mergedAlign}`]]: mergedAlign,
    },
    className,
  )
  const childNodes = React.Children.toArray(props.children)
  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`
    return (
      <>
        <div key={key} className={styles['space-item']}>
          {child}
        </div>
        {split && childNodes.length > 1 && (
          <div className={styles[`${className}-split`]} style={style}>
            {split}
          </div>
        )}
      </>
    )
  })
  const otherStyles: CSSProperties = {}
  const [horizontal, vertical] = useMemo(() => {
    return Array.isArray(size)
      ? size
      : ([size, size] as [SizeType, SizeType]).map((item) =>
          getNumberSize(item),
        )
  }, [size])

  otherStyles.columnGap = horizontal
  otherStyles.rowGap = vertical
  if (wrap) {
    otherStyles.flexWrap = 'wrap'
  }

  return (
    <div style={{ ...style, ...otherStyles }} className={cn} {...otherprops}>
      {nodes}
    </div>
  )
}
