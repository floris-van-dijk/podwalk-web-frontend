import {AuthUser} from "@/store/modules/auth/state";

export interface UserQuestion {
    uuid: string;
    question: string;
    answer: string | null;
    viewed: boolean;
    submittedAt: Date;
    user: AuthUser;
}

export interface UserQuestionState {
    userQuestions: UserQuestion[];
    loading: boolean;
    error: string | null;
}

const state: UserQuestionState = {
    userQuestions: [],
    loading: false,
    error: null,
};

export default state;