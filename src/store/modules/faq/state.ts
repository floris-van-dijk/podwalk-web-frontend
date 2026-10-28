import { FAQ } from '@/types/faq';

export interface FaqState {
    faqs: FAQ[];
    loading: boolean;
    error: string | null;
}

const state: FaqState = {
    faqs: [],
    loading: false,
    error: null,
};

export default state;