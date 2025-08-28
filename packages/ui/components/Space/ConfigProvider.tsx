import { createContext } from 'react'
import type { FC, PropsWithChildren } from 'react'
import type { SizeType } from '.'

export interface ConfigContextProps {
  space?: {
    size?: SizeType
  }
}

const defaultConfig: ConfigContextProps = {}

export const ConfigContext = createContext(defaultConfig)

interface ConfigProviderProps extends PropsWithChildren<ConfigContextProps> {}

export const ConfigProvider: FC<ConfigProviderProps> = (props) => {
  const { space, children } = props
  return (
    <ConfigContext.Provider value={{ space }}>
      {children}
    </ConfigContext.Provider>
  )
}
