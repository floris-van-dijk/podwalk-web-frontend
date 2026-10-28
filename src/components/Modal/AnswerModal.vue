<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div class="bg-npo-blue-600 rounded-2xl p-8 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-2xl font-bold text-npo-white">
          {{ question.answer ? 'Antwoord bewerken' : 'Vraag beantwoorden' }}
        </h3>
        <button
            @click="closeModal"
            class="text-npo-white hover:text-npo-orange-500 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="space-y-6">
        <div class="bg-npo-blue-400 rounded-lg p-4">
          <label class="block text-sm font-semibold text-npo-white mb-2">Vraag</label>
          <p class="text-npo-white opacity-90">{{ question.question }}</p>
        </div>

        <div>
          <label class="block text-sm font-semibold text-npo-white mb-2">
            Antwoord <span class="text-npo-orange-500">*</span>
          </label>
          <textarea
              v-model="form.answer"
              rows="6"
              placeholder="Typ hier het antwoord op de vraag..."
              class="w-full px-4 py-3 rounded-lg bg-npo-white text-npo-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-npo-orange-500 transition-all resize-none"
              required
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end gap-4 mt-8">
        <button
            @click="closeModal"
            class="px-6 py-2 text-npo-white hover:text-npo-orange-500 transition-colors font-medium"
        >
          Annuleren
        </button>
        <button
            @click="handleSubmit"
            :disabled="!form.answer.trim() || isSubmitting"
            class="px-6 py-2 bg-npo-orange hover:bg-npo-orange/90 disabled:bg-npo-orange/80 disabled:opacity-50 rounded-lg text-npo-white font-medium transition-all"
        >
          {{ isSubmitting ? 'Toevoegen...' : 'Antwoord Toevoegen' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex'
import type { UserQuestion } from '@/types/userQuestion'

const props = defineProps<{
  modelValue: boolean
  question: UserQuestion
}>()

const emit = defineEmits(['update:modelValue', 'success'])
const store = useStore()

const form = ref({
  answer: ''
})

const isSubmitting = ref(false)

watch(() => props.modelValue, (isOpening) => {
  if (isOpening) {
    form.value.answer = props.question.answer || ''
  }
})

const closeModal = () => {
  emit('update:modelValue', false)
  form.value.answer = ''
}

const handleSubmit = async () => {
  if (!form.value.answer.trim()) return
  isSubmitting.value = true

  try {
    const updatedQuestion: UserQuestion = {
      ...props.question,
      answer: form.value.answer
    }

    await store.dispatch('userQuestion/updateUserQuestion', updatedQuestion)

    emit('success')
    closeModal()
  } catch (error) {
    console.error('Error saving answer:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>