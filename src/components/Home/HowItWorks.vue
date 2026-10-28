<template>
  <section class="bg-gradient-to-b from-npo-blue-900 to-npo-blue-400 py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-npo-white mb-4">
          Hoe het werkt
        </h2>
        <p class="text-lg text-npo-grey max-w-2xl mx-auto">
          In drie eenvoudige stappen beleef je de meest fascinerende verhalen van je stad
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <StepCard
            v-for="(step, index) in steps"
            :key="step.id"
            :step="step"
            :stepNumber="index + 1"
            :isLast="index === steps.length - 1"
        />
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <p class="text-npo-grey mb-6 text-lg">
          Klaar om je eerste podwalk te beginnen?
        </p>
        <button class="bg-npo-orange hover:bg-npo-orange/80 text-npo-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                @click="router.push('/view-podwalks')"
        >
          Start je avontuur
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from "vue-router";
import StepCard from './StepCard.vue'

const router = useRouter();

interface Step {
  id: string
  title: string
  description: string
  icon: string
  alt: string
  features: string[]
}

const steps = ref<Step[]>([
  {
    id: 'download',
    title: 'Download de app',
    description: 'Download onze gratis app en ontdek de wereld van interactieve verhalen om je heen.',
    icon: 'app-icon.png',
    alt: 'NPO Luister app icoon',
    features: [
      'Gratis te downloaden',
      'Beschikbaar voor iOS en Android',
      'Geen registratie vereist'
    ]
  },
  {
    id: 'choose',
    title: 'Kies een podwalk',
    description: 'Selecteer uit tientallen verhalen en ontdek de verborgen geschiedenis van je omgeving.',
    icon: 'icon-podwalk-thumbnail.png',
    alt: 'podwalk thumbnail icoon',
    features: [
      'Verschillende thema\'s beschikbaar',
      'Van 30 minuten tot 2 uur',
      'Voor alle leeftijden'
    ]
  },
  {
    id: 'explore',
    title: 'Veel plezier',
    description: 'Loop, luister en beleef fascinerende verhalen terwijl je de stad op een nieuwe manier ontdekt.',
    icon: 'veel-plezier.png',
    alt: 'Veel plezier',
    features: [
      'Interactieve ervaring',
      'Historische locaties',
      'Verrassende ontdekkingen'
    ]
  }
])
</script>