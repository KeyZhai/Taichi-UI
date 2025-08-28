import { Icon } from '../components/index'
import { Space } from '../components/index'
import { ConfigProvider } from '../components/Space/ConfigProvider'
import { Portal } from '../components'
import { CopyToClipboard } from '../components/index'

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Component Playground</h1>
      <h2>Icon Component</h2>
      <Icon size="24px">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </Icon>
      <h2>Space Component</h2>
      <div>
        <ConfigProvider space={{ size: 20 }}>
          <Space direction="horizontal">
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
          </Space>
          <Space direction="vertical">
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">6</div>
          </Space>
        </ConfigProvider>
      </div>
      <h2>Portal</h2>
      <Portal attach={document.body}>123</Portal>
      <h2>CopyToClipboard</h2>
      <CopyToClipboard
        text="Hello, World!"
        onCopy={(text, result) => {
          console.log(`Copied: ${text}, Result: ${result}`)
        }}
      >
        <button>Copy Text</button>
      </CopyToClipboard>
    </div>
  )
}

export default App
