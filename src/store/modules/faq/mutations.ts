import { MutationTree } from 'vuex';
import { FaqState } from './state';
import { FAQ } from '@/types/faq';

const mutations: MutationTree<FaqState> = {
    SET_LOADING(state, loading: boolean) {
        state.loading = loading;
    },
    SET_ERROR(state, error: string | null) {
        state.error = error;
    },
    SET_FAQS(state, faqs: FAQ[]) {
        state.faqs = faqs;
    },
};

export default mutations;