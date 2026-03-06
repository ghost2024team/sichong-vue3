<template>
  <div class="rooms-page min-h-screen bg-gradient-to-b from-red-800 to-red-950">
    <!-- 导航栏 -->
    <nav class="bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="flex items-center space-x-3">
            <span class="text-3xl">🃏</span>
            <span class="text-xl font-bold text-white">四冲扑克</span>
          </router-link>
          
          <div class="flex items-center space-x-4">
            <router-link 
              to="/game/create" 
              class="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all"
            >
              ＋ 创建房间
            </router-link>
            <router-link 
              to="/" 
              class="px-6 py-2 text-white border border-white/50 rounded-full hover:bg-white/10 transition-all"
            >
              返回首页
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- 页面标题 -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-5xl font-bold text-white text-center mb-4">
        🎮 游戏房间
      </h1>
      <p class="text-red-200 text-xl text-center mb-12">
        选择一个房间加入，开始游戏！
      </p>

      <!-- 筛选和搜索 -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <div class="relative">
          <input 
            type="text" 
            placeholder="搜索房间号..." 
            class="w-64 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-red-300 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>
        <select class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white focus:outline-none focus:border-yellow-400 transition-colors">
          <option value="">所有模式</option>
          <option value="classic">经典模式</option>
          <option value="ranked">排位模式</option>
          <option value="friend">好友房</option>
        </select>
      </div>

      <!-- 房间列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- 房间卡片 -->
        <div 
          v-for="room in rooms" 
          :key="room.id"
          class="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/20 transition-all cursor-pointer"
          @click="joinRoom(room.id)"
        >
          <!-- 房间头部 -->
          <div class="bg-gradient-to-r from-red-600/50 to-red-700/50 px-6 py-4">
            <div class="flex justify-between items-center">
              <h3 class="text-xl font-bold text-white">{{ room.name }}</h3>
              <span class="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                {{ room.status }}
              </span>
            </div>
          </div>
          
          <!-- 房间信息 -->
          <div class="p-6 space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-red-200">房间号</span>
              <span class="text-white font-mono text-lg">{{ room.id }}</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-red-200">模式</span>
              <span class="text-white">{{ room.mode }}</span>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-red-200">人数</span>
              <div class="flex items-center space-x-2">
                <div class="flex -space-x-2">
                  <div 
                    v-for="i in room.players" 
                    :key="i"
                    class="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-red-800 flex items-center justify-center text-xs"
                  >
                    🎮
                  </div>
                </div>
                <span class="text-white">{{ room.players }}/4</span>
              </div>
            </div>
            
            <div class="flex justify-between items-center">
              <span class="text-red-200">底分</span>
              <span class="text-yellow-400 font-bold">{{ room.baseScore }}</span>
            </div>
            
            <!-- 加入按钮 -->
            <button 
              class="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all transform group-hover:scale-105"
              :disabled="room.players >= 4"
            >
              {{ room.players >= 4 ? '已满员' : '加入房间' }}
            </button>
          </div>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="rooms.length === 0" class="text-center py-20">
        <div class="text-8xl mb-6">😢</div>
        <h3 class="text-2xl font-bold text-white mb-4">暂无可用房间</h3>
        <p class="text-red-200 mb-8">创建一个新房间，邀请好友一起游戏吧！</p>
        <router-link 
          to="/game/create" 
          class="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all"
        >
          创建房间
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 模拟房间数据
const rooms = ref([
  {
    id: '8888',
    name: '欢乐斗牌 1 号房',
    status: '游戏中',
    mode: '经典模式',
    players: 2,
    baseScore: 100
  },
  {
    id: '6666',
    name: '高手对决',
    status: '等待中',
    mode: '排位模式',
    players: 3,
    baseScore: 500
  },
  {
    id: '9999',
    name: '新手练习房',
    status: '等待中',
    mode: '经典模式',
    players: 1,
    baseScore: 50
  },
  {
    id: '1234',
    name: '好友娱乐房',
    status: '等待中',
    mode: '好友房',
    players: 0,
    baseScore: 100
  },
  {
    id: '7777',
    name: '巅峰对决',
    status: '游戏中',
    mode: '排位模式',
    players: 4,
    baseScore: 1000
  }
])

const joinRoom = (roomId) => {
  const room = rooms.value.find(r => r.id === roomId)
  if (room && room.players < 4) {
    router.push(`/game/room/${roomId}`)
  }
}
</script>

<style lang="scss" scoped>
.rooms-page {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}
</style>
