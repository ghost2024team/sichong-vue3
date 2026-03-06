<template>
  <div class="login-page min-h-screen bg-gradient-to-br from-red-800 via-red-900 to-red-950 flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <!-- 返回链接 -->
      <div class="text-center mb-8">
        <router-link 
          to="/" 
          class="inline-flex items-center space-x-2 text-red-200 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>返回首页</span>
        </router-link>
      </div>

      <!-- 登录卡片 -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">🃏</div>
          <h1 class="text-3xl font-bold text-white mb-2">欢迎回来</h1>
          <p class="text-red-200">登录账户，开始游戏</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- 用户名 -->
          <div>
            <label class="block text-white font-medium mb-2">用户名</label>
            <input 
              v-model="formData.username"
              type="text" 
              placeholder="请输入用户名"
              class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-red-300 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <!-- 密码 -->
          <div>
            <label class="block text-white font-medium mb-2">密码</label>
            <input 
              v-model="formData.password"
              type="password" 
              placeholder="请输入密码"
              class="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-red-300 focus:outline-none focus:border-yellow-400 transition-colors"
            />
          </div>

          <!-- 记住我 -->
          <div class="flex items-center">
            <input
              id="rememberMe"
              v-model="formData.rememberMe"
              type="checkbox"
              class="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-white/30 rounded bg-white/5"
            />
            <label for="rememberMe" class="ml-2 block text-red-200">记住我</label>
          </div>

          <!-- 错误提示 -->
          <div v-if="error" class="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-red-200 text-sm">
            {{ error }}
          </div>

          <!-- 登录按钮 -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            <span v-if="loading" class="flex items-center justify-center space-x-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>登录中...</span>
            </span>
            <span v-else>立即登录</span>
          </button>
        </form>

        <!-- 注册链接 -->
        <div class="mt-6 text-center">
          <p class="text-red-200">
            还没有账户？
            <router-link to="/register" class="text-yellow-400 hover:text-yellow-300 font-semibold">
              立即注册
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const router = useRouter()
const loading = ref(false)
const error = ref('')
const authStore = useAuthStore()

const formData = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const handleLogin = async () => {
  error.value = ''
  
  // 验证
  if (!formData.username.trim()) {
    error.value = '请输入用户名'
    return
  }
  
  if (!formData.password) {
    error.value = '请输入密码'
    return
  }
  
  if (formData.password.length < 6) {
    error.value = '密码长度不能少于 6 位'
    return
  }
  
  loading.value = true
  
  try {
    await authStore.login(formData.username, formData.password)
    
    if (formData.rememberMe) {
      localStorage.setItem('username', formData.username)
    } else {
      localStorage.removeItem('username')
    }
    
    router.push('/')
  } catch (err) {
    error.value = '登录失败，请检查用户名和密码'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}
</style>
