<template>
    <div class="bg-npo-blue-600 min-h-screen pt-24">
        <!-- Header Section -->
        <div class="container mx-auto px-4 py-8">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-white mb-4">Admin Dashboard</h1>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center py-8" role="status" aria-live="polite">
                <div class="text-white text-xl">Laden...</div>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="text-center py-8" role="alert" aria-live="assertive">
                <div class="text-red-300 text-xl mb-4">{{ error }}</div>
                <button @click="handleRetry"
                    class="bg-npo-orange-500 hover:bg-npo-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                    aria-label="Opnieuw proberen om podwalks te laden">
                    Opnieuw proberen
                </button>
            </div>

            <!-- Podwalks Table -->
            <div v-else class="bg-npo-blue-600 rounded-lg shadow-lg overflow-hidden border-4 border-npo-blue-300">
                <div class="px-6 py-4 bg-npo-blue-300 text-npo-white">
                    <h2 class="text-2xl font-semibold" id="podwalks-table-title">Podwalks ({{ podwalks.length }})</h2>
                    <p class="text-npo-white">Klik op een podwalk om de podwalk details te bewerken</p>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full" role="table" aria-labelledby="podwalks-table-title">
                        <thead class="bg-npo-blue-400">
                            <tr role="row">
                                <th role="columnheader"
                                    class="px-6 py-3 text-left text-xs font-medium text-npo-white uppercase tracking-wider">
                                    Naam</th>
                                <th role="columnheader"
                                    class="px-6 py-3 text-left text-xs font-medium text-npo-white uppercase tracking-wider">
                                    Plaats</th>
                                <th role="columnheader"
                                    class="px-6 py-3 text-left text-xs font-medium text-npo-white uppercase tracking-wider">
                                    Duur</th>
                                <th role="columnheader"
                                    class="px-6 py-3 text-left text-xs font-medium text-npo-white uppercase tracking-wider">
                                    Afstand</th>
                                <th role="columnheader"
                                    class="px-6 py-3 text-left text-xs font-medium text-npo-white uppercase tracking-wider">
                                    Status</th>
                            </tr>
                        </thead>
                        <tbody class="bg-npo-blue-600 divide-y divide-npo-blue-400">
                            <tr v-for="podwalk in podwalks" :key="podwalk.id" role="row"
                                class="hover:bg-npo-blue-300 cursor-pointer transition" @click="openEditModal(podwalk)"
                                :aria-label="`Bewerk podwalk ${podwalk.name}`">
                                <td role="cell" class="px-6 py-4 whitespace-nowrap text-npo-white">{{ podwalk.name }}</td>
                                <td role="cell" class="px-6 py-4 whitespace-nowrap text-npo-white">{{ podwalk.place }}</td>
                                <td role="cell" class="px-6 py-4 whitespace-nowrap text-npo-white">{{ podwalk.duration || 'Onbekend'
                                }}</td>
                                <td role="cell" class="px-6 py-4 whitespace-nowrap text-npo-white">{{
                                    Math.round(podwalk.bounds?.length?.km || 0) + ' km' || 'Onbekend' }}</td>
                                <td role="cell" class="px-6 py-4 whitespace-nowrap">
                                    <span
                                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-emerald-500 text-npo-white"
                                        aria-label="Status: Actief">
                                        Actief
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Edit Modal -->
        <div v-if="showEditModal" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="edit-podwalk-title">
            <div class="flex items-center justify-center min-h-screen  px-4 pt-4 pb-20 text-center">
                <div class="fixed inset-0 transition-opacity bg-npo-blue-900 bg-opacity-80" @click="closeEditModal" aria-hidden="true">
                </div>

                <div
                    class="relative inline-block w-full max-w-2xl p-6 my-8 overflow-hidden  bg-npo-blue-300 text-left align-middle transition-all transform shadow-xl rounded-lg">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-medium text-npo-white" id="edit-podwalk-title">Podwalk Beschrijving Bewerken</h3>
                        <button @click="closeEditModal" class="text-npo-white hover:text-npo-white" aria-label="Sluit bewerkingsmodal">
                            <span class="sr-only">Sluiten</span>
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form @submit.prevent="saveChanges" v-if="editingPodwalk">
                        <div class="space-y-4">
                            <div>
                                <label for="podwalk-name" class="block text-sm font-medium text-npo-white mb-1">Podwalk Naam</label>
                                <input type="text" :value="editingPodwalk.name" readonly
                                    id="podwalk-name" aria-label="Podwalk naam" 
                                    class="w-full px-3 py-2 border border-gray-300 text-gray-500 bg-gray-100 rounded-md">
                            </div>
                            <div>
                                <label for="custom-description" class="block text-sm font-medium text-npo-white mb-1">Aangepaste
                                    Beschrijving</label>
                                <textarea v-model="customDescription" rows="6"
                                    placeholder="Voer een aangepaste beschrijving in..."
                                    id="custom-description" aria-label="Aangepaste beschrijving"
                                    class="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-npo-blue-500"></textarea>
                                <p class="text-xs text-gray-500 mt-1">
                                    Deze aangepaste beschrijving overschrijft de originele beschrijving voor deze
                                    podwalk.
                                </p>
                            </div>
                            <div v-if="editingPodwalk.description">
                                <label for="current-description" class="block text-sm font-medium text-gray-700 mb-1">Huidige Beschrijving</label>
                                <div
                                    id="current-description" aria-label="Huidige beschrijving"
                                    class="w-full px-3 py-2 border border-gray-300 bg-gray-50 text-gray-600 rounded-md max-h-32 overflow-y-auto">
                                    {{ editingPodwalk.description }}
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end space-x-3 mt-6">
                            <button type="button" @click="closeEditModal"
                                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                aria-label="Annuleer bewerking">
                                Annuleren
                            </button>
                            <button type="submit" :disabled="saving || !customDescription.trim()"
                                class="px-4 py-2 text-sm font-medium text-white bg-npo-orange border border-transparent rounded-md hover:bg-npo-blue-600 focus:outline-none focus:ring-2 focus:ring-npo-orange-500 disabled:opacity-50"
                                :aria-disabled="saving || !customDescription.trim()"
                                aria-label="Sla aangepaste beschrijving op">
                                {{ saving ? 'Opslaan...' : 'Aangepaste Beschrijving Opslaan' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import type { Podwalk } from '@/types/podwalk'

const store = useStore()

// Data
const showEditModal = ref(false)
const editingPodwalk = ref<Podwalk | null>(null)
const customDescription = ref('')
const saving = ref(false)

// Computed
const podwalks = computed(() => store.state.podwalks.podwalks)
const loading = computed(() => store.getters['podwalks/isLoading'])
const error = computed(() => store.state.podwalks.error)

// Methods
const handleRetry = () => {
    store.dispatch('podwalks/fetchPodwalks')
}

const openEditModal = (podwalk: Podwalk) => {
    editingPodwalk.value = { ...podwalk }
    customDescription.value = podwalk.description || ''
    showEditModal.value = true
}

const closeEditModal = () => {
    showEditModal.value = false
    editingPodwalk.value = null
    customDescription.value = ''
    saving.value = false
}

const saveChanges = async () => {
    if (!editingPodwalk.value || !customDescription.value.trim()) return

    saving.value = true

    try {
        await store.dispatch('podwalks/saveOrUpdateCustomDescription', {
            podwalkId: editingPodwalk.value.id,
            description: customDescription.value.trim()
        })

        console.log('✅ Custom description saved successfully')
        closeEditModal()
    } catch (error: any) {
        console.error('❌ Failed to save custom description:', error)
        // The error is already handled in the store, so we just log it here
        // You could show a toast notification here if needed
    } finally {
        saving.value = false
    }
}

// Lifecycle
onMounted(() => {
  store.getters["auth/isAdmin"] || (window.location.href = "/")
  store.dispatch('podwalks/fetchPodwalks')
})
</script>
