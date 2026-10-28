<template>
  <button type="submit" :disabled="isLoading || disabled"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-npo-orange hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          :aria-disabled="isLoading || disabled">
    <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>
    <span v-if="isLoading" aria-live="polite">{{ loadingText }}</span>
    <span v-else>
            <slot></slot>
        </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  isLoading: boolean;
  disabled?: boolean;
  loadingText: string;
}>();
</script>