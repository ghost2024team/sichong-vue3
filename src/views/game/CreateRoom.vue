<template>
  <div class="create-room-page min-h-screen bg-gradient-to-b from-red-800 to-red-950 py-12">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 返回按钮 -->
      <div class="mb-8">
        <router-link 
          to="/game/rooms" 
          class="inline-flex items-center space-x-2 text-red-200 hover:text-white transition-colors"
        >
          <span>←</span>
          <span>返回房间列表</span>
        </router-link>
      </div>

      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-white mb-4">
          🎴 创建房间
        </h1>
        <p class="text-red-200 text-xl">
          自定义游戏规则，邀请好友一起游戏
        </p>
      </div>

      <!-- 创建表单 -->
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 space-y-6">
        <!-- 房间名称 -->
        <div>
          <label class="block text-white font-semibold mb-3">房间名称</label>
          <input 
            v-model="formData.roomName"
            type="text" 
            placeholder="输入房间名称..."
            maxlength="20"
            class="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-red-300 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        <!-- 游戏模式 -->
        <div>
          <label class="block text-white font-semibold mb-3">游戏模式</label>
          <div class="grid grid-cols-3 gap-4">
            <button
              v-for="mode in gameModes"
              :key="mode.value"
              @click="formData.mode = mode.value"
              :class="[
                'py-4 rounded-xl border-2 transition-all font-semibold',
                formData.mode === mode.value
                  ? 'bg-yellow-400 border-yellow-400 text-red-900'
                  : 'bg-white/5 border-white/20 text-white hover:border-white/50'
              ]"
            >
              <div class="text-2xl mb-1">{{ mode.icon }}</div>
              <div>{{ mode.label }}</div>
            </button>
          </div>
        </div>

        <!-- 底分设置 -->
        <div>
          <label class="block text-white font-semibold mb-3">底分设置</label>
          <div class="grid grid-cols-4 gap-4">
            <button
              v-for="score in baseScores"
              :key="score"
              @click="formData.baseScore = score"
              :class="[
                'py-4 rounded-xl border-2 transition-all font-bold text-lg',
                formData.baseScore === score
                  ? 'bg-yellow-400 border-yellow-400 text-red-900'
                  : 'bg-white/5 border-white/20 text-white hover:border-white/50'
              ]"
            >
              {{ score }}
            </button>
          </div>
        </div>

        <!-- 高级选项 -->
        <div class="border-t border-white/20 pt-6">
          <h3 class="text-white font-semibold mb-4">高级选项</h3>
          
          <!-- 是否允许观战 -->
          <div class="flex items-center justify-between py-3">
            <div>
              <div class="text-white font-medium">允许观战</div>
              <div class="text-red-300 text-sm">其他玩家可以观看游戏</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                v-model="formData.allowSpectate"
                type="checkbox" 
                class="sr-only peer"
              />
              <div class="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-400"></div>
            </label>
          </div>

          <!-- 是否好友房 -->
          <div class="flex items-center justify-between py-3">
            <div>
              <div class="text-white font-medium">好友房</div>
              <div class="text-red-300 text-sm">仅好友可以加入</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                v-model="formData.isPrivate"
                type="checkbox" 
                class="sr-only peer"
              />
              <div class="w-14 h-7 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-400"></div>
            </label>
          </div>
        </div>

        <!-- 创建按钮 -->
        <button
          @click="createRoom"
          class="w-full py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-xl font-bold rounded-xl hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg"
        >
          创建房间
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const gameModes = [
  { value: 'classic', label: '经典模式', icon: '🎴' },
  { value: 'ranked', label: '排位模式', icon: '🏆' },
  { value: 'friend', label: '好友房', icon: '👥' }
]

const baseScores = [50, 100, 200, 500]

const formData = reactive({
  roomName: '',
  mode: 'classic',
  baseScore: 100,
  allowSpectate: false,
  isPrivate: false
})

const createRoom = () => {
  if (!formData.roomName.trim()) {
    alert('请输入房间名称')
    return
  }
  
  // 生成随机房间号
  const roomId = Math.floor(1000 + Math.random() * 9000).toString()
  
  // 跳转到房间页面
  router.push(`/game/room/${roomId}`)
}
</script>

<style lang="scss" scoped>
.create-room-page {
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
}
</style>
