import styles from './style/Calendar.module.scss';
import { MonthCalendar } from './MonthCalendar';
import type {Dayjs} from 'dayjs';

export interface CalendarProps {
  value:Dayjs;
}

const Calendar = (props:CalendarProps) => {
  return <div className={styles.calendar}>
    <MonthCalendar {...props} />
  </div>;
};

export default Calendar;