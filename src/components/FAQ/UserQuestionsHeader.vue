<template>
  <div class="bg-gradient-to-r from-npo-blue-600 via-npo-blue-700 to-npo-blue-800 rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl">
    <div class="absolute inset-0 bg-gradient-to-br from-npo-blue-500/20 via-transparent to-npo-blue-900/30"></div>
    <div class="absolute top-0 right-0 w-64 h-64 bg-npo-orange/5 rounded-full -translate-y-32 translate-x-32"></div>

    <div class="relative z-10">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <svg class="w-8 h-8 text-npo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h2 class="text-npo-white text-3xl font-bold">
              {{ isAdmin ? 'Ingestuurde Vragen' : 'Mijn Vragen' }}
            </h2>
            <span class="bg-npo-orange text-npo-white text-sm font-bold px-3 py-1 rounded-full">
              {{ questionCount }}
            </span>
          </div>
          <p class="text-npo-white/90 text-lg">
            {{ isAdmin
              ? 'Beheer alle vragen die door gebruikers zijn gesteld en beantwoord ze.'
              : 'Een overzicht van de vragen die je hebt gesteld en hun status.'
            }}
          </p>
        </div>

        <div v-if="isAdmin" class="flex flex-col sm:flex-row gap-3">
          <button
              @click="$emit('create-faq')"
              class="flex items-center gap-2 bg-npo-orange hover:bg-npo-orange/90 text-npo-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Maak een nieuwe veelgestelde vraag aan"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            <span class="hidden sm:inline">Nieuwe FAQ</span>
            <span class="sm:hidden">FAQ</span>
          </button>

          <button
              @click="$emit('refresh')"
              :disabled="isLoading"
              class="flex items-center gap-2 bg-npo-blue-500 hover:bg-npo-blue-400 disabled:bg-npo-blue-500/50 text-npo-white font-medium py-3 px-6 rounded-xl transition-all duration-200 drop-shadow-2xl"
              aria-label="Vernieuw de lijst met vragen"
              aria-live="polite"
          >
            <svg class="w-5 h-5" :class="{ 'animate-spin': isLoading }" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            <span class="sm:inline">{{ isLoading ? 'Vernieuwen...' : 'Vernieuwen' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  isAdmin: boolean
  isLoading: boolean
  questionCount: number
}

interface Emits {
  'create-faq': []
  'refresh': []
}

defineProps<Props>()
defineEmits<Emits>()
</script>