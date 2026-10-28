<template>
  <section class="py-16 md:py-24 bg-gradient-to-b from-npo-blue-400 to-npo-blue-900">
    <div class="container mx-auto px-6 md:px-12 lg:px-24">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold text-npo-white mb-4">
          Onze Podwalks
        </h2>
        <p class="text-lg text-npo-grey max-w-2xl mx-auto">
          Ontdek onze collectie van interactieve wandelingen door de geschiedenis
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12" role="status" aria-live="polite">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-npo-orange"></div>
        <span class="sr-only">Podwalks worden geladen...</span>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12" role="alert" aria-live="assertive">
        <p class="text-red-400 text-lg">{{ error }}</p>
        <button
            @click="retryFetch"
            class="mt-4 bg-npo-orange text-npo-white px-6 py-2 rounded-md hover:bg-npo-orange/90 transition-colors"
        >
          Probeer Opnieuw
        </button>
      </div>

      <!-- Carousel -->
      <div v-else class="relative" role="region" aria-label="Podwalk Carousel">
        <!-- Carousel Container -->
        <div class="overflow-hidden" ref="carouselContainer">
          <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div
                v-for="(podwalk, index) in displayPodwalks"
                :key="podwalk.id || index"
                class="flex-shrink-0 px-3"
                :class="slideClass"
                role="group"
                aria-roledescription="slide"
                :aria-label="`Podwalk: ${podwalk.title}`"
            >
              <PodwalkCard :podwalk="podwalk" />
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
            v-if="canGoPrev"
            @click="prevSlide"
            aria-label="Vorige podwalk"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        <button
            v-if="canGoNext"
            @click="nextSlide"
            aria-label="Volgende podwalk"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center text-white transition-all duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Carousel navigatie">
          <button
              v-for="(_, index) in totalSlides"
              :key="index"
              @click="goToSlide(index)"
              :aria-label="`Ga naar slide ${index + 1}`"
              :aria-selected="index === currentSlide"
              role="tab"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="index === currentSlide ? 'bg-npo-orange' : 'bg-white bg-opacity-30 hover:bg-opacity-50'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits } from 'vue'
import type { Podwalk } from '@/types/podwalk'
import PodwalkCard from "@/components/Home/PodwalkCard.vue";
import {mockPodwalks} from "@/store/modules/podwalk/mockData";

interface Props {
  podwalks: Podwalk[]
  loading: boolean
  error: string | null
}

const props = defineProps<Props>()
const emit = defineEmits<{
  retry: []
}>()

const currentSlide = ref(0)
const carouselContainer = ref<HTMLElement>()
const slidesPerView = ref(4)

// Responsive slides per view
const updateSlidesPerView = () => {
  const width = window.innerWidth
  if (width < 640) {
    slidesPerView.value = 1
  } else if (width < 768) {
    slidesPerView.value = 2
  } else if (width < 1024) {
    slidesPerView.value = 3
  } else {
    slidesPerView.value = 4
  }
}

const displayPodwalks = computed(() =>
    props.podwalks.length > 0 ? props.podwalks : mockPodwalks
)

const slideWidth = computed(() => 100 / slidesPerView.value)
const slideClass = computed(() => {
  const baseClass = 'w-full'
  switch (slidesPerView.value) {
    case 1: return `${baseClass} md:w-full`
    case 2: return `${baseClass} md:w-1/2`
    case 3: return `${baseClass} md:w-1/3`
    case 4: return `${baseClass} md:w-1/4`
    default: return `${baseClass} md:w-1/4`
  }
})

const totalSlides = computed(() =>
    Math.max(0, Math.ceil(displayPodwalks.value.length - slidesPerView.value + 1))
)

const canGoPrev = computed(() => currentSlide.value > 0)
const canGoNext = computed(() => currentSlide.value < totalSlides.value - 1)

const nextSlide = () => {
  if (canGoNext.value) {
    currentSlide.value++
  }
  stopAutoSlide()
  startAutoSlide()
}

const prevSlide = () => {
  if (canGoPrev.value) {
    currentSlide.value--
  }
  stopAutoSlide()
  startAutoSlide()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

const retryFetch = () => {
  emit('retry')
}

// Auto-slide functionality
let autoSlideInterval: number | null = null

const startAutoSlide = () => {
  autoSlideInterval = window.setInterval(() => {
    if (canGoNext.value) {
      nextSlide()
    } else {
      currentSlide.value = 0
    }
  }, 5000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView)
  stopAutoSlide()
})
</script>