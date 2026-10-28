import { MutationTree } from 'vuex';
import { AuthState, AuthUser } from './state';

const mutations: MutationTree<AuthState> = {
    SET_LOADING(state, loading: boolean) {
        state.loading = loading;
    },
    SET_ERROR(state, error: string | null) {
        state.error = error;
    },
    SET_AUTH_SUCCESS(state, { user, token }: { user: AuthUser; token: string }) {
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
        state.error = null;

        localStorage.setItem('auth_token', token);
        localStorage.setItem('user_email', user.email);
        if (user.username) {
            localStorage.setItem('user_username', user.username);
        }
        if (user.role) {
            localStorage.setItem('user_role', user.role);
        }
    },
    LOGOUT(state) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;

        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_username');
        localStorage.removeItem('user_role');
    },
    RESTORE_AUTH(state) {
        const token = localStorage.getItem('auth_token');
        const email = localStorage.getItem('user_email');
        const username = localStorage.getItem('user_username');
        const role = localStorage.getItem('user_role');

        if (token && email && role) {
            state.token = token;
            state.user = { email, username: username ?? '', role };
            state.isAuthenticated = true;
        }
    },
};

export default mutations;