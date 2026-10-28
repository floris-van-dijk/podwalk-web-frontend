import { GetterTree } from 'vuex';
import { PodwalkState } from '@/store/modules/podwalk/state';
import { RootState } from '@/store';

const getters: GetterTree<PodwalkState, RootState> = {
    // Geeft de volledige lijst van podwalks terug
    allPodwalks: state => state.podwalks,

    // Geeft de geselecteerde (huidige) podwalk terug
    currentPodwalk: state => state.currentPodwalk,

    // Bestaande getters
    isLoading: state => state.loading,
    hasError: state => state.error !== null,
    getErrorMessage: state => state.error,
    podwalkCount: state => state.podwalks.length,

    // Een handige getter om een podwalk op ID te vinden
    getPodwalkById: state => (id: number) => {
        return state.podwalks.find(podwalk => podwalk.id === id);
    },
};

export default getters;