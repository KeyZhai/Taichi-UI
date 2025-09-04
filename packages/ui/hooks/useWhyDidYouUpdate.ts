import { useRef, useEffect } from 'react'
type IProps = Record<string, any>

const useWhyDidYouUpdate = (componentName: string, props: IProps) => {
  const preProps = useRef<IProps>({})
  useEffect(() => {
    if (preProps.current) {
      const allKeys = Object.keys({ ...preProps.current, ...props })
      const changedProps: IProps = {}
      allKeys.forEach((key) => {
        if (!Object.is(preProps.current[key], props[key])) {
          changedProps[key] = {
            from: preProps.current[key],
            to: props[key],
          }
        }
      })
      if (Object.keys(changedProps).length) {
        console.log('[why-did-you-update]', componentName, changedProps)
      }
    }
    preProps.current = props
  })
}

export default useWhyDidYouUpdate
