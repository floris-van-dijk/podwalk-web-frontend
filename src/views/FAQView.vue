<template>
  <div class="min-h-screen bg-npo-blue-900 p-6 pt-24">
    <div class="max-w-6xl mx-auto">
      <FAQHeader />

      <div v-if="isLoadingFaqs" class="text-center text-npo-white">Laden...</div>
      <div v-else-if="errorFaqs" class="text-center text-red-400">{{ errorFaqs }}</div>
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <FAQItem
            v-for="faq in faqs"
            :key="faq.uuid"
            :question="faq.question"
            :answer="faq.answer"
        />
      </div>

      <ContactSection/>

      <UserQuestionsSection @open-create-faq-modal="isCreateModalOpen = true"/>
    </div>

    <FAQModal
        v-model="isCreateModalOpen"
        title="Nieuwe FAQ aanmaken"
        @success="showSuccessMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'
import FAQHeader from '@/components/FAQ/FAQHeader.vue'
import FAQItem from '@/components/FAQ/FAQItem.vue'
import ContactSection from "@/components/FAQ/ContactSection.vue"
import UserQuestionsSection from "@/components/FAQ/UserQuestionsSection.vue"
import FAQModal from "@/components/Modal/FAQModal.vue"

const store = useStore<RootState>();

const isCreateModalOpen = ref(false);

const faqs = computed(() => store.getters['faq/allFaqs']);
const isLoadingFaqs = computed(() => store.getters['faq/isLoading']);
const errorFaqs = computed(() => store.getters['faq/errorMessage']);

const showSuccessMessage = () => {
  console.log("Nieuwe FAQ succesvol aangemaakt!");
};

onMounted(() => {
  store.dispatch('faq/fetchFaqs');
});
</script>