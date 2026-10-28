import {Podwalk} from "@/types/podwalk";

export interface PodwalkState {
    podwalks: Podwalk[];
    loading: boolean;
    error: string | null;
    currentPodwalk: Podwalk | null;
}

const state: PodwalkState = {
    podwalks: [],
    loading: false,
    error: null,
    currentPodwalk: null,
}

export default state;