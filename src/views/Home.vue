<template>
  <div class="home">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        欢迎来到 Sichong
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        基于 Vue3 + Vite + WindiCSS 的项目模板
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-indigo-600 text-3xl mb-4">⚡</div>
          <h3 class="text-lg font-semibold mb-2">Vite</h3>
          <p class="text-gray-600">极速开发体验，热更新秒开</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-green-600 text-3xl mb-4">🎨</div>
          <h3 class="text-lg font-semibold mb-2">WindiCSS</h3>
          <p class="text-gray-600">原子化 CSS，快速样式开发</p>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="text-red-600 text-3xl mb-4">🍍</div>
          <h3 class="text-lg font-semibold mb-2">Pinia</h3>
          <p class="text-gray-600">Vue3 推荐的状态管理</p>
        </div>
      </div>

      <div class="mt-12">
        <router-link 
          to="/about" 
          class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          了解更多
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.home {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>