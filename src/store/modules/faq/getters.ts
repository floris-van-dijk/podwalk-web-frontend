import { GetterTree } from 'vuex';
import { FaqState } from './state';
import { RootState } from '@/store';
import { FAQ } from '@/types/faq';

const getters: GetterTree<FaqState, RootState> = {
    allFaqs: (state): FAQ[] => state.faqs,
    isLoading: (state): boolean => state.loading,
    hasError: (state): boolean => state.error !== null,
    errorMessage: (state): string | null => state.error,
};

export default getters;