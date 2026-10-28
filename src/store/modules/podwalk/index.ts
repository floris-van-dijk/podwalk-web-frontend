import state, {PodwalkState} from "@/store/modules/podwalk/state";
import {RootState} from "@/store";
import {Module} from "vuex";
import mutations from "@/store/modules/podwalk/mutations";
import actions from "@/store/modules/podwalk/actions";
import getters from "@/store/modules/podwalk/getters";

const podwalkModule: Module<PodwalkState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default podwalkModule;