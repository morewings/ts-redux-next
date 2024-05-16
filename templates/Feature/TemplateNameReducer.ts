import {Actions} from './actionTypes';

export type State = {
    value?: number;
    isLoading?: boolean;
    hasError?: boolean;
    isFulfilled?: boolean;
};

const initialState = {
    templateName: undefined,
    isLoading: false,
    hasError: false,
    isFulfilled: false,
} as State;

export type Action = {
    type: keyof typeof Actions;
    payload?: number;
};

export const TemplateNameReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case Actions.GET_TEMPLATE_NAME_PENDING:
            return {
                ...state,
                isFulfilled: false,
                isLoading: true,
                hasError: false,
                value: undefined,
            };

        case Actions.GET_TEMPLATE_NAME_FULFILLED:
            return {
                isFulfilled: true,
                isLoading: false,
                hasError: false,
                value: action?.payload,
            };

        case Actions.GET_TEMPLATE_NAME_REJECTED:
            return {
                isFulfilled: false,
                isLoading: false,
                hasError: true,
                value: undefined,
            };

        default:
            return state;
    }
};
