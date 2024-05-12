import {Actions} from './actionTypes';

export type State = {
    value: number;
};

export const initialState = {
    value: 0,
} as State;

export type Action = {
    type: keyof typeof Actions;
    value: number;
};

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case Actions.INCREMENT_COUNTER: {
            return {...state, value: action.value};
        }

        default:
            return state;
    }
};

export default reducer;
