<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" :aria-labelledby="`faq-modal-title-${_uid}`">
    <div class="bg-npo-blue-600 rounded-2xl p-8 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between mb-6">
        <h3 :id="`faq-modal-title-${_uid}`" class="text-2xl font-bold text-npo-white">
          {{ title }}
        </h3>
        <button
            @click="closeModal"
            class="text-npo-white hover:text-npo-orange-500 transition-colors"
            aria-label="Sluit de modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <label :for="`faq-question-input-${_uid}`" class="block text-sm font-semibold text-npo-white mb-2">
            Vraag <span class="text-npo-orange-500">*</span>
          </label>
          <input
              :id="`faq-question-input-${_uid}`"
              type="text"
              v-model="form.question"
              placeholder="Vul hier de vraag in..."
              class="w-full px-4 py-3 rounded-lg bg-npo-white text-npo-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-npo-orange-500 transition-all"
              required
              aria-label="Vraag"
          />
        </div>

        <div>
          <label :for="`faq-answer-input-${_uid}`" class="block text-sm font-semibold text-npo-white mb-2">
            Antwoord <span class="text-npo-orange-500">*</span>
          </label>
          <textarea
              :id="`faq-answer-input-${_uid}`"
              v-model="form.answer"
              rows="6"
              placeholder="Het antwoord op de vraag..."
              class="w-full px-4 py-3 rounded-lg bg-npo-white text-npo-blue-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-npo-orange-500 transition-all resize-none"
              required
              aria-label="Antwoord"
          ></textarea>
        </div>
      </div>

      <div class="flex justify-end gap-4 mt-8">
        <button
            @click="closeModal"
            class="px-6 py-2 text-npo-white hover:text-npo-orange-500 transition-colors font-medium"
            aria-label="Annuleer het toevoegen van de FAQ"
        >
          Annuleren
        </button>
        <button
            @click="handleSubmit"
            :disabled="!form.question.trim() || !form.answer.trim() || isSubmitting"
            class="px-6 py-2 bg-npo-orange hover:bg-npo-orange/90 disabled:bg-npo-orange/80 disabled:opacity-50 rounded-lg text-npo-white font-medium transition-all"
            aria-label="Voeg de FAQ toe"
        >
          {{ isSubmitting ? 'Toevoegen...' : 'FAQ Toevoegen' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';
import type { FAQ } from '@/types/faq';

const props = defineProps<{
  modelValue: boolean,
  initialData?: Partial<FAQ>,
  title: string
}>();

const emit = defineEmits(['update:modelValue', 'success']);
const store = useStore();

const form = ref({
  question: '',
  answer: ''
});

const isSubmitting = ref(false);

watch(() => props.modelValue, (isOpening) => {
  if (isOpening) {
    form.value.question = props.initialData?.question || '';
    form.value.answer = props.initialData?.answer || '';
  }
});

const closeModal = () => {
  emit('update:modelValue', false);
  form.value.question = '';
  form.value.answer = '';
};

const handleSubmit = async () => {
  if (!form.value.question.trim() || !form.value.answer.trim()) return;
  isSubmitting.value = true;

  try {
    await store.dispatch('faq/createFaq', form.value);
    emit('success');
    closeModal();
  } catch (error) {
    console.error('Error saving FAQ:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>