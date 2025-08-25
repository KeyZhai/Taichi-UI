// import MiniCalendar, { type MiniCalendarRef } from "./components/mini-Calendar"
// import { useRef, useState } from "react"
import Calendar from "./components/Calendar"
import dayjs from "dayjs"
function App() {  
  // const calendarRef = useRef<MiniCalendarRef>(null);
  // const [state,setState] = useState(new Date());
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
      <Calendar value={dayjs('2025-08-25')} />
    </div>
  )
}

export default App
