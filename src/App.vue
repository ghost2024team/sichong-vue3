<template>
  <div id="app" class="min-h-screen">
    <!-- 游戏页面不显示导航栏 -->
    <template v-if="!isGamePage">
      <router-view />
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isGamePage = computed(() => {
  return route.path.startsWith('/game/room/')
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
