<template>
  <a
      :href="href"
      class="block text-npo-grey hover:text-npo-orange transition-colors duration-200 text-sm"
      @click.prevent
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  href: string
  text: string
}

defineProps<Props>()
</script>