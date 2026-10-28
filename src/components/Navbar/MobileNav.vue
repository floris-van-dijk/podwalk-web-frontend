<template>
  <div class="flex items-center justify-between h-16 px-4">
    <button @click="$emit('toggleMenu')" class="text-npo-white hover:text-npo-orange transition-colors duration-200 p-2" :aria-expanded="isMenuOpen" aria-label="Open of sluit het mobiele menu">
      <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>

    <router-link to="/" aria-label="Ga naar de thuispagina">
      <img src="../../assets/npo-luister-logo.png" alt="NPO Luister Logo" class="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200" />
    </router-link>

    <button @click="$emit('toggleSearch')" class="text-npo-white hover:text-npo-orange transition-colors duration-200 p-2" aria-label="Open de zoekbalk">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  isMenuOpen: boolean
}>();

defineEmits(['toggleMenu', 'toggleSearch']);
</script>