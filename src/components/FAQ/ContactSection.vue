<template>
  <div class="text-center mb-12">
    <h2 class="text-npo-white text-3xl font-bold mb-4">
      Antwoord niet gevonden?
    </h2>
    <p class="text-npo-white text-xl mb-8 opacity-90">
      Neem contact met ons op, we helpen je graag
    </p>

    <div class="grid grid-cols-1 gap-8 max-w-xl mx-auto">
      <div class="space-y-4">
        <div class="relative">
          <textarea
              v-model="form.question"
              :disabled="!userLoggedIn"
              :placeholder="userLoggedIn ? 'Stel hier je vraag...' : ''"
              rows="4"
              class="w-full h-32 px-4 py-3 rounded-lg bg-npo-white text-npo-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-npo-orange-500 transition-all resize-none"
              required
              aria-label="Stel je vraag"
          ></textarea>

          <div
              v-if="!userLoggedIn"
              class="absolute inset-0 flex items-center justify-center text-gray-500 px-4 text-center pointer-events-none"
          >
            Je moet ingelogd zijn om een vraag te kunnen stellen...
          </div>
        </div>

        <div v-if="submitError" class="bg-red-50 border border-red-200 rounded-md p-4 text-left" role="alert" aria-live="assertive">
          <p class="text-sm text-red-700">{{ submitError }}</p>
        </div>

        <div v-if="submitSuccess" class="bg-green-50 border border-green-200 rounded-md p-4" role="alert" aria-live="assertive">
          <p class="text-sm text-green-700">{{ submitSuccess }}</p>
        </div>

        <button
            @click="handleSubmit"
            :disabled="!isFormValid || isSubmitting"
            :aria-disabled="!isFormValid || isSubmitting"
            class="w-full bg-npo-orange hover:bg-npo-orange/90 disabled:bg-npo-orange disabled:opacity-80 text-npo-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-npo-orange-500"
        >
          {{ isSubmitting ? 'Verzenden...' : 'Sturen' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import type { RootState } from '@/store'

const store = useStore<RootState>()

const userLoggedIn = computed(() => store.getters["auth/isAuthenticated"])

const isSubmitting = computed(() => store.getters['userQuestion/isLoading'])
const submitError = computed(() => store.getters['userQuestion/getError'])

const form = ref({
  question: ''
})

const submitSuccess = ref<string | null>(null)

const isFormValid = computed(() => {
  return form.value.question.trim() !== '' && userLoggedIn.value
})

const handleSubmit = async () => {
  if (!isFormValid.value || isSubmitting.value) return

  store.commit('userQuestion/CLEAR_ERROR')
  submitSuccess.value = null

  try {
    await store.dispatch('userQuestion/createUserQuestion', form.value.question)

    submitSuccess.value = 'Je vraag is verzonden. We zullen zo snel mogelijk antwoorden.'
    form.value.question = ''
  } catch (error) {
    console.error('Fout bij het verzenden van de vraag:', error)
  }
}
</script>