import Calendar, { type CalendarRef } from "./components/Calendat.tsx/Calendar"
import { useRef, useState } from "react"

function App() {  
  const calendarRef = useRef<CalendarRef>(null);
  const [state,setState] = useState(new Date());
  return (
    <div>
      <h1>Hello World</h1>
      {/* 非受控组件 */}
      {/* <Calendar ref={calendarRef} defaultValue={new Date()} onChange={(date) => {
        alert("选中的日期为" + date)
      }}/> */}
      {/* 受控组件 */} 
      <Calendar ref={calendarRef} defaultValue={state} onChange={(date) => {
        setState(date);
        alert("选中的日期为" + date)
      }}/>
    </div>
  )
}

export default App
