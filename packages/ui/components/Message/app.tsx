import { ConfigProvider } from './ConfigProvider'
import { useMessage } from './hooks/useMessage'

function Aaa() {
  const message = useMessage()

  return (
    <button
      onClick={() => {
        message.add({
          content: '请求成功',
        })
      }}
    >
      成功
    </button>
  )
}

function App() {
  return (
    <ConfigProvider>
      <div>
        <Aaa></Aaa>
      </div>
    </ConfigProvider>
  )
}

export default App
