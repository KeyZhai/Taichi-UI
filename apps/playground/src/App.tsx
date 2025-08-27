import { useState } from 'react'
import { Calendar, MiniCalendar } from '@taichi-ui/components'
import '@taichi-ui/components/dist/style.css'
import dayjs from 'dayjs'

function App() {
  const [state, setState] = useState(dayjs('2025-8-26'))

  return (
    <div style={{ padding: '20px' }}>
      <h1>Taichi UI Playground</h1>

      <section style={{ marginBottom: '40px' }}>
        <h2>Calendar Component</h2>
        <Calendar
          value={state}
          dateInnerContent={(value) => {
            return (
              <div>
                <p style={{ background: 'yellowgreen', height: '30px' }}>
                  {value.format('YYYY/MM/DD')}
                </p>
              </div>
            )
          }}
          onChange={(date) => {
            setState(date)
          }}
        />
      </section>

      <section>
        <h2>Mini Calendar Component</h2>
        <MiniCalendar
          defaultValue={new Date()}
          onChange={(date) => {
            console.log('选中的日期为', date)
          }}
        />
      </section>
    </div>
  )
}

export default App
