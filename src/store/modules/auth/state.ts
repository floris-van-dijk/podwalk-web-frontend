export interface AuthUser {
    email: string;
    username: string;
    role: string;
}

export interface AuthState {
    user: AuthUser | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const state: AuthState = {
    user: null,
    token: localStorage.getItem('auth_token'),
    loading: false,
    error: null,
    isAuthenticated: !!localStorage.getItem('auth_token'),
};

export default state;