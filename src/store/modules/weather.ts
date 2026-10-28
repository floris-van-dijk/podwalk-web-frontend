import { Module } from 'vuex';
import { RootState } from '@/store';
import { WeatherState, WeatherForecast } from '@/types/weather';

const weatherModule: Module<WeatherState, RootState> = {
  namespaced: true,

  state: () => ({
    forecast: [],
    loading: false,
    error: null,
  }),

  mutations: {
    SET_FORECAST(state, forecast: WeatherForecast[]) {
      state.forecast = forecast;
    },
    SET_LOADING(state, loading: boolean) {
      state.loading = loading;
    },
    SET_ERROR(state, error: string | null) {
      state.error = error;
    },
  },

  actions: {
    async fetchWeatherForecast({ commit }, { lat, lng, days = 7 }) {
      const apiKey = process.env.VUE_APP_WEATHER_API_KEY;

      if (!apiKey) {
        commit('SET_ERROR', 'Weather API key is not configured');
        return;
      }

      commit('SET_LOADING', true);
      commit('SET_ERROR', null);

      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lng}&days=${days}&aqi=no`,
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Weather API error: ${response.statusText}`);
        }

        const data = await response.json();
        commit('SET_FORECAST', data.forecast.forecastday);
      } catch (error) {
        console.error('Weather API error:', error);
        commit('SET_ERROR', (error as Error).message);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },

  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
    getForecast: (state) => state.forecast,
  },
};

export default weatherModule;
