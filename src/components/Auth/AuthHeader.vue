<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md w-[80%] self-center">
    <div class="text-center">
      <h2 class="mt-6 text-4xl font-npo-bold text-npo-white">
        {{ title }}
      </h2>
      <p class="mt-2 text-lg text-npo-grey">
        {{ leadText }}
        <router-link :to="linkTo" class="font-medium text-npo-orange hover:opacity-90" :aria-label="`Ga naar ${linkText.toLowerCase()}`">
          {{ linkText }}
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  leadText: string;
  linkText: string;
  linkTo: string;
}>();
</script>