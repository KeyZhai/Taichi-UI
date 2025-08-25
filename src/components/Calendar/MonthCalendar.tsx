import styles from './style/Calendar.module.scss';
import type { CalendarProps } from '.';
import type { Dayjs } from 'dayjs';

interface MonthCalendarProps extends CalendarProps {

}

const getAllDays = (date:Dayjs) => {
  //get the first day of the month
  const startDate = date.startOf('month');
  //get the start weekday of the month
  const day = startDate.day();

  const daysInfo:Array<{
    date:Dayjs;
    isCurrentMonth:boolean;
  }> = new Array(6 * 7)
  for(let i = 0; i < day; i++) {
    daysInfo[i] = {
      date:startDate.subtract(day - i,'day'),
      isCurrentMonth:false,
    }
  }
  for(let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day,'day');
    daysInfo[i] = {
      date:calcDate,
      isCurrentMonth:calcDate.month() === date.month(),
    }
  }
  return daysInfo;
}

const renderDays = (days:Array<{
  date:Dayjs;
  isCurrentMonth:boolean;
}>) => {
  const rows = [];
  for(let i = 0; i < 6; i++) {
    const row = [];
    for(let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      // todo: 添加样式
      row[j] = <div className={styles['calendar-month-body-cell'] + (item.isCurrentMonth ? ' calendar-month-body-cell-current' : '')} key={item.date.format('YYYY-MM-DD')}>{item.date.date()}</div>
    }
    rows.push(row)
  }
  return rows.map(row => <div className={styles['calendar-month-body-row']}>{row}</div>);
}

export const MonthCalendar = (props:MonthCalendarProps) => {
  const weekList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
  const allDays = getAllDays(props.value);
  return (
    <div className={styles.calendar}>
      <div className={styles['calendar-month']}>
        <div className={styles['calendar-month-week-list']}>
          {weekList.map((item) => (
            <div className={styles['calendar-month-week-list-item']} key={item}>{item}</div>
          ))}
        </div>
        <div className={styles['calendar-month-body']}>
          {
            renderDays(allDays)
          }
        </div>
      </div>
    </div>
  )
}