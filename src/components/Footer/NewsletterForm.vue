<template>
  <form
      @submit.prevent="handleSubmit"
      class="flex flex-col sm:flex-row gap-3"
  >
    <div class="flex-1">
      <label for="email" class="sr-only">E-mailadres</label>
      <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Vul e-mailadres in..."
          required
          class="w-full px-4 py-3 rounded-lg border border-npo-blue-400 bg-npo-white text-npo-blue-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-npo-orange focus:border-transparent transition-all duration-200"
      >
    </div>

    <button
        type="submit"
        :disabled="isSubmitting"
        class="px-6 py-3 bg-npo-orange hover:bg-npo-orange/80 disabled:bg-npo-orange/110 text-npo-white font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-npo-blue-600"
    >
      <span v-if="!isSubmitting">Inschrijven</span>
      <span v-else class="flex items-center">
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Bezig...
      </span>
    </button>
  </form>

  <div v-if="message" class="mt-3">
    <p
        :class="[
        'text-sm',
        messageType === 'success' ? 'text-green-400' : 'text-red-400'
      ]"
    >
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)
const message = ref('')
const messageType = ref<'success' | 'error'>('success')

const handleSubmit = async () => {
  if (!email.value) return

  isSubmitting.value = true
  message.value = ''

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    message.value = 'Bedankt voor je aanmelding! Je ontvangt binnenkort een bevestigingsmail.'
    messageType.value = 'success'
    email.value = ''
    isSubmitting.value = false
    await new Promise(resolve => setTimeout(resolve, 3000))
    message.value = ''
  } catch (error) {
    message.value = 'Er ging iets mis. Probeer het later opnieuw.'
    messageType.value = 'error'
  }
}
</script>