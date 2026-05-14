# 人体器官工坊 · Human Organ Studio

> 把身体里的工作现场转成 3D 课堂

一个面向课堂教学与健康科普的交互式 3D 人体器官学习平台。通过真实的 GLB 模型、结构拆解与功能流程可视化，让抽象的人体知识变得可触摸、可探索。

![preview](https://img.shields.io/badge/version-MVP%20v0.2-blue)
![tech](https://img.shields.io/badge/stack-React%20%2B%20Three.js-green)
![license](https://img.shields.io/badge/license-MIT-orange)

---

## 项目特点

- **真实 3D 模型** — 心脏、肺、肾脏、肝脏四枚器官的 GLB 模型，支持旋转、缩放、剖面切换
- **结构拆解** — 每枚器官的核心结构（如心房心室、支气管肺泡等）独立标注讲解
- **功能流程图** — 用步骤卡片展示器官如何一步步完成它的工作
- **常见疾病** — 关联科普每枚器官的高发疾病，建立健康意识
- **趣味冷知识** — 每个器官配一条有趣的小知识，让学习不枯燥
- **响应式设计** — 从桌面大屏到手机竖屏，自动适配最优布局

---

## 在线预览

https://nicole282.github.io/human-organ-studio

> 如未部署，可按照下方「本地运行」步骤在浏览器中打开。

---

## 技术栈

| 技术 | 用途 |
|---|---|
| [React 19](https://react.dev/) | UI 框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [Vite](https://vitejs.dev/) | 构建工具 |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React 的 Three.js 渲染器 |
| [Drei](https://github.com/pmndrs/drei) | R3F 辅助组件库 |
| [Three.js](https://threejs.org/) | WebGL 3D 引擎 |

---

## 本地运行

```bash
# 克隆项目
git clone https://github.com/nicole282/human-organ-studio.git
cd human-organ-studio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

默认在 http://localhost:5173 打开。

```bash
# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

---

## 项目结构

```
human-organ-studio/
├── public/
│   ├── models/              # GLB 器官模型（Draco 压缩）
│   │   ├── heart.glb
│   │   ├── lungs.glb
│   │   ├── kidney.glb
│   │   └── liver.glb
│   └── draco/               # Draco 解码器（用于模型压缩传输）
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx      # 左侧器官选择列表
│   │   ├── ModelViewer.tsx  # 3D 模型查看器主组件
│   │   ├── ModelScene.tsx   # 3D 场景（灯光、相机、控制器）
│   │   ├── InfoPanel.tsx    # 右侧器官信息面板
│   │   └── ProgressOverlay.tsx  # 模型加载进度
│   ├── data/
│   │   └── organs.ts        # 器官数据（名称、描述、结构、疾病等）
│   ├── hooks/
│   │   └── useModel.ts      # GLB 模型加载 Hook
│   ├── lib/
│   │   └── modelLoader.ts   # Draco 模型加载工具
│   ├── App.tsx              # 主应用组件
│   ├── app.css              # 组件级样式
│   └── index.css            # 全局样式与 CSS 变量
├── index.html
├── vite.config.ts
└── package.json
```

---

## 当前包含的器官

| 器官 | 系统 | 特色内容 |
|---|---|---|
| 心脏 | 循环系统 | 四腔结构、瓣膜原理、血液循环路径 |
| 肺 | 呼吸系统 | 支气管树、肺泡气体交换、五叶结构 |
| 肾脏 | 泌尿系统 | 肾单位过滤、尿液生成、水盐平衡 |
| 肝脏 | 消化系统 | 肝叶结构、胆汁分泌、代谢解毒 |

---

## 模型来源

所有 3D 模型均为 AI 生成的医学教学风格概念模型，用于科普演示，非临床精确解剖模型。

---

## 声明

本项目为面向中学生课堂与健康科普的概念演示作品，不构成医疗建议。如需医学诊断，请咨询专业医师。

---

## License

MIT © 2025 人体器官工坊
