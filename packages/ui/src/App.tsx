import { Icon } from '../components/index'
import { Space } from '../components/index'
import { ConfigProvider } from '../components/Space/ConfigProvider'
import { Portal } from '../components'
import { CopyToClipboard } from '../components/index'
import { Watermark } from '../components/index'

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
      <h2>Watermark</h2>
      <Watermark
        content={['测试水印', '神说要有光']}
        gap={[0, 0]}
        offset={[50, 100]}
        fontStyle={{
          color: 'green',
        }}
      >
        <div style={{ height: 800 }}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod
            deserunt quidem quas in rem ipsam ut nesciunt asperiores dignissimos
            recusandae minus, eaque, harum exercitationem esse sapiente?
            Eveniet, id provident!
          </p>
        </div>
      </Watermark>
    </div>
  )
}

export default App
