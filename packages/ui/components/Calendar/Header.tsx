import styles from './style/Calendar.module.scss'
import type { Dayjs } from 'dayjs'
import { useContext } from 'react'
import LocaleContext from './LocaleContext'
import { allLocales } from './locale'

interface HeaderProps {
  curMonth: Dayjs
  prevMonthHandler: () => void
  nextMonthHandler: () => void
  todayHandler: () => void
}

export const Header = (props: HeaderProps) => {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props
  const localeContext = useContext(LocaleContext)
  const CalendarContext = allLocales[localeContext.locale]
  return (
    <div className={styles['calendar-header']}>
      <div className={styles['calendar-header-left']}>
        <div
          className={styles['calendar-header-icon']}
          onClick={prevMonthHandler}
        >
          &lt;
        </div>
        <div className={styles['calendar-header-value']}>
          {curMonth.format(CalendarContext.formatMonth)}
        </div>
        <div
          className={styles['calendar-header-icon']}
          onClick={nextMonthHandler}
        >
          &gt;
        </div>
        <div className={styles['calendar-header-btn']} onClick={todayHandler}>
          {CalendarContext.today}
        </div>
      </div>
    </div>
  )
}
