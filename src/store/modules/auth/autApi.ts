import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_API_URL || 'http://localhost:8081/api';

const authApi = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

authApi.interceptors.request.use((config) => {
    const authEndpoints = ['/auth/login', '/auth/register'];
    const isAuthEndpoint = authEndpoints.some((endpoint) =>
        config.url?.includes(endpoint)
    );

    if (!isAuthEndpoint) {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

authApi.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_email');
            localStorage.removeItem('user_username');
            localStorage.removeItem('user_role');
            console.log('🗑️ Cleared invalid token due to 401 response');
        }
        return Promise.reject(error);
    }
);

export default authApi;