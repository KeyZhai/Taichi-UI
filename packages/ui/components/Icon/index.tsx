import type {
  FC,
  PropsWithChildren,
  Ref,
  SVGAttributes,
  CSSProperties,
} from 'react'
import cs from 'classnames'
import styles from './style/Icon.module.scss'
export { createIcon } from './createIcon'
export { createFrontIconFont } from './createFrontIconfont'

type BaseIconProps = {
  className?: string
  style?: CSSProperties
  size?: string | string[]
  spin?: boolean
  ref?: Ref<SVGSVGElement>
}

export type IconProps = BaseIconProps &
  Omit<SVGAttributes<SVGElement>, keyof BaseIconProps>

export const getSize = (size: string | string[]): string[] => {
  if (Array.isArray(size) && size.length === 2) {
    return size as string[]
  }
  const width = (size as string) || '1em'
  const height = (size as string) || '1em'

  return [width, height]
}

export const Icon: FC<PropsWithChildren<IconProps>> = (props) => {
  const { style, className, size = '1em', spin, ref, children, ...rest } = props
  const [width, height] = getSize(size)
  const cn = cs(styles.icon, className, {
    [styles.iconSpin]: spin,
  })
  return (
    <svg
      ref={ref}
      className={cn}
      style={style}
      width={width}
      height={height}
      fill="currentColor"
      {...rest}
    >
      {children}
    </svg>
  )
}
