<template>
  <div class="bg-gradient-to-r from-npo-blue-200 to-npo-blue-300 p-6 rounded-2xl border border-npo-blue-400/30 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-transparent via-npo-blue-200/10 to-npo-blue-400/20 pointer-events-none"></div>

    <div class="relative z-10">
      <div class="sm:justify-between sm:items-start gap-4">
        <div class="flex-1 min-w-0">
          <p class="text-npo-white font-semibold text-lg leading-relaxed">
            {{ question.question }}
          </p>
        </div>

        <div class="flex justify-end items-center gap-3 flex-shrink-0 max-sm:justify-between">
          <span v-if="question.answer" class="flex items-center px-3 py-1.5 text-xs font-bold text-npo-white bg-npo-orange rounded-full shadow-sm" aria-label="Status: Beantwoord">
            <svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
            Beantwoord
          </span>
          <span v-else class="flex items-center px-3 py-1.5 text-xs font-bold text-npo-blue-900 bg-yellow-400 rounded-full shadow-sm animate-pulse" aria-label="Status: In behandeling">
            <svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            In behandeling
          </span>

          <div v-if="isAdmin" class="relative" ref="dropdownContainer">
            <button
                ref="dropdownButton"
                @click="toggleDropdown"
                class="p-2 hover:bg-npo-blue-400/50 rounded-full transition-colors duration-200 group"
                title="Acties"
                aria-haspopup="true"
                :aria-expanded="isDropdownOpen"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="group-hover:scale-110 transition-transform" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.7541C11.0335 13.7541 10.25 12.9706 10.25 12.0041V11.9951C10.25 11.0286 11.0335 10.2451 12 10.2451C12.9665 10.2451 13.75 11.0286 13.75 11.9951V12.0041C13.75 12.9706 12.9665 13.7541 12 13.7541Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.75018C11.0335 7.75018 10.25 6.96668 10.25 6.00018V5.99118C10.25 5.02468 11.0335 4.24118 12 4.24118C12.9665 4.24118 13.75 5.02468 13.75 5.99118V6.00018C13.75 6.96668 12.9665 7.75018 12 7.75018Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.7502C11.0335 19.7502 10.25 18.9667 10.25 18.0002V17.9912C10.25 17.0247 11.0335 16.2412 12 16.2412C12.9665 16.2412 13.75 17.0247 13.75 17.9912V18.0002C13.75 18.9667 12.9665 19.7502 12 19.7502Z" fill="white"/>
              </svg>
            </button>
           </div>

            <Teleport to="body">
              <div
                  v-if="isDropdownOpen"
                  ref="dropdownMenu"
                  :style="dropdownStyle"
                  class="absolute px-3 bg-npo-blue-600/90 backdrop-blur-md rounded-xl shadow-xl border border-npo-blue-400/30 z-50 min-w-52"
                  role="menu"
              >
                <button @click="openAnswerModal" class="w-full px-4 py-3 text-left text-npo-white hover:bg-npo-blue-500 transition-colors flex items-center gap-3" role="menuitem">
                  <svg class="w-5 h-5 text-npo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  <span class="font-medium">
                    {{ question.answer ? 'Antwoord bewerken' : 'Vraag beantwoorden' }}
                  </span>
                </button>
                <div class="border-t border-npo-blue-400/30"></div>
                <button @click="openFAQModal" class="w-full px-4 py-3 text-left text-npo-white hover:bg-npo-blue-500 transition-colors flex items-center gap-3" role="menuitem">
                  <svg class="w-5 h-5 text-npo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                  <span class="font-medium">Toevoegen aan FAQ</span>
                </button>
              </div>
          </Teleport>
        </div>

      <div v-if="question.answer" class="mt-4 pt-4 border-t border-npo-blue-400/50">
        <div class="bg-npo-blue-100/10 rounded-lg p-4 backdrop-blur-sm">
          <p class="text-npo-white opacity-95 leading-relaxed whitespace-pre-wrap">{{ question.answer }}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  <AnswerModal v-model="isAnswerModalOpen" :question="question"/>
  <FAQModal v-model="isFAQModalOpen" :initial-data="{ question: question.question, answer: question.answer || '' }" title="Toevoegen aan FAQ"/>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, reactive, defineProps } from 'vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import FAQModal from '@/components/Modal/FAQModal.vue';
import AnswerModal from "@/components/Modal/AnswerModal.vue";
import UserQuestion from "@/store/modules/userQuestion";

defineProps<{ question: typeof UserQuestion }>();
const store = useStore<RootState>();

const isAdmin = computed(() => store.getters['auth/isAdmin']);

const isDropdownOpen = ref(false);
const isAnswerModalOpen = ref(false);
const isFAQModalOpen = ref(false);

const dropdownContainer = ref<HTMLElement | null>(null);
const dropdownButton = ref<HTMLElement | null>(null);
const dropdownMenu = ref<HTMLElement | null>(null);

const dropdownStyle = reactive({
  top: '0px',
  left: '0px',
});

const updateDropdownPosition = () => {
  if (!dropdownButton.value) return;
  const rect = dropdownButton.value.getBoundingClientRect();
  dropdownStyle.top = `${rect.bottom + window.scrollY + 8}px`;
  dropdownStyle.left = `${rect.right + window.scrollX - (dropdownMenu.value?.offsetWidth || 208)}px`;
};

const toggleDropdown = async () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  if (isDropdownOpen.value) {
    await nextTick();
    updateDropdownPosition();
  }
};

const openAnswerModal = () => {
  isAnswerModalOpen.value = true;
  isDropdownOpen.value = false;
};

const openFAQModal = () => {
  isFAQModalOpen.value = true;
  isDropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target as Node)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('resize', updateDropdownPosition);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('resize', updateDropdownPosition);
});
</script>