<template>
  <div class="relative group">
    <!-- Step Number Badge -->
    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
      <div class="w-12 h-12 bg-npo-orange rounded-full flex items-center justify-center text-npo-white font-bold text-lg shadow-lg">
        {{ stepNumber }}
      </div>
    </div>

    <!-- Card -->
    <div class="bg-npo-blue-400 rounded-xl p-8 pt-12 text-center transition-all duration-300 hover:bg-npo-blue-300 hover:shadow-xl hover:transform hover:-translate-y-2 min-h-[400px] flex flex-col">

      <!-- Icon Container -->
      <div class="h-40 flex items-center justify-center mb-6">
        <img class="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" :src="iconPath" :alt="step.alt"/>
      </div>

      <!-- Title -->
      <h3 class="text-xl lg:text-2xl font-bold text-npo-white mb-4">
        {{ step.title }}
      </h3>

      <!-- Description -->
      <p class="text-npo-grey mb-6 leading-relaxed flex-grow">
        {{ step.description }}
      </p>

      <!-- Features List -->
      <ul class="space-y-2">
        <li
            v-for="feature in step.features"
            :key="feature"
            class="flex items-center justify-center text-sm text-npo-grey"
        >
          <svg class="w-4 h-4 text-npo-orange mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface Step {
  id: string
  title: string
  description: string
  icon: string
  alt: string
  features: string[]
}

interface Props {
  step: Step
  stepNumber: number
  isLast: boolean
}

const props = defineProps<Props>()

const iconPath = computed(() => {
  return require(`@/assets/${props.step.icon}`)
})
</script>