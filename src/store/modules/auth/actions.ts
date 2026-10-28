import { ActionTree } from 'vuex';
import { AuthState, AuthUser } from './state';
import { RootState } from '@/store';
import authApi from "@/store/modules/auth/autApi";
import {AuthResponse, LoginRequest, RegisterRequest} from "@/types/auth";

const actions: ActionTree<AuthState, RootState> = {
    async login({ commit }, { email, password }: LoginRequest) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            console.log('🔑 Attempting login with:', { email });
            const response = await authApi.post<AuthResponse>('/auth/login', { email, password });
            const { email: userEmail, username, role, token } = response.data;
            const user: AuthUser = { email: userEmail, username, role };
            commit('SET_AUTH_SUCCESS', { user, token });
            console.log('✅ Login successful:', { email: userEmail });
            return response.data;
        } catch (error: any) {
            console.error('❌ Login error:', error);
            let errorMessage = 'Login failed. Please try again.';
            if (error.response?.status === 403) errorMessage = 'Invalid email or password';
            else if (error.response?.status === 400) errorMessage = 'Invalid request data';
            else if (error.response?.data?.message) errorMessage = error.response.data.message;
            commit('SET_ERROR', errorMessage);
            throw new Error(errorMessage);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async register({ commit }, { username, email, password }: RegisterRequest) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            console.log('📝 Attempting registration with:', { username, email });
            const response = await authApi.post<AuthResponse>('/auth/register', { username, email, password });
            const { email: userEmail, username: resUsername, role, token } = response.data;
            const user: AuthUser = { email: userEmail, username: resUsername, role };
            commit('SET_AUTH_SUCCESS', { user, token });
            console.log('✅ Registration successful:', { email: userEmail });
            return response.data;
        } catch (error: any) {
            console.error('❌ Registration error:', error);
            let errorMessage = 'Registration failed. Please try again.';
            if (error.response?.status === 400) {
                const message = error.response.data?.message || 'Invalid registration data';
                if (message.includes('email')) errorMessage = 'Invalid email format';
                else if (message.includes('password')) errorMessage = 'Password does not meet requirements';
                else errorMessage = message;
            } else if (error.response?.status === 409) {
                errorMessage = 'Email already exists';
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            commit('SET_ERROR', errorMessage);
            throw new Error(errorMessage);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    logout({ commit }) {
        commit('LOGOUT');
        console.log('👋 User logged out');
    },

    restoreAuth({ commit }) {
        commit('RESTORE_AUTH');
    },
};

export default actions;