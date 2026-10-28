import {MutationTree} from "vuex";
import {UserQuestion, UserQuestionState} from "@/store/modules/userQuestion/state";

const mutations: MutationTree<UserQuestionState> = {
    SET_LOADING(state, loading: boolean) {
        state.loading = loading;
    },
    SET_ERROR(state, error: string | null) {
        state.error = error;
    },
    CLEAR_ERROR(state) {
        state.error = null;
    },
    SET_USER_QUESTIONS(state, questions: UserQuestion[]) {
        state.userQuestions = questions;
    },
    ADD_USER_QUESTION(state, question: UserQuestion) {
        state.userQuestions.push(question);
    },
    UPDATE_USER_QUESTION(state, updatedQuestion: UserQuestion) {
        const index = state.userQuestions.findIndex(q => q.uuid === updatedQuestion.uuid);
        if (index !== -1) {
            state.userQuestions.splice(index, 1, updatedQuestion);
        }
    },
    DELETE_USER_QUESTION(state, uuid: string) {
        state.userQuestions = state.userQuestions.filter(q => q.uuid !== uuid);
    },
}

export default mutations;