<template>
  <div class="bg-npo-blue-900">
    <HeroSection />

    <PodwalkExplanation />

<!-- Carousel krijgt een maximaal aantal podwalks en een random volgorde omdat het aantal podwalks teveel is.
     Hierdoor is de carousel niet te lang en verandert deze dus elke keer. Oplossing: carousel voor een serie/locatie etc.
-->
    <PodwalkCarousel
        :podwalks="shuffledAndReducedPodwalks"
        :loading="loading"
        :error="error"
        @retry="handleRetry"
    />

    <HowItWorks/>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import HeroSection from "@/components/Home/HeroSection.vue";
import PodwalkCarousel from "@/components/Home/PodwalkCarousel.vue";
import PodwalkExplanation from "@/components/Home/PodwalkExplanation.vue";
import HowItWorks from "@/components/Home/HowItWorks.vue";

const store = useStore()

const podwalks = computed(() => store.state.podwalks.podwalks)
const shuffledAndReducedPodwalks = computed(() => {
  const list = [...podwalks.value]
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }
  return list.slice(0, 11)
})
const loading = computed(() => store.getters['podwalks/isLoading'])
const error = computed(() => store.state.podwalks.error)

onMounted(() => {
  store.dispatch('podwalks/fetchPodwalks')
})

const handleRetry = () => {
  store.dispatch('podwalks/fetchPodwalks')
}
</script>