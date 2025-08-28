import { useEffect } from 'react'

const defaultOptions: MutationObserverInit = {
  subtree: true,
  childList: true,
  attributeFilter: ['style', 'class'],
}

export default function useMutationObserver(
  nodeOrlist: Element | Element[],
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions,
): void {
  useEffect(() => {
    if (!nodeOrlist) return
    let instance: MutationObserver
    const nodes = Array.isArray(nodeOrlist) ? nodeOrlist : [nodeOrlist]
    if ('MutationObserver' in window) {
      instance = new MutationObserver(callback)
      nodes.forEach((node) => {
        instance.observe(node, options)
      })
    }
    return () => {
      instance?.takeRecords()
      instance?.disconnect()
    }
  }, [nodeOrlist, options])
}
