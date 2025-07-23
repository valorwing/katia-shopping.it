<script setup lang="ts">
import desktopTexture from "../assets/desktopTexture.jpg";
</script>
<template>
  <div class="main-wrapper">
    <div
      class="background"
      :style="{ backgroundImage: `url(${desktopTexture})` }"
    ></div>
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
}

.page-content {
  width: 75vw;
  height: 75vh;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
}
</style>
