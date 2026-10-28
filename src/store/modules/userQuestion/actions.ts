import {ActionTree} from "vuex";
import {UserQuestionState, UserQuestion} from "@/store/modules/userQuestion/state";
import {RootState} from "@/store";
import authApi from "@/store/modules/auth/autApi";

const actions: ActionTree<UserQuestionState, RootState> = {
    async fetchAllUserQuestions({ commit }) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            const response = await authApi.get<UserQuestion[]>('/faq/user/all');
            commit('SET_USER_QUESTIONS', response.data);
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to fetch questions';
            commit('SET_ERROR', errorMessage);
            console.error('Error fetching user questions:', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async fetchUserQuestions({ commit }) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            const response = await authApi.get<UserQuestion[]>('/faq/user');
            commit('SET_USER_QUESTIONS', response.data);
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to fetch questions';
            commit('SET_ERROR', errorMessage);
            console.error('Error fetching user questions:', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async createUserQuestion({ commit }, questionText: string) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            const payload = { question: questionText };
            const response = await authApi.post<UserQuestion>('/faq/user', payload);
            commit('ADD_USER_QUESTION', response.data);
            return response.data;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to create question';
            commit('SET_ERROR', errorMessage);
            console.error('Error creating user question:', error);
            throw new Error(errorMessage);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async updateUserQuestion({ commit }, questionToUpdate: UserQuestion) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);

        const payloadForApi = {
            uuid: questionToUpdate.uuid,
            question: questionToUpdate.question,
            answer: questionToUpdate.answer,
            viewed: questionToUpdate.viewed,
        };

        try {
            const response = await authApi.put<UserQuestion>(
                `/faq/user/${questionToUpdate.uuid}`,
                payloadForApi
            );

            commit("UPDATE_USER_QUESTION", response.data);
            return response.data;

        } catch (error: any) {
            const errorMessage = error.response?.data?.message || error.message || 'Failed to update user question';
            commit('SET_ERROR', errorMessage);
            console.error('Error updating user question:', error);
            throw error;
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async deleteUserQuestion({ commit }, uuid: string) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);
        try {
            await authApi.delete(`/faq/user/${uuid}`);
            commit('DELETE_USER_QUESTION', uuid);
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || 'Failed to delete question';
            commit('SET_ERROR', errorMessage);
            console.error('Error deleting user question:', error);
        } finally {
            commit('SET_LOADING', false);
        }
    },
};

export default actions;