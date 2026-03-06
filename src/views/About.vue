<template>
  <div class="about max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-900 mb-6">关于 Sichong</h1>
    
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-semibold mb-4">技术栈</h2>
      <ul class="space-y-2 text-gray-600">
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          Vue 3 + Composition API
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          Vite (构建工具)
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          Vue Router (路由管理)
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          Pinia (状态管理)
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          Axios (HTTP 请求)
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          SCSS (CSS 预处理器)
        </li>
        <li class="flex items-center">
          <span class="text-green-500 mr-2">✓</span>
          WindiCSS (原子化 CSS)
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold mb-4">项目结构</h2>
      <pre class="text-sm text-gray-600 bg-gray-50 p-4 rounded overflow-x-auto">
sichong/
├── src/
│   ├── api/          # API 请求
│   ├── assets/       # 静态资源
│   ├── components/   # 公共组件
│   ├── router/       # 路由配置
│   ├── store/        # 状态管理
│   ├── views/        # 页面组件
│   ├── utils/        # 工具函数
│   ├── App.vue       # 根组件
│   └── main.js       # 入口文件
├── public/
├── index.html
├── vite.config.js
└── package.json
      </pre>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about {
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>