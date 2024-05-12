import {Actions} from './actionTypes';

export type State = {
    number?: number;
    isLoading?: boolean;
    hasError?: boolean;
    isFulfilled?: boolean;
};

const initialState = {
    number: undefined,
    isLoading: false,
    hasError: false,
    isFulfilled: false,
} as State;

export type Action = {
    type: keyof typeof Actions;
    payload?: {data?: number};
};

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case `${Actions.GET_RANDOM_NUMBER}_PENDING`:
            return {
                ...state,
                isFulfilled: false,
                isLoading: true,
                hasError: false,
                number: undefined,
            };

        case `${Actions.GET_RANDOM_NUMBER}_FULFILLED`:
            return {
                isFulfilled: true,
                isLoading: false,
                hasError: false,
                number: action?.payload?.data,
            };

        case `${Actions.GET_RANDOM_NUMBER}_REJECTED`:
            return {
                isFulfilled: false,
                isLoading: false,
                hasError: true,
                number: undefined,
            };

        default:
            return state;
    }
};

export default reducer;
