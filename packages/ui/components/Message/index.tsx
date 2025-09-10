import { createPortal } from 'react-dom'
import type { CSSProperties, FC, ReactNode, Ref } from 'react'
import { useMemo, useImperativeHandle } from 'react'
import { useStore } from './hooks/useStore'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './style/Message.module.scss'
import { useTimer } from './hooks/useTimer'
export type Position = 'top' | 'bottom'

export interface MessageProps {
  style?: CSSProperties
  className?: string | string[]
  content: ReactNode
  duration?: number
  onClose?: (...args: any) => void
  id?: number
  postion?: Position
}

export interface MessageRef {
  add: (messageProps: MessageProps) => number
  remove: (id: number) => void
  update: (id: number, messageProps: MessageProps) => void
  clearAll: () => void
}

const MessageItem: FC<MessageProps> = (item) => {
  const { onClose, id, duration } = item
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: id!,
    duration: duration,
    remove: onClose!,
  })
  return (
    <div
      className={styles['message-item']}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.content}
    </div>
  )
}

export const MessageProvider: FC<{ ref: Ref<MessageRef> }> = (props) => {
  const { ref } = props
  const { messageList, add, update, remove, clearAll } = useStore('top')
  const positions = Object.keys(messageList)
  if ('current' in ref!) {
    ref.current = {
      add,
      update,
      remove,
      clearAll,
    }
  }
  // useImperativeHandle(ref, () => ({
  //   add,
  //   remove,
  //   update,
  //   clearAll,
  // }),[add,remove,update,clearAll])
  const messageWrapper = (
    <div className={styles['message-wrapper']}>
      {positions.map((direction) => {
        return (
          <TransitionGroup className={styles[`message-wrapper-${direction}`]}>
            {messageList[direction].map((item) => (
              <CSSTransition
                key={direction}
                timeout={1000}
                classNames={styles.message}
              >
                <MessageItem {...item} onClose={remove} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )
      })}
    </div>
  )
  const el = useMemo(() => {
    const el = document.createElement('div')
    el.className = 'wrapper'
    document.body.appendChild(el)
    return el
  }, [])

  return createPortal(messageWrapper, el)
}
