import { createStore } from 'vuex';
import authModule from './modules/auth';
import podwalksModule from './modules/podwalk';
import userQuestionModule from './modules/userQuestion';
import faqModule from './modules/faq';
import weatherModule from "@/store/modules/weather";
import { PodwalkState } from './modules/podwalk/state';
import { WeatherState } from "@/types/weather";
import { AuthState } from './modules/auth/state';
import { UserQuestionState } from './modules/userQuestion/state';
import { FaqState } from './modules/faq/state';

export interface RootState {
  podwalks: PodwalkState;
  weather: WeatherState;
  auth: AuthState;
  userQuestion: UserQuestionState;
  faq: FaqState;
}

export default createStore<RootState>({
  modules: {
    podwalks: podwalksModule,
    auth: authModule,
    userQuestion: userQuestionModule,
    faq: faqModule,
    weather: weatherModule,
  },
});