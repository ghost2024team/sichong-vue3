<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const formData = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const loading = ref(false)
const error = ref('')
const router = useRouter()
const authStore = useAuthStore()

// 表单验证规则
const validateForm = () => {
  if (!formData.username.trim()) {
    error.value = '请输入用户名'
    return false
  }
  
  if (!formData.password) {
    error.value = '请输入密码'
    return false
  }
  
  if (formData.password.length < 6) {
    error.value = '密码长度不能少于 6 位'
    return false
  }
  
  return true
}

// 登录处理函数
const handleLogin = async () => {
  if (!validateForm()) return
  
  loading.value = true
  error.value = ''
  
  try {
    // 调用认证 API
    await authStore.login(formData.username, formData.password)
    
    if (formData.rememberMe) {
      localStorage.setItem('username', formData.username)
    } else {
      localStorage.removeItem('username')
    }
    
    // 跳转到首页
    router.push('/')
  } catch (err) {
    error.value = '登录失败，请检查用户名和密码'
    console.error('登录错误:', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="login-container flex items-center justify-center min-h-screen bg-gray-100">
    <div class="login-form w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">用户登录</h2>
      
      <!-- 错误消息 -->
      <div v-if="error" class="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
        {{ error }}
      </div>
      
      <!-- 登录表单 -->
      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- 用户名 -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 mb-1">用户名</label>
          <input
            id="username"
            v-model="formData.username"
            type="text"
            placeholder="请输入用户名"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <!-- 密码 -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">密码</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="请输入密码"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <!-- 记住我 & 忘记密码 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="rememberMe"
              v-model="formData.rememberMe"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="rememberMe" class="ml-2 block text-sm text-gray-700">记住我</label>
          </div>
          
          <a href="#" class="text-sm text-blue-600 hover:text-blue-500">忘记密码？</a>
        </div>
        
        <!-- 登录按钮 -->
        <div class="mt-6">
          <button
            type="submit"
            :disabled="loading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              登录中...
            </span>
            <span v-else>登录</span>
          </button>
        </div>
      </form>
      
      <!-- 注册链接 -->
      <div class="mt-4 text-center">
        <p class="text-sm text-gray-600">
          还没有账户？
          <a href="#" class="font-medium text-blue-600 hover:text-blue-500">立即注册</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
/* 如果需要额外样式，可以在这里添加 */
</style>
