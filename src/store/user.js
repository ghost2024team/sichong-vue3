import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 用户状态管理
export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref(null)
  
  const isLoggedIn = computed(() => !!token.value)
  
  function setToken(newToken) {
    token.value = newToken
  }
  
  function setUserInfo(info) {
    userInfo.value = info
  }
  
  function logout() {
    token.value = ''
    userInfo.value = null
  }
  
  return {
    token,
    userInfo,
    isLoggedIn,
    setToken,
    setUserInfo,
    logout
  }
})