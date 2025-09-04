import dayjs from 'dayjs'
import { useEffect, useMemo, useRef, useState } from 'react'

type TDate = dayjs.ConfigType

interface Options {
  leftTime?: number
  targetDate?: TDate
  interval?: number
  onEnd?: () => void
}

export interface FormattedRes {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}

const calcLeft = (target?: TDate) => {
  if (!target) {
    return 0
  }
  const leftTime = dayjs(target).valueOf() - Date.now()
  return leftTime > 0 ? leftTime : 0
}

const parseMs = (milliseconds: number): FormattedRes => {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000,
  }
}

const useCountDown = (options: Options = {}) => {
  const { leftTime, targetDate, interval = 1000, onEnd } = options

  const memoLeftTime = useMemo(() => {
    return leftTime && leftTime > 0 ? leftTime + Date.now() : undefined
  }, [leftTime])

  const target = 'leftTime' in options ? memoLeftTime : targetDate

  const [timeLeft, setTimeLeft] = useState(() => calcLeft(target))

  // 防止闭包
  const onEndRef = useRef<() => void>(onEnd)
  onEndRef.current = onEnd

  useEffect(() => {
    if (!target) {
      setTimeLeft(0)
      return
    }

    const timer = setInterval(() => {
      const left = calcLeft(target)
      setTimeLeft(left)
      if (left <= 0) {
        clearInterval(timer)
        onEndRef.current?.()
      }
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [target, interval])

  const formattedRes = useMemo(() => parseMs(timeLeft), [timeLeft])

  return [timeLeft, formattedRes] as const
}

export default useCountDown
