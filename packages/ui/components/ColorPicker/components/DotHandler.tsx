import type { FC } from 'react'
import classnames from 'classnames'

type DotSize = 'small' | 'default'
export interface DotHandlerProps {
  color: string
  size: DotSize
}

export const DotHandler: FC<DotHandlerProps> = (props) => {
  const { color, size = 'default' } = props

  return (
    <div
      className={classnames(`color-picker-panel-palette-handler`, {
        [`color-picker-panel-palette-handler-sm`]: size === 'small',
      })}
      style={{
        backgroundColor: color,
      }}
    />
  )
}
