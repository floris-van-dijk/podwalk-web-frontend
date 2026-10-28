<template>
  <section id="what-are-podwalks" class="py-16 md:py-24 bg-gradient-to-t from-npo-blue-400 to-npo-blue-900">
    <div class="container mx-auto px-6 md:px-12 lg:px-24">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Wat zijn Podwalks?
        </h2>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Video/Image Section -->
        <div class="relative">
          <div class="relative rounded-lg overflow-hidden shadow-2xl">
            <!-- Video Player (shown when play is clicked) -->
            <VideoPlayer v-if="isVideoPlaying" />

            <!-- Thumbnail and Play Button (shown initially) -->
            <template v-else>
              <!-- Placeholder for video thumbnail -->
              <img
                  :src="videoThumbnail"
                  alt="Podwalks uitleg video"
                  class="w-full h-64 md:h-80 object-cover"
              />

              <!-- Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <button
                    @click="playVideo"
                    aria-label="Speel de uitlegvideo over Podwalks af"
                    class="w-16 h-16 md:w-20 md:h-20 bg-npo-orange rounded-full flex items-center justify-center text-white hover:bg-npo-orange-dark transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <svg class="w-8 h-8 md:w-10 md:h-10 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </template>
          </div>
        </div>

        <!-- Text Content -->
        <div class="space-y-6">
          <p class="text-start text-lg md:text-xl text-npo-grey-100 leading-relaxed">
            Een podwalk is jouw audio‑tour in het wild – je wandelt, hoort verhalen die precies op de plek passen, in je
            eigen tempo en met complete vrijheid.
          </p>

          <p class="text-start text-lg md:text-xl text-npo-grey-100 leading-relaxed">
            Of je nu toerist bent, cultuurfan, historie-liefhebber of lerende scholier:
            het is een eenvoudige, meeslepende en informatieve manier om een locatie écht te ontdekken.
            Trek die schoenen aan, doe je oortjes in en laat je meevoeren!
          </p>

          <!-- Features List -->
          <ul class="grid md:grid-cols-2 gap-4 mt-8">
            <li v-for="feature in features" :key="feature.title" class="flex items-start space-x-3">
              <div class="w-6 h-6 bg-npo-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex flex-col items-start">
                <h4 class="text-white font-semibold">{{ feature.title }}</h4>
                <p class="text-npo-grey-100 text-sm">{{ feature.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VideoPlayer from './VideoPlayer.vue'

const videoThumbnail = computed(() => require('@/assets/video-thumbnail.jpg'))
const isVideoPlaying = ref(false)

const features = ref([
  {
    title: 'Interactief',
    description: 'Ontdek verhalen terwijl je loopt'
  },
  {
    title: 'Leerzaam',
    description: 'Leer over het verleden van Nederland'
  },
  {
    title: 'Gezellig',
    description: 'Loop samen met anderen'
  },
  {
    title: 'Toegankelijk',
    description: 'Iedereen kan meedoen'
  }
])

const playVideo = () => {
  isVideoPlaying.value = true
}
</script>