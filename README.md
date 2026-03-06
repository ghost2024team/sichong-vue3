# Sichong Vue3 项目

> 基于 Vue 3 + Vite + WindiCSS 的现代化前端项目模板

## 📖 项目简介

Sichong 是一个基于 Vue 3 生态系统的现代化前端项目模板，采用最新的技术栈和最佳实践，帮助开发者快速搭建高质量的前端应用。

## 🛠️ 技术栈

### 核心框架
- **Vue 3** - 渐进式 JavaScript 框架（Composition API）
- **Vite** - 下一代前端构建工具

### 状态管理
- **Pinia** - Vue 3 推荐的官方状态管理库

### 路由管理
- **Vue Router 4** - Vue.js 官方路由管理器

### HTTP 请求
- **Axios** - 基于 Promise 的 HTTP 客户端

### 样式方案
- **WindiCSS** - 按需加载的原子化 CSS 框架
- **SCSS** - CSS 预处理器

### 开发工具
- **ESLint** - 代码规范检查
- **Prettier** - 代码格式化

## 📦 项目结构

```
sichong/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 接口
│   │   ├── index.js       # API 导出
│   │   ├── request.js     # Axios 实例
│   │   └── auth.js        # 认证接口
│   ├── assets/            # 资源文件
│   │   └── styles/
│   │       └── main.scss  # 全局样式
│   ├── components/        # 公共组件
│   ├── router/            # 路由配置
│   │   └── index.js       # 路由定义和守卫
│   ├── store/             # Pinia 状态管理
│   │   ├── index.js       # Pinia 实例
│   │   └── auth.js        # 认证状态
│   ├── views/             # 页面组件
│   │   ├── Home.vue       # 首页
│   │   ├── About.vue      # 关于页
│   │   ├── Login.vue      # 登录页
│   │   └── NotFound.vue   # 404 页
│   ├── utils/             # 工具函数
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML 模板
├── vite.config.js         # Vite 配置
├── windi.config.js        # WindiCSS 配置
├── package.json           # 项目依赖
└── README.md              # 项目文档
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📝 功能特性

### ✅ 已实现功能

- [x] 用户登录/登出
- [x] 路由守卫（认证检查）
- [x] Token 持久化
- [x] 响应式布局
- [x] 表单验证
- [x] 加载状态
- [x] 错误处理
- [x] 404 页面

### 🔜 计划功能

- [ ] 用户注册
- [ ] 密码重置
- [ ] 个人中心
- [ ] 权限管理
- [ ] 国际化

## 🎨 代码规范

### 目录命名
- 全部采用小写命名
- 多个单词使用连字符 `-` 分隔

### 组件命名
- 使用 PascalCase（大驼峰）命名
- 文件名与组件名保持一致

### 代码风格
- 使用 Composition API（script setup）
- 优先使用组合式函数复用逻辑
- 保持组件单一职责

## 📚 学习资源

- [Vue 3 文档](https://cn.vuejs.org/)
- [Vite 文档](https://cn.vitejs.dev/)
- [Pinia 文档](https://pinia.vuejs.org/zh/)
- [Vue Router 文档](https://router.vuejs.org/zh/)
- [WindiCSS 文档](https://windicss.org/)
- [Axios 文档](https://axios-http.com/)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👨‍💻 开发团队

Created with ❤️ by Sichong Team

---

**最后更新时间**: 2026-03-06
