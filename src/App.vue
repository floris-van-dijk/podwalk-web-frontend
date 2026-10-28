<script setup lang="ts">
import CustomNavbar from "@/components/Navbar/CustomNavbar.vue";
import CustomFooter from "@/components/Footer/CustomFooter.vue";
</script>

<template>
  <div class="min-h-screen h-screen flex flex-col">
    <CustomNavbar />
    <div class="flex-1">
      <router-view />
    </div>
    <CustomFooter />
  </div>
</template>

<style>
/* Reset default margins and padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow-x: hidden;
}

#app {
  height: 100%;
  position: relative;
}
</style>
