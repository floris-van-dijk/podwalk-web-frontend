<template>
  <div class="bg-npo-blue-600 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
    <button
        @click="toggleCollapsed"
        class="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:bg-npo-blue-400 transition-colors duration-200"
        :class="{ 'bg-npo-blue-400': isCollapsed, 'bg-npo-blue-600': !isCollapsed }"
        :aria-expanded="isCollapsed"
        :aria-controls="`faq-answer-${_uid}`"
    >
      <span :id="`faq-question-${_uid}`" class="text-npo-white font-semibold text-lg pr-4">
        {{ question }}
      </span>

      <svg
          class="w-6 h-6 text-npo-white transform transition-transform duration-300 flex-shrink-0"
          :class="{ 'rotate-180': isCollapsed }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
        :id="`faq-answer-${_uid}`"
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :class="isCollapsed ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
        role="region"
        :aria-labelledby="`faq-question-${_uid}`"
    >
      <div class="px-6 pb-6 pt-2">
        <div class="text-npo-white opacity-90 leading-relaxed mt-3">
          {{ answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'

defineProps<{
  question: string
  answer: string
}>()

const isCollapsed = ref(false)

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>