<template>
  <div class="game-room-page min-h-screen bg-gradient-to-b from-green-800 to-green-950">
    <!-- 游戏桌 -->
    <div class="flex items-center justify-center min-h-screen p-4">
      <div class="relative w-full max-w-6xl aspect-video bg-green-700 rounded-3xl border-8 border-yellow-600 shadow-2xl">
        <!-- 房间信息 -->
        <div class="absolute top-4 left-4 text-white">
          <div class="text-sm opacity-75">房间号</div>
          <div class="text-2xl font-bold font-mono">{{ roomId }}</div>
        </div>
        
        <!-- 玩家位置 - 上方（对家） -->
        <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white flex items-center justify-center text-3xl">
            🎮
          </div>
          <div class="text-center text-white text-sm mt-2">玩家 2</div>
        </div>
        
        <!-- 玩家位置 - 左侧 -->
        <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-4 border-white flex items-center justify-center text-3xl">
            🎮
          </div>
          <div class="text-center text-white text-sm mt-2">玩家 3</div>
        </div>
        
        <!-- 玩家位置 - 右侧 -->
        <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div class="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-white flex items-center justify-center text-3xl">
            🎮
          </div>
          <div class="text-center text-white text-sm mt-2">玩家 4</div>
        </div>
        
        <!-- 玩家位置 - 下方（自己） -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div class="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-4 border-white flex items-center justify-center text-4xl shadow-lg">
            🎮
          </div>
          <div class="text-center text-white text-sm mt-2 font-bold">我</div>
        </div>
        
        <!-- 桌面中央 - 出牌区域 -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div class="w-64 h-48 bg-green-800/50 rounded-xl border-2 border-white/20 flex items-center justify-center">
            <div class="text-white/50 text-center">
              <div class="text-4xl mb-2">🎴</div>
              <div>出牌区域</div>
            </div>
          </div>
        </div>
        
        <!-- 我的手牌 -->
        <div class="absolute bottom-32 left-1/2 transform -translate-x-1/2">
          <div class="flex space-x-1">
            <div 
              v-for="i in 12" 
              :key="i"
              class="w-12 h-16 bg-white rounded-lg shadow-lg border border-gray-300 flex items-center justify-center text-2xl hover:-translate-y-2 transition-transform cursor-pointer"
            >
              🂡
            </div>
          </div>
        </div>
        
        <!-- 游戏控制按钮 -->
        <div class="absolute bottom-32 right-8 space-y-4">
          <button class="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all shadow-lg">
            出牌
          </button>
          <button class="px-8 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-bold rounded-full hover:from-gray-300 hover:to-gray-400 transition-all shadow-lg">
            过
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const roomId = route.params.id
</script>

<style lang="scss" scoped>
.game-room-page {
  background: radial-gradient(circle at center, #166534 0%, #14532d 100%);
}
</style>
