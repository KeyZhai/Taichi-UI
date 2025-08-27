import type { ReactNode } from 'react'
import type { CalendarProps } from '.'
import type { Dayjs } from 'dayjs'
import styles from './style/Calendar.module.scss'
import { useContext } from 'react'
import LocaleContext from './LocaleContext'
import { allLocales } from './locale'
import cs from 'classnames'

interface MonthCalendarProps extends CalendarProps {
  selectHandler: (day: Dayjs) => void
  curMonth: Dayjs
}

const getAllDays = (date: Dayjs) => {
  //get the first day of the month
  const startDate = date.startOf('month')
  //get the start weekday of the month
  const day = startDate.day()

  const daysInfo: Array<{
    date: Dayjs
    isCurrentMonth: boolean
  }> = new Array(6 * 7)
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      isCurrentMonth: false,
    }
  }
  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day')
    daysInfo[i] = {
      date: calcDate,
      isCurrentMonth: calcDate.month() === date.month(),
    }
  }
  return daysInfo
}

const renderDays = (
  days: Array<{
    date: Dayjs
    isCurrentMonth: boolean
  }>,
  value?: Dayjs,
  selectHandler?: MonthCalendarProps['selectHandler'],
  dateRender?: CalendarProps['dateRender'],
  dateInnerContent?: CalendarProps['dateInnerContent'],
) => {
  const rows: ReactNode[][] = []
  for (let i = 0; i < 6; i++) {
    const row: ReactNode[] = []
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j]
      row[j] = (
        <div
          className={`${styles['calendar-month-body-cell']} ${item.isCurrentMonth ? styles['calendar-month-body-cell-current'] : ''}`}
          key={item.date.format('YYYY-MM-DD')}
          onClick={() => {
            selectHandler?.(item.date)
          }}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className={styles['calendar-month-body-cell-date']}>
              <div
                className={cs(
                  styles['calendar-month-body-cell-date-value'],
                  value?.format('YYYY-MM-DD') === item.date.format('YYYY-MM-DD')
                    ? styles['calendar-month-body-cell-date-selected']
                    : '',
                )}
              >
                {item.date.date()}
              </div>
              <div className={styles['calendar-month-body-cell-date-content']}>
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      )
    }
    rows.push(row)
  }
  return rows.map((row) => (
    <div className={styles['calendar-month-body-row']}>{row}</div>
  ))
}

export const MonthCalendar = (props: MonthCalendarProps) => {
  const { dateRender, dateInnerContent, value, selectHandler, curMonth } = props
  const weekList = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]
  const allDays = getAllDays(curMonth)
  const localeContext = useContext(LocaleContext)
  const CalendarLocale = allLocales[localeContext.locale]

  return (
    <div className={styles.calendar}>
      <div className={styles['calendar-month']}>
        <div className={styles['calendar-month-week-list']}>
          {weekList.map((week) => (
            <div className={styles['calendar-month-week-list-item']} key={week}>
              {CalendarLocale.week[week]}
            </div>
          ))}
        </div>
        <div className={styles['calendar-month-body']}>
          {renderDays(
            allDays,
            value,
            selectHandler,
            dateRender,
            dateInnerContent,
          )}
        </div>
      </div>
    </div>
  )
}
