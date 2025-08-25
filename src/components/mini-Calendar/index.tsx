import React,{useState,useImperativeHandle} from 'react';
import styles from './mini-Calendar.module.css';
// import { useControllableValue } from 'ahooks';

interface MiniCalendarProps {
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  ref?: React.Ref<MiniCalendarRef>;
}

export interface MiniCalendarRef {
  getDate: () => Date;
  setDate:(date: Date) => void;
}

const MiniCalendar = (props:MiniCalendarProps) => {
  const {defaultValue = new Date(),onChange,ref} = props
  //非受控模式
  const [date,setdate] = useState(defaultValue);
  //受控模式
  //useControllableValue  => 用于处理受控组件的状态
  //会从props找value或者defaultValue作为初始值date初始值，找到onChange作为date改变后的回调
  //并把更改后的value作为onchange参数传递回去
  // const [date,setdate] = useControllableValue(props,{
  //   defaultValue:new Date()
  // })
  const MonthName = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  // useImperative Handle  => 用于控制ref向外暴露的方法
  useImperativeHandle(ref,() => ({
    getDate(){
      return date;
    },
    setDate(date:Date){
      setdate(date);
    }
  }))
  const handlePrevMonth = () => {
    setdate(new Date(date.getFullYear(), date.getMonth() - 1,1));
  };

  const handleNextMonth = () => {
    setdate(new Date(date.getFullYear(), date.getMonth() + 1,1));
  };

  //render days
  const renderDate = () => {
    const countDays = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();
    const startDay = new Date(date.getFullYear(),date.getMonth(),1).getDay();
    const days = [];
    for(let i = 0; i < startDay; i++) {
      days.push(<div className={styles.empty} key={`empty-${i}`}></div>); 
    }
    for(let i = 1; i <= countDays; i++) {
      const clickHandle = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i);
        setdate(curDate);
        onChange?.(curDate);
      }
      if(i === date.getDate()){
        days.push(<div className={`${styles.day} ${styles.selected}`} key={i} onClick={() => clickHandle()}>{i}</div>);
      }else{
        days.push(<div className={styles.day} key={i} onClick={() => clickHandle()}>{i}</div>);
      }
    }
    return days;
  }

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>{date.getFullYear()} 年 {MonthName[date.getMonth()]} </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.days}>
        <div className={styles.day}>日</div>
        <div className={styles.day}>一</div>
        <div className={styles.day}>二</div>
        <div className={styles.day}>三</div>
        <div className={styles.day}>四</div>
        <div className={styles.day}>五</div>
        <div className={styles.day}>六</div>
       {renderDate()}
      </div>
    </div>
  );
}

export default MiniCalendar;
