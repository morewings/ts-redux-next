import type { Action } from './actionTypes';
import { TOGGLE_THEME } from './actionTypes';

export enum Themes {
    day = 'day',
    night = 'night'
}

export type State = {
    active: keyof typeof Themes;
};

const initialState = {
    active: Themes.day
} as State;

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case TOGGLE_THEME: {
            return {
                ...state,
                active: state.active === Themes.day ? Themes.night : Themes.day
            };
        }
        default:
            return state;
    }
};
