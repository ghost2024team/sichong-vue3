<template>
  <div class="home-page">
    <!-- 导航栏 -->
    <nav class="bg-gradient-to-r from-red-800 to-red-600 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center space-x-3">
            <span class="text-4xl">🃏</span>
            <h1 class="text-3xl font-bold text-white">四冲扑克</h1>
          </div>
          
          <div class="hidden md:flex items-center space-x-8">
            <a href="#features" class="text-white hover:text-red-200 transition-colors">游戏特色</a>
            <a href="#rules" class="text-white hover:text-red-200 transition-colors">游戏规则</a>
            <a href="#about" class="text-white hover:text-red-200 transition-colors">关于我们</a>
          </div>
          
          <div class="flex items-center space-x-4">
            <router-link 
              to="/login" 
              class="px-6 py-2 text-white border-2 border-white rounded-full hover:bg-white hover:text-red-600 transition-all font-semibold"
            >
              登录
            </router-link>
            <router-link 
              to="/register" 
              class="px-6 py-2 bg-white text-red-600 rounded-full hover:bg-red-50 transition-all font-semibold shadow-md"
            >
              注册
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero 区域 -->
    <section class="relative bg-gradient-to-b from-red-600 via-red-700 to-red-900 py-32 overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 text-9xl">🂡</div>
        <div class="absolute top-40 right-20 text-8xl">🂮</div>
        <div class="absolute bottom-40 left-1/4 text-9xl">🃏</div>
        <div class="absolute bottom-20 right-1/3 text-8xl">🂱</div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          四冲扑克
        </h2>
        <p class="text-2xl text-red-100 mb-12 max-w-3xl mx-auto">
          经典扑克游戏，四人成局，两两结对，斗智斗勇，欢乐无穷！
        </p>
        
        <!-- 游戏入口按钮 -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6">
          <router-link 
            to="/game/rooms" 
            class="group relative px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 text-2xl font-bold rounded-2xl shadow-2xl hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105"
          >
            <span class="flex items-center space-x-3">
              <span class="text-4xl">🎮</span>
              <span>开始游戏</span>
            </span>
            <div class="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </router-link>
          
          <router-link 
            to="/game/create" 
            class="group px-12 py-5 bg-white/20 backdrop-blur-sm text-white text-2xl font-bold rounded-2xl border-2 border-white/50 hover:bg-white/30 transition-all transform hover:scale-105"
          >
            <span class="flex items-center space-x-3">
              <span class="text-4xl">➕</span>
              <span>创建房间</span>
            </span>
          </router-link>
        </div>
        
        <!-- 在线人数 -->
        <div class="mt-12 flex justify-center items-center space-x-2 text-red-100">
          <span class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-lg">当前在线：<strong class="text-white text-xl">1,234</strong> 人</span>
        </div>
      </div>
    </section>

    <!-- 游戏特色 -->
    <section id="features" class="py-24 bg-gradient-to-b from-red-900 to-red-950">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold text-center text-white mb-16">游戏特色</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- 特色 1 -->
          <div class="text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform">
              👥
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">四人结对</h4>
            <p class="text-red-200 text-lg">四人游戏，两两结对，默契配合，斗智斗勇</p>
          </div>
          
          <!-- 特色 2 -->
          <div class="text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">策略为王</h4>
            <p class="text-red-200 text-lg">出牌顺序、配合默契，策略决定胜负</p>
          </div>
          
          <!-- 特色 3 -->
          <div class="text-center group">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform">
              🏆
            </div>
            <h4 class="text-2xl font-bold text-white mb-4">排位竞技</h4>
            <p class="text-red-200 text-lg">天梯排位，证明你的实力，冲击巅峰</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 游戏规则 -->
    <section id="rules" class="py-24 bg-gradient-to-b from-red-950 to-black">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-4xl font-bold text-center text-white mb-16">游戏规则</h3>
        
        <div class="space-y-8">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="flex items-start space-x-4">
              <span class="text-4xl">📋</span>
              <div>
                <h4 class="text-2xl font-bold text-white mb-3">基本规则</h4>
                <p class="text-red-200 text-lg leading-relaxed">
                  四冲使用两副扑克牌（108 张），四人游戏，对家为队友。先出完牌的一方获胜。
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="flex items-start space-x-4">
              <span class="text-4xl">🎴</span>
              <div>
                <h4 class="text-2xl font-bold text-white mb-3">牌型大小</h4>
                <p class="text-red-200 text-lg leading-relaxed">
                  大王 > 小王 > 2 > A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="flex items-start space-x-4">
              <span class="text-4xl">💡</span>
              <div>
                <h4 class="text-2xl font-bold text-white mb-3">特殊牌型</h4>
                <p class="text-red-200 text-lg leading-relaxed">
                  对子、三张、炸弹（四张相同）、连对、飞机等，炸弹可以压制任何其他牌型。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-black py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="text-6xl mb-6">🃏</div>
        <p class="text-red-300 text-lg mb-4">四冲扑克 - 经典扑克游戏</p>
        <p class="text-red-400 text-sm">
          &copy; 2026 四冲扑克游戏平台。All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #991B1B 0%, #450A0A 100%);
}
</style>
