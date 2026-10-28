<template>
  <div class="w-full bg-npo-blue-600 rounded-2xl p-8 mb-8 relative overflow-hidden">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <h1 class="text-npo-white text-4xl font-bold mb-4">
          Vaak gestelde vragen
        </h1>
        <p class="text-npo-white text-lg opacity-90">
          Heb je een vraag? Kijk eerst hieronder, misschien staat het antwoord er al bij.
        </p>
      </div>
      <div class="hidden md:block ml-8" aria-hidden="true">
        <div class="w-32 h-32 bg-npo-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <img
              src="@/assets/question-mark.png"
              alt=""
              class="w-32 h-32"
              @error="showFallbackIcon = true"
              v-if="!showFallbackIcon"
          />
          <svg
              v-else
              class="w-16 h-16 text-npo-white"
              fill="currentColor"
              viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showFallbackIcon = ref(false)
</script>