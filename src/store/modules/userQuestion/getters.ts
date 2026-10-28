import {GetterTree} from "vuex";
import {UserQuestion, UserQuestionState} from "./state";
import {RootState} from "@/store";

const getters: GetterTree<UserQuestionState, RootState> = {
    allUserQuestions: (state): UserQuestion[] => state.userQuestions,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
    getQuestionById: (state) => (uuid: string): UserQuestion | undefined =>
        state.userQuestions.find(q => q.uuid === uuid),
};

export default getters;