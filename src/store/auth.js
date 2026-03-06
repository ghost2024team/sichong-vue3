import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { login, logout, getCurrentUser } from '@/api/auth'

export const useAuthStore = defineStore('auth', () => {
  // State
  const token = ref(localStorage.getItem('token') || '')
  const user = ref(null)
  
  // Getters
  const isAuthenticated = computed(() => !!token.value)
  const userName = computed(() => user.value?.username || '')
  const userRole = computed(() => user.value?.role || '')
  
  // Actions
  async function loginAction(username, password) {
    try {
      const response = await login(username, password)
      token.value = response.token
      user.value = response.user
      
      // 持久化 token
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.user))
      
      return response
    } catch (error) {
      throw error
    }
  }
  
  async function logoutAction() {
    try {
      await logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      token.value = ''
      user.value = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }
  
  async function fetchUserInfo() {
    try {
      const response = await getCurrentUser()
      user.value = response.user
      localStorage.setItem('user', JSON.stringify(response.user))
      return response
    } catch (error) {
      throw error
    }
  }
  
  // 初始化时恢复用户信息
  function initAuth() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        user.value = JSON.parse(savedUser)
      } catch (e) {
        console.error('Failed to parse saved user:', e)
      }
    }
  }
  
  // 初始化
  initAuth()
  
  return {
    // State
    token,
    user,
    
    // Getters
    isAuthenticated,
    userName,
    userRole,
    
    // Actions
    login: loginAction,
    logout: logoutAction,
    fetchUserInfo,
    initAuth
  }
})
