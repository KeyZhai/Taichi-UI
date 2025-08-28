import type { CSSProperties, ReactNode } from 'react'
import { MonthCalendar } from './MonthCalendar'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { Header } from './Header'
import classnames from 'classnames'
import LocaleContext from './LocaleContext'
import { useState } from 'react'
import { useControllableValue } from 'ahooks'

export interface CalendarProps {
  value?: Dayjs
  defaultValue?: Dayjs
  style?: CSSProperties
  className?: string | string[]
  onChange?: (date: Dayjs) => void
  // 定制日期显示，会覆盖整个单元格
  dateRender?: (currentDate: Dayjs) => ReactNode
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效
  dateInnerContent?: (currentDate: Dayjs) => ReactNode
  //国际化相关
  locale?: string
}

export const Calendar = (props: CalendarProps) => {
  const { style, className, locale, onChange } = props
  const classNames = classnames('calendar', className)
  //区分受控模式和非受控模式
  //如果父组件传了value，curValue就是props.value,组件状态变化会调用onChange通知父组件
  //如果父组件只有defaultValue，curValue就是defaultValue,组件状态变化不会通知父组件
  const [curValue, setcurValue] = useControllableValue<Dayjs>(props, {
    defaultValue: dayjs(),
  })
  const [curMonth, setcurMonth] = useState<Dayjs>(curValue)

  const selectHandler = (value: Dayjs) => {
    setcurValue(value)
    setcurMonth(value)
    onChange?.(value)
  }
  const prevMonthHandler = () => {
    setcurMonth(curMonth.subtract(1, 'month'))
  }
  const nextMonthHandler = () => {
    setcurMonth(curMonth.add(1, 'month'))
  }
  const todayHandler = () => {
    const date = dayjs(Date.now())
    setcurValue(date)
    setcurMonth(date)
    onChange?.(date)
  }
  return (
    <LocaleContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          selectHandler={selectHandler}
          curMonth={curMonth}
        />
      </div>
    </LocaleContext.Provider>
  )
}
