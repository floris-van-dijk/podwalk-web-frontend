<template>
  <a class="inline-block w-[50%]" :aria-label="altText">
    <img :src="imagePath" :alt="altText" class="h-12 w-48 object-contain hover:opacity-80 transition-opacity duration-300">
  </a>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface Props {
  store: 'apple' | 'google'
}

const props = defineProps<Props>()

const imagePath = computed(() => {
  if (props.store === 'apple') {
    return require(`@/assets/apple-store-download-icon.svg`)
  }
  return require(`@/assets/google-play-download-icon.webp`)
})

const altText = computed(() => {
  if (props.store === 'apple') {
    return 'Download in de App Store'
  }
  return 'Ontdek het op Google Play'
})
</script>