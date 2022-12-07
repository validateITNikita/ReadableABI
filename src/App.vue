<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-[#2e2e2e] text-[#f5f5f5] uppercase">
    TEXT TO TEST
  </div>

  <RouterView />
</template>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

body {
  min-height: 100vh;
}

html {
  color-scheme: dark light;
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
}

input, textarea, button, select {
  font: inherit;
}


</style>
