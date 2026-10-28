import { GetterTree } from 'vuex';
import { AuthState } from './state';
import { RootState } from '@/store';

const getters: GetterTree<AuthState, RootState> = {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    token: (state) => state.token,
    isAdmin: (state) => state.user?.role === 'ADMIN',
};

export default getters;