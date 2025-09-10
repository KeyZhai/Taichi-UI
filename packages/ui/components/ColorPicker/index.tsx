import type { CSSProperties, FC } from 'react'
import { useState } from 'react'
import classnames from 'classnames'
import { Color } from './Color'
import type { ColorType } from './interface'
export interface ColorPickerProps {
  style?: CSSProperties
  className?: string
  value: ColorType
  onChange: (value: Color) => void
}

export const ColorPicker: FC<ColorPickerProps> = (props) => {
  const { style, className, value, onChange } = props
  const cs = classnames('color-picker', className)
  const [colorValue, setColorValue] = useState<Color>(() => {
    if (value instanceof Color) {
      return value
    }
    return new Color(value)
  })
  return (
    <div className={cs} style={style}>
      <Palette color={colorValue}></Palette>
    </div>
  )
}
