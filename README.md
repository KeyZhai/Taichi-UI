<div align="center">
  <img src="https://img.shields.io/badge/Taichi_UI-太极界面-blue?style=for-the-badge&logo=react" alt="Taichi UI" />
  
  <h1>🔮 Taichi UI</h1>
  
  <p>一套遵循太极哲学的现代化 React 组件库</p>
  
  <p>
    <img src="https://img.shields.io/npm/v/@taichi-ui/components?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/badge/React-19.1.1-61dafb?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-7.1.2-646cff?style=flat-square&logo=vite" alt="Vite" />
  </p>
</div>

---

## ✨ 特性

🌅 **太极哲学设计** - 追求阴阳平衡，简洁与功能并重  
🚀 **现代化技术栈** - React 19 + TypeScript + Vite，极致开发体验  
📦 **Monorepo 架构** - 科学的项目组织，高效的代码管理  
🎨 **渐进式设计** - 从简单到复杂，循序渐进的组件体系  
⚡ **极速热更新** - 毫秒级 HMR，提升开发效率  
🛠️ **开箱即用** - 完整的工程化配置，零配置启动开发

## 🎯 设计理念

**太极生两仪，两仪生四象，四象生八卦**

Taichi UI 秉承太极哲学中的平衡理念，在设计与开发中寻求：

- **🔄 动静平衡** - 交互自然流畅，视觉简洁明了
- **⚖️ 阴阳调和** - 功能强大与使用简单的完美结合
- **🌱 循序渐进** - 从基础组件到复杂场景的渐进式构建
- **🎭 包容万象** - 既保持统一性，又兼容个性化定制

## 📦 安装

```bash
# 使用 npm
npm install @taichi-ui/components

# 使用 yarn
yarn add @taichi-ui/components

# 使用 pnpm
pnpm add @taichi-ui/components
```

## 🚀 快速开始

```tsx
import React from 'react'
import { Calendar, Space } from '@taichi-ui/components'
import '@taichi-ui/components/dist/style.css'

function App() {
  return (
    <Space>
      <Calendar />
    </Space>
  )
}

export default App
```

## 🏗️ 项目架构

本项目采用 Monorepo 架构，包含以下模块：

```
Taichi-UI/
├── packages/
│   ├── ui/                   # 🎨 核心组件库
│   │   ├── components/       # 组件源码
│   │   │   ├── Calendar/     # 日历组件
│   │   │   ├── mini-Calendar/# 迷你日历
│   │   │   ├── Space/        # 间距组件
│   │   │   └── Icon/         # 图标组件
│   │   └── dist/             # 构建产物
│   ├── playground/           # 🎪 组件演练场
│   └── storybook/            # 📚 组件文档
└── docs/                     # 📖 项目文档
```

## 🧩 组件预览

### 📅 Calendar 日历组件

遵循太极理念，提供清晰的时间导航和日期选择功能。

### 🗓️ Mini Calendar 迷你日历

精简设计，专注核心功能，适用于侧边栏等紧凑空间。

### 📐 Space 间距组件

灵活的布局工具，帮助构建和谐的页面结构。

### 🎨 Icon 图标组件

精心设计的图标系统，传达清晰的视觉信息。

## 🛠️ 开发指南

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/Taichi-UI.git
cd Taichi-UI

# 安装依赖
pnpm install

# 启动组件库开发
pnpm dev:ui

# 启动演练场
pnpm dev:playground

# 启动 Storybook 文档
pnpm dev:storybook
```

### 构建项目

```bash
# 构建组件库
pnpm build:ui

# 构建所有包
pnpm build:all

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 🎨 主题定制

Taichi UI 支持主题定制，您可以通过 CSS 变量轻松调整样式：

```css
:root {
  --taichi-primary-color: #1890ff;
  --taichi-border-radius: 6px;
  --taichi-font-size-base: 14px;
}
```

## 🌐 浏览器支持

现代浏览器和 Internet Explorer 11（需要 polyfills）。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               |

## 🤝 参与贡献

我们欢迎所有的贡献，请先阅读我们的[贡献指南](./CONTRIBUTING.md)。

如果你希望参与贡献，欢迎 [Pull Request](https://github.com/your-username/Taichi-UI/pulls)，或给我们 [报告 Bug](https://github.com/your-username/Taichi-UI/issues)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 📄 许可证

[MIT](./LICENSE)

---

<div align="center">
  <p>太极生两仪 · 代码亦如此</p>
  <p>Made with ❤️ by Taichi UI Team</p>
</div>
