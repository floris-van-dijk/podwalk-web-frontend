import { Module } from 'vuex';
import { RootState } from '@/store';
import state, { AuthState } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const authModule: Module<AuthState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default authModule;