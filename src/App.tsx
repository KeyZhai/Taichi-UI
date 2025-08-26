// import MiniCalendar, { type MiniCalendarRef } from "./components/mini-Calendar"
import { useState } from "react"
import Calendar from "./components/Calendar"
import dayjs from "dayjs"
function App() {  
  // const calendarRef = useRef<MiniCalendarRef>(null);
  const [state,setState] = useState(dayjs('2025-8-26'));
  return (
    <div>
      {/* 非受控组件 */}
      {/* <MiniCalendar ref={calendarRef} defaultValue={new Date()} onChange={(date) => {
        alert("选中的日期为" + date)
      }}/> */}
      {/* 受控组件 */} 
      {/* <MiniCalendar ref={calendarRef} defaultValue={state} onChange={(date) => {
        setState(date);
        alert("选中的日期为" + date)
      }}/> */}
      <Calendar value={state} dateInnerContent={(value) => {
        return <div>
          <p style={{background: 'yellowgreen', height: '30px'}}>{value.format('YYYY/MM/DD')}</p>
        </div>
      }} onChange={(date) => {
        setState(date)
      }}></Calendar>
    </div>
  )
}

export default App
