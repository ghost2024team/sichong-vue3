<template>
  <div class="not-found flex flex-col items-center justify-center min-h-[60vh]">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-indigo-200">404</h1>
      <p class="text-2xl font-semibold text-gray-700 mt-4">页面不存在</p>
      <p class="text-gray-500 mt-2">您访问的页面可能已被移除或不存在</p>
      <router-link 
        to="/" 
        class="inline-block mt-8 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.not-found {
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>