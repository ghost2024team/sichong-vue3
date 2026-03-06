<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 登录页不显示导航栏 -->
    <template v-if="$route.name !== 'Login'">
      <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <router-link to="/home" class="text-xl font-bold text-indigo-600">
                  Sichong
                </router-link>
              </div>
              <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <router-link 
                  to="/home" 
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  active-class="border-indigo-500 text-gray-900"
                >
                  首页
                </router-link>
                <router-link 
                  to="/about" 
                  class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  active-class="border-indigo-500 text-gray-900"
                >
                  关于
                </router-link>
              </div>
            </div>
            <div class="flex items-center">
              <button @click="handleLogout" class="text-sm text-gray-600 hover:text-gray-900">
                退出登录
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </main>

      <footer class="bg-white mt-auto">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-gray-400 text-sm">
            &copy; 2026 Sichong. Built with Vue3 + Vite + WindiCSS
          </p>
        </div>
      </footer>
    </template>
    
    <!-- 登录页全屏显示 -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>