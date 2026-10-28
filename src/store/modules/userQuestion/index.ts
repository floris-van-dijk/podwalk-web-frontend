import {Module} from "vuex";
import state, {UserQuestionState} from "./state";
import {RootState} from "@/store";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const userQuestionModule: Module<UserQuestionState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default userQuestionModule;
