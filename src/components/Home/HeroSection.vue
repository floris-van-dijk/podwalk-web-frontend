<template>
  <section
      class="relative h-[80vh] sm:h-[50vh] bg-cover bg-center bg-no-repeat"
      :style="backgroundImageStyle"
      role="presentation"
      aria-label="Sfeerbeeld van de stad Leiden"
  >
    <!-- Dark overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-40" aria-hidden="true"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24">
      <div class="flex flex-col items-start max-w-4xl">
        <!-- NPO Logo/Branding -->
        <div class="mb-8">
          <span class="text-white text-sm font-medium tracking-wider uppercase">Leiden &#x2022; Podwalk</span>
        </div>

        <!-- Main Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-start">
          Het Leidens Ontzet
        </h1>

        <!-- Subtitle -->
        <p class="text-start text-lg md:text-xl text-white mb-8 max-w-3xl leading-relaxed opacity-90">
          Het Leidens Ontzet (1574) begon toen de Spanjaarden de stad belegerden tijdens de Tachtigjarige Oorlog.
          De Leidenaren hielden moedig stand, ondanks honger en ziekte...
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button
              class="bg-npo-orange hover:bg-npo-orange/95 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              @click="router.push('/podwalk/1')"
          >
            Podwalk Bekijken
          </button>
          <button
              class="border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-npo-blue-900 transition-all duration-300"
              @click="scrollToSection"
          >
            Wat zijn Podwalks?
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
      <button
          @click="scrollToSection"
          aria-label="Scroll naar de volgende sectie"
          class="w-6 h-10 border-2 border-white rounded-full flex justify-center cursor-pointer"
      >
        <span class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" aria-hidden="true"></span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Correct way to import the hero image
const backgroundImageStyle = computed(() => ({
  backgroundImage: `url(${require('@/assets/hero-leiden.png')})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  imageRendering: 'crisp-edges',

}))

const scrollToSection = () => {
  const element = document.querySelector('#what-are-podwalks')
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>