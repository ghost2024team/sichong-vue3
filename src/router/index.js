import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页', requiresAuth: false }  // 首页可公开访问
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录', requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: { title: '注册', requiresAuth: false }
  },
  {
    path: '/game/rooms',
    name: 'GameRooms',
    component: () => import('@/views/game/Rooms.vue'),
    meta: { title: '游戏房间', requiresAuth: false }
  },
  {
    path: '/game/create',
    name: 'CreateRoom',
    component: () => import('@/views/game/CreateRoom.vue'),
    meta: { title: '创建房间', requiresAuth: true }
  },
  {
    path: '/game/room/:id',
    name: 'GameRoom',
    component: () => import('@/views/game/Room.vue'),
    meta: { title: '游戏房间', requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于', requiresAuth: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '404' }
  }
]
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于', requiresAuth: false }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '404' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'Sichong'
  
  // 获取认证状态
  const authStore = useAuthStore()
  const isLoggedIn = authStore.isAuthenticated
  
  // 检查是否需要认证
  if (to.meta.requiresAuth && !isLoggedIn) {
    // 未登录，跳转到登录页
    next({ name: 'Login', query: { redirect: to.fullPath } })
  } else if (to.name === 'Login' && isLoggedIn) {
    // 已登录，访问登录页则重定向到首页
    next({ name: 'Home' })
  } else {
    // 其他情况正常访问
    next()
  }
})

export default router
