<template>
  <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[60] bg-npo-blue-900/95 backdrop-blur-sm" @click.self="$emit('close')" role="dialog" aria-modal="true" aria-labelledby="search-heading">
      <div class="container mx-auto px-4 pt-20">
        <div class="flex items-center justify-between mb-8">
          <h2 id="search-heading" class="text-2xl lg:text-3xl font-bold text-npo-white">Ontdek</h2>
          <button @click="$emit('close')" class="text-npo-white hover:text-npo-orange transition-colors duration-200 p-2" aria-label="Sluit de zoekbalk">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>

        <div class="relative mb-8">
          <input
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              placeholder="Zoek naar podwalks, locaties, of onderwerpen..."
              class="w-full px-6 py-4 text-lg bg-npo-blue-600/80 border border-npo-blue-400 rounded-xl text-npo-white placeholder-npo-grey focus:outline-none focus:ring-2 focus:ring-npo-orange focus:border-transparent"
              autofocus
              aria-label="Zoek naar podwalks"
          />
        </div>

        <div class="max-h-[60vh] overflow-y-auto" aria-live="polite">
          <div v-if="!searchQuery" class="text-center py-12">
            <p class="text-npo-grey text-lg">Begin met typen om te zoeken</p>
          </div>
          <div v-else-if="!searchResults.length" class="text-center py-12">
            <p class="text-npo-grey text-lg">Geen resultaten gevonden voor "{{ searchQuery }}"</p>
          </div>
          <ul v-else class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="listbox">
            <li
                v-for="podwalk in searchResults"
                :key="podwalk.id"
                @click="$emit('podwalkSelected', podwalk)"
                class="bg-npo-blue-600/60 border border-npo-blue-400 rounded-xl p-6 hover:bg-npo-blue-600/80 hover:border-npo-orange transition-all duration-200 cursor-pointer group"
                role="option"
                :aria-label="podwalk.name"
            >
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-npo-white font-semibold text-lg group-hover:text-npo-orange transition-colors duration-200 line-clamp-2">
                  {{ podwalk.name }}
                </h3>
                <svg class="text-npo-grey group-hover:text-npo-orange transition-colors duration-200 flex-shrink-0 ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

              <p class="text-npo-grey text-sm mb-3 line-clamp-2 text-start">{{ podwalk.description }}</p>

              <div class="flex items-center justify-between text-xs text-npo-grey">
                <div class="flex items-center space-x-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 4.477 7.477 0 12 0S21 4.477 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>{{ podwalk.place }}</span>
                </div>

                <div v-if="podwalk.bounds" class="flex items-center space-x-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <span>{{ podwalk.bounds.length.minutes }} min</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {ref, watch, defineProps, defineEmits, onMounted, computed} from 'vue';
import { Podwalk } from "@/types/podwalk";
import {useStore} from "vuex";
import {RootState} from "@/store";

onMounted(async () => {
  await fetchAndLogPodwalks()
});

const store = useStore<RootState>();

const props = defineProps<{
  isOpen: boolean
}>();

const emit = defineEmits(['close', 'podwalkSelected']);

const podwalks = computed(() => store.state.podwalks.podwalks)

const searchQuery = ref('');
const searchResults = ref<Podwalk[]>([]);

const handleSearch = () => {
  if (!searchQuery.value) {
    searchResults.value = [];
    return;
  }
  const query = searchQuery.value.toLowerCase();
  // In a real app, this would be an API call, perhaps debounced.
  searchResults.value = podwalks.value.filter(podwalk =>
      podwalk.name.toLowerCase().includes(query) ||
      podwalk.description.toLowerCase().includes(query) ||
      podwalk.place.toLowerCase().includes(query)
  );
};

const fetchAndLogPodwalks = async () => {
  try {
    await store.dispatch('podwalks/fetchPodwalks')

    console.log('✅ Podwalks fetched successfully:', podwalks.value)
    console.log('📊 Number of podwalks:', podwalks.value.length)

    podwalks.value.forEach((podwalk, index) => {
      console.log(`🚶‍♂️ Podwalk ${index + 1}:`, {
        id: podwalk.id,
        name: podwalk.name,
        place: podwalk.place,
        description: podwalk.description,
        coordinates: { lat: podwalk.lat, lng: podwalk.lng }
      })
    })
  } catch (err) {
    console.error('❌ Error fetching podwalks:', err)
  }
}

// Reset search when the overlay is closed
watch(() => props.isOpen, (newValue) => {
  if (!newValue) {
    searchQuery.value = '';
    searchResults.value = [];
  }
});
</script>