import type { MessageRef } from '.'
import type { PropsWithChildren, RefObject } from 'react'
import { createContext, useRef } from 'react'
import { MessageProvider } from '.'

interface ConfigProviderProps {
  messageRef?: RefObject<MessageRef | null>
}

export const ConfigContext = createContext<ConfigProviderProps>({})

export function ConfigProvider(props: PropsWithChildren) {
  const { children } = props

  const messageRef = useRef<MessageRef>(null)

  return (
    <ConfigContext.Provider value={{ messageRef }}>
      <MessageProvider ref={messageRef}></MessageProvider>
      {children}
    </ConfigContext.Provider>
  )
}
