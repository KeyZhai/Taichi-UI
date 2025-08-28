import copy from 'copy-to-clipboard'
import { Children, cloneElement } from 'react'
import type { FC, ReactElement } from 'react'
export interface CopyToClipboardProps {
  text: string
  children: ReactElement
  onCopy?: (text: string, result: boolean) => void
  options?: {
    debug?: boolean
    message?: string
    format?: string
  }
}

export const CopyToClipboard: FC<CopyToClipboardProps> = (props) => {
  const { text, onCopy, options, children } = props
  // 断言children只有一个元素
  const elem = Children.only(children)

  function onClick(event: MouseEvent) {
    const elem = Children.only(children)
    const res = copy(text, options)

    if (onCopy) {
      onCopy(text, res)
    }

    if (typeof (elem?.props as any)?.onClick === 'function') {
      ;(elem.props as any).onClick(event)
    }
  }

  return cloneElement(elem, { onClick } as any)
}
