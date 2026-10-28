<template>
  <div v-if="isAuthenticated && hasUserQuestions" class="my-16">
    <UserQuestionsHeader
        :is-admin="isAdmin"
        :is-loading="isLoading"
        :question-count="userQuestionCount"
        @create-faq="openCreateFAQModal"
        @refresh="refreshQuestions"
    />

    <div class="bg-npo-blue-600/30 rounded-2xl p-6 backdrop-blur-sm border border-npo-blue-400/20">
      <div v-if="isLoading" class="flex items-center justify-center py-16">
        <div class="flex items-center gap-3 text-npo-white">
          <svg class="w-8 h-8 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <span class="text-lg font-medium">Vragen laden...</span>
        </div>
      </div>

      <div v-else-if="error" class="flex items-center justify-center py-16">
        <div class="text-center">
          <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="text-red-400 text-lg font-medium">{{ error }}</p>
          <button
              @click="refreshQuestions"
              class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Opnieuw proberen
          </button>
        </div>
      </div>

      <div v-else class="space-y-6">
        <div v-if="isAdmin && userQuestions.length > 0" class="flex flex-wrap items-center justify-between gap-4 mb-6 p-4 bg-npo-blue-500/20 rounded-xl border border-npo-blue-400/20">
          <div class="flex flex-wrap gap-4 text-sm">
            <span class="flex items-center gap-2 text-npo-white">
              <div class="w-3 h-3 bg-npo-orange rounded-full"></div>
              Beantwoord: {{ answeredCount }}
            </span>
            <span class="flex items-center gap-2 text-npo-white">
              <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
              In behandeling: {{ unansweredCount }}
            </span>
          </div>
          <div class="text-npo-white/70 text-sm">
            Totaal: {{ userQuestionCount }} {{ userQuestionCount === 1 ? 'vraag' : 'vragen' }}
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <UserQuestionItem
              v-for="question in userQuestions"
              :key="question.uuid"
              :question="question"
          />
        </div>
      </div>
    </div>
  </div>

  <FAQModal
      v-if="isCreateFAQModalOpen"
      v-model="isCreateFAQModalOpen"
      title="Nieuwe FAQ aanmaken"
      @success="handleCreateFAQSuccess"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'
import UserQuestionItem from './UserQuestionItem.vue'
import UserQuestionsHeader from './UserQuestionsHeader.vue'
import FAQModal from '@/components/Modal/FAQModal.vue'

const store = useStore<RootState>()

const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
const isAdmin = computed(() => store.getters['auth/isAdmin'])
const userQuestions = computed(() => store.getters['userQuestion/allUserQuestions'])
const userQuestionCount = computed(() => userQuestions.value.length)
const isLoading = computed(() => store.getters['userQuestion/isLoading'])
const error = computed(() => store.getters['userQuestion/getError'])

const hasUserQuestions = computed(() => userQuestions.value.length > 0)
const answeredCount = computed(() => userQuestions.value.filter(q => q.answer).length)
const unansweredCount = computed(() => userQuestions.value.filter(q => !q.answer).length)

const isCreateFAQModalOpen = ref(false)

const openCreateFAQModal = () => {
  isCreateFAQModalOpen.value = true
}

const handleCreateFAQSuccess = () => {
  console.log('Nieuwe FAQ succesvol aangemaakt!')
  store.dispatch('faq/fetchFaqs')
}

const refreshQuestions = () => {
  if (isAdmin.value) {
    store.dispatch('userQuestion/fetchAllUserQuestions')
  } else {
    store.dispatch('userQuestion/fetchUserQuestions')
  }
}

onMounted(() => {
  if (isAuthenticated.value) {
    refreshQuestions()
  }
})
</script>