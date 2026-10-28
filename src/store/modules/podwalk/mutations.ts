import {MutationTree} from "vuex";
import {PodwalkState} from "@/store/modules/podwalk/state";
import {Podwalk} from "@/types/podwalk";

const mutations: MutationTree<PodwalkState> = {
    SET_LOADING(state, loading: boolean) {
        state.loading = loading;
    },
    SET_PODWALKS(state, podwalks: Podwalk[]) {
        state.podwalks = podwalks;
    },
    SET_ERROR(state, error: string | null) {
        state.error = error;
    },
    ADD_PODWALK(state, podwalk: Podwalk) {
        state.podwalks.push(podwalk);
    },
    SET_CURRENT_PODWALK(state, podwalk: Podwalk) {
        state.currentPodwalk = podwalk;
    },
}

export default mutations;