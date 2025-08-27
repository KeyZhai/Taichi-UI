import type { ReactNode, Ref } from 'react'
import { Icon } from '.'
import type { IconProps } from '.'

interface CreateIconOptions {
  content: ReactNode
  iconProps?: IconProps
  viewBox?: string
}

export const createIcon = (options: CreateIconOptions) => {
  const { content, iconProps = {}, viewBox = '0 0 1024 1024' } = options
  return (props: IconProps, ref: Ref<SVGSVGElement>) => (
    <Icon ref={ref} viewBox={viewBox} {...props} {...iconProps}>
      {content}
    </Icon>
  )
}
