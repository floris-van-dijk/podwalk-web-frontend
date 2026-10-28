import { ActionTree } from 'vuex';
import { FaqState } from './state';
import { RootState } from '@/store';
import { FAQ } from '@/types/faq';
import authApi from "@/store/modules/auth/autApi";

const actions: ActionTree<FaqState, RootState> = {
    async createFaq({ dispatch }, faqData: { question: string; answer: string }) {
        try {
            await authApi.post('/faq', faqData);
            await dispatch('fetchFaqs');
        } catch (error) {
            console.error('Failed to create FAQ', error);
            throw error;
        }
    },

    async fetchFaqs({ commit }) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            const response = await authApi.get<FAQ[]>('/faq');
            commit('SET_FAQS', response.data);
        } catch (err) {
            const message = "Er is een fout opgetreden bij het laden van de FAQ's";
            commit('SET_ERROR', message);
            console.error('Error fetching FAQs:', err);
        } finally {
            commit('SET_LOADING', false);
        }
    },
};

export default actions;