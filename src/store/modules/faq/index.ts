import { Module } from 'vuex';
import { RootState } from '@/store';
import state, { FaqState } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const faqModule: Module<FaqState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default faqModule;