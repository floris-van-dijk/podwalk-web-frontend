<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-npo-white">
      {{ label }}
    </label>
    <div class="mt-1">
      <input :id="id" :name="id" :type="type" :autocomplete="autocomplete" :value="modelValue" @input="onInput"
             required :placeholder="placeholder" :class="[
                    'appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
                    error ? 'border-red-300 text-red-900' : 'border-gray-300 text-gray-900'
                ]" :aria-invalid="error ? 'true' : 'false'" :aria-describedby="error ? `${id}-error` : undefined" />
      <p v-if="error" :id="`${id}-error`" class="mt-2 text-sm text-red-500">{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  id: string;
  label: string;
  type: string;
  modelValue: string;
  placeholder: string;
  error?: string;
  autocomplete?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>