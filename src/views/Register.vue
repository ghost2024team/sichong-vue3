<template>
  <div class="register-page min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center py-12 px-4">
    <div class="max-w-md w-full">
      <!-- 返回链接 -->
      <div class="text-center mb-8">
        <router-link 
          to="/" 
          class="inline-flex items-center space-x-2 text-red-300 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>返回首页</span>
        </router-link>
      </div>

      <!-- 注册卡片 -->
      <div class="bg-black/60 backdrop-blur-md rounded-2xl border border-red-500/30 p-8 shadow-2xl">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">🃏</div>
          <h1 class="text-3xl font-bold text-white mb-2">创建账户</h1>
          <p class="text-red-300">加入四冲扑克，开始游戏</p>
        </div>

        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- 用户名 -->
          <div>
            <label class="block text-white font-semibold mb-2">用户名</label>
            <input 
              v-model="formData.username"
              type="text" 
              placeholder="请输入用户名"
              class="w-full px-4 py-3 bg-black/40 border border-red-500/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </div>

          <!-- 邮箱 -->
          <div>
            <label class="block text-white font-semibold mb-2">邮箱</label>
            <input 
              v-model="formData.email"
              type="email" 
              placeholder="请输入邮箱"
              class="w-full px-4 py-3 bg-black/40 border border-red-500/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </div>

          <!-- 密码 -->
          <div>
            <label class="block text-white font-semibold mb-2">密码</label>
            <input 
              v-model="formData.password"
              type="password" 
              placeholder="请输入密码（至少 6 位）"
              class="w-full px-4 py-3 bg-black/40 border border-red-500/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </div>

          <!-- 确认密码 -->
          <div>
            <label class="block text-white font-semibold mb-2">确认密码</label>
            <input 
              v-model="formData.confirmPassword"
              type="password" 
              placeholder="请再次输入密码"
              class="w-full px-4 py-3 bg-black/40 border border-red-500/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            />
          </div>

          <!-- 错误提示 -->
          <div v-if="error" class="bg-red-600/30 border border-red-500/50 rounded-xl p-4 text-red-200 text-sm">
            {{ error }}
          </div>

          <!-- 注册按钮 -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-yellow-500/30"
          >
            <span v-if="loading" class="flex items-center justify-center space-x-2">
              <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>注册中...</span>
            </span>
            <span v-else>立即注册</span>
          </button>
        </form>

        <!-- 登录链接 -->
        <div class="mt-6 text-center">
          <p class="text-gray-400">
            已有账户？
            <router-link to="/login" class="text-yellow-400 hover:text-yellow-300 font-semibold">
              立即登录
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

const router = useRouter()
const loading = ref(false)
const error = ref('')

const formData = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = async () => {
  error.value = ''
  
  if (!formData.username.trim()) {
    error.value = '请输入用户名'
    return
  }
  
  if (!formData.email) {
    error.value = '请输入邮箱'
    return
  }
  
  if (formData.password.length < 6) {
    error.value = '密码长度不能少于 6 位'
    return
  }
  
  if (formData.password !== formData.confirmPassword) {
    error.value = '两次输入的密码不一致'
    return
  }
  
  loading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('注册成功！请登录')
    router.push('/login')
  } catch (err) {
    error.value = '注册失败，请稍后重试'
  } finally {
    loading.value = false
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  background-image: 
    radial-gradient(circle at 30% 40%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(185, 28, 28, 0.2) 0%, transparent 50%);
}
</style>
