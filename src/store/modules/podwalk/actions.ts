import {ActionTree} from "vuex";
import {PodwalkState} from "@/store/modules/podwalk/state";
import {RootState} from "@/store";
import {Podwalk, PodwalkApiResponse} from "@/types/podwalk";
import {mockPodwalks} from "@/store/modules/podwalk/mockData";

interface PodwalksApiResponse {
    updated_at: string;
    routes: Podwalk[];
}

const USE_MOCK_DATA = true;

const actions: ActionTree<PodwalkState, RootState> = {
    async fetchPodwalks({ commit }) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);

        if (USE_MOCK_DATA) {
            // --- MOCK IMPLEMENTATIE ---
            console.log('✅ [MOCK] Fetching podwalks from local data.');
            return new Promise(resolve => {
                setTimeout(() => {
                    commit('SET_PODWALKS', mockPodwalks);
                    commit('SET_LOADING', false);
                    resolve(mockPodwalks);
                }, 500); // Simuleer een netwerkvertraging
            });
        }

        const appId =
            '';
        const apiUrl = ``;

        commit('SET_LOADING', true);
        commit('SET_ERROR', null);

        console.log('🚀 Fetching podwalks via specific proxy:', apiUrl);

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('❌ Response not OK:', {
                    status: response.status,
                    statusText: response.statusText,
                    body: errorText.substring(0, 500),
                });
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const apiResponse: PodwalksApiResponse = await response.json();
            console.log('✅ Successfully fetched API response:', apiResponse);

            // Extract the routes array from the API response
            const routes = apiResponse.routes || [];
            console.log('📊 Extracted routes:', routes);
            console.log('📊 Number of routes:', routes.length);

            // Log each route for debugging
            routes.forEach((route, index) => {
                console.log(`🚶‍♂️ Route ${index + 1}:`, {
                    id: route.id,
                    name: route.name,
                    place: route.place,
                    coordinates: { lat: route.lat, lng: route.lng },
                });
            });

            commit('SET_PODWALKS', routes);
        } catch (error) {
            console.error('💥 Fetch error details:', error);
            commit('SET_ERROR', (error as Error).message);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async createPodwalk({ commit }, podwalkData) {
        commit('SET_LOADING', true);

        if (USE_MOCK_DATA) {
            // --- MOCK IMPLEMENTATIE ---
            console.log('✅ [MOCK] Creating podwalk locally.');
            return new Promise(resolve => {
                setTimeout(() => {
                    const newPodwalk: Podwalk = {
                        ...podwalkData,
                        id: Date.now(), // Genereer een uniek ID voor de mock
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                    };
                    commit('ADD_PODWALK', newPodwalk);
                    commit('SET_LOADING', false);
                    resolve(newPodwalk);
                }, 300);
            });
        }

        const apiKey =
            '';
        const appId =
            '';

        commit('SET_LOADING', true);

        try {
            const response = await fetch(
                ``,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-API-KEY': apiKey,
                    },
                    body: JSON.stringify(podwalkData),
                }
            );

            if (!response.ok) throw new Error('Failed to create podwalk');
            const newPodwalk = await response.json();
            commit('ADD_PODWALK', newPodwalk);
            return newPodwalk;
        } catch (error) {
            commit('SET_ERROR', (error as Error).message);
            throw error;
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async fetchPodwalk({ commit }, id: number) {
        commit('SET_LOADING', true);
        commit('SET_ERROR', null);

        if (USE_MOCK_DATA) {
            // --- MOCK IMPLEMENTATIE ---
            console.log(`✅ [MOCK] Fetching podwalk with id: ${id} from local data.`);
            return new Promise(resolve => {
                setTimeout(() => {
                    const podwalk = mockPodwalks.find(p => p.id === id) || null;
                    if (podwalk) {
                        commit('SET_CURRENT_PODWALK', podwalk);
                    } else {
                        commit('SET_ERROR', `Mock podwalk with id ${id} not found.`);
                    }
                    commit('SET_LOADING', false);
                    resolve(podwalk);
                }, 300);
            });
        }

        const appId =
            '';

        try {
            const response = await fetch(
                ``,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch podwalk details: ${response.status}`
                );
            }

            const data: PodwalkApiResponse = await response.json();

            const podwalk: Podwalk = {
                ...data.route,
                details: data.details,
            };

            commit('SET_CURRENT_PODWALK', podwalk);
            console.log('✅ Fetched podwalk details:', podwalk);
        } catch (error) {
            console.error('Failed to fetch podwalk:', error);
            commit('SET_ERROR', (error as Error).message);
        }
    },
};

export default actions;