import {
  useInteractions,
  useFloating,
  useHover,
  useClick,
  useDismiss,
  FloatingArrow,
  offset,
  flip,
  arrow,
} from '@floating-ui/react'
import type { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react'
import { useRef, useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import styles from './style/Popover.module.scss'
type Alignment = 'start' | 'end'
type Side = 'top' | 'right' | 'bottom' | 'left'
type AlignedPlacement = `${Side}-${Alignment}`

interface PopoverProps extends PropsWithChildren {
  content: ReactNode
  trigger?: 'hover' | 'click'
  placement?: Side | AlignedPlacement
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: CSSProperties
}

export const Popover: FC<PopoverProps> = (props) => {
  const {
    open,
    onOpenChange,
    content,
    children,
    trigger = 'hover',
    placement = 'bottom',
    className,
    style,
  } = props
  const [isOpen, setIsOpen] = useState(open)
  const arrowRef = useRef(null)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open)
      onOpenChange?.(open)
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip(),
    ],
  })
  const interactions =
    trigger === 'hover' ? useHover(context) : useClick(context)
  const dismiss = useDismiss(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([
    interactions,
    dismiss,
  ])
  const el = useMemo(() => {
    const el = document.createElement('div')
    el.className = 'popover-wrapper'
    document.body.appendChild(el)
    return el
  }, [])

  const floating = isOpen && (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className={styles.popoverFloating}
      {...getFloatingProps()}
    >
      {content}
      <FloatingArrow
        ref={arrowRef}
        context={context}
        fill="#fff"
        stroke="#000"
        strokeWidth={1}
      />
    </div>
  )

  return (
    <>
      <span
        ref={refs.setReference}
        style={style}
        className={className}
        {...getReferenceProps()}
      >
        {children}
      </span>
      {createPortal(floating, el)}
    </>
  )
}
