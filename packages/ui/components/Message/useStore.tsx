import { useState } from 'react'
import type { MessageProps, Position } from '.'

type MessageList = {
  top: MessageProps[]
  bottom: MessageProps[]
}

const initialState: MessageList = {
  top: [],
  bottom: [],
}

export const useStore = (defaultPosition: Position) => {
  const [messageList, setMessageList] = useState<MessageList>({
    ...initialState,
  })
  return {
    messageList,
    add(messageProps: MessageProps) {
      const id = getId(messageProps)
      setMessageList((prevState) => {
        if (messageProps?.id) {
          const position = getMessagePosition(prevState, messageProps.id)
          if (position) return prevState
        }
        const position = messageProps.postion || defaultPosition
        const isTop = position === 'top'
        const messages = isTop
          ? [{ ...messageProps, id }, ...(prevState[position] ?? [])]
          : [...(prevState[position] ?? []), { ...messageProps, id }]

        return {
          ...prevState,
          [position]: messages,
        }
      })
    },
    update(id: number, message: MessageProps) {
      if (!id) return
      setMessageList((prevState) => {
        const nextState = { ...prevState }
        const { position, index } = findMessage(nextState, id)
        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...message,
          }
        }
        return nextState
      })
    },
    remove(id: number) {
      if (!id) return
      setMessageList((prevState) => {
        const position = getMessagePosition(prevState, id)
        if (!position) return prevState
        return {
          ...prevState,
          [position]: prevState[position].filter((item) => item.id !== id),
        }
      })
    },
    clearAll() {
      setMessageList({ ...initialState })
    },
  }
}

let idCount = 0
const getId = (message: MessageProps) => {
  if (message.id) {
    return message.id
  }
  return idCount++
}

const getMessagePosition = (messageList: MessageList, id: number) => {
  const position = Object.keys(messageList).find((key) =>
    messageList[key as Position].some((item) => item.id === id),
  )
  return position
}

const findMessage = (
  messageList: MessageList,
  id: number,
): { position?: Position; index: number } => {
  const position = getMessagePosition(messageList, id) as Position | undefined
  const index = position
    ? messageList[position].findIndex((item) => item.id === id)
    : -1
  return { position, index }
}
