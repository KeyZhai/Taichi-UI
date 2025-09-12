import type { FC } from 'react'
import type { Color } from '../Color'
import styles from '../style/ColorPicker.module.scss'
import { DotHandler } from './DotHandler'
import { Transform } from './Transform'

export const Palette: FC<{ color: Color }> = ({ color }) => {
  return (
    <div className={styles['color-picker-panel-palette']}>
      <Transform offset={{ x: 0, y: 0 }}>
        <DotHandler color={color.toRgbString()} size="default" />
      </Transform>
      <div
        className={styles['color-picker-panel-palette-main']}
        style={{
          backgroundColor: `hsl(${color.toHsl().h},100%, 50%)`,
          backgroundImage:
            'linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))',
        }}
      ></div>
    </div>
  )
}
