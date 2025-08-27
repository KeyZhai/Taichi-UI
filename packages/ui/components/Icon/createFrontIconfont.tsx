import type { IconProps } from '.'
import { Icon } from '.'

const loadedSet = new Set<string>()

export const createFrontIconFont = (scriptUrl: string) => {
  if (
    typeof scriptUrl === 'string' &&
    !loadedSet.has(scriptUrl) &&
    scriptUrl.length
  ) {
    const script = document.createElement('script')
    script.setAttribute('src', scriptUrl)
    script.setAttribute('data-namespace', scriptUrl)
    document.body.appendChild(script)
    loadedSet.add(scriptUrl)
  }

  const Iconfont = (props: IconProps) => {
    const { type, ref, ...rest } = props
    return (
      <Icon ref={ref} {...rest}>
        {type ? <use xlinkHref={`#${type}`} /> : null}
      </Icon>
    )
  }

  return Iconfont
}
