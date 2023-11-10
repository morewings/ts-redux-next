import type { Action } from './actionTypes';
import { GET_USERS, GET_INFO } from './actionTypes';

export type UserInfo = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    birthdate: string;
    address: {
        country: string;
        city: string;
        street: string;
    };
};

export type State = {
    list?: UserInfo[];
    isLoading: boolean;
    hasError: boolean;
    isFulfilled: boolean;
    selectedUser?: UserInfo;
};

const initialState = {
    list: undefined,
    selectedUser: undefined,
    isLoading: false,
    hasError: false,
    isFulfilled: false
} as State;

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case `${GET_USERS}_PENDING`:
            return {
                ...state,
                list: undefined
            };

        case `${GET_USERS}_FULFILLED`:
            return {
                list: action.payload.data
            };

        case `${GET_USERS}_REJECTED`:
            return {
                list: undefined
            };
        case `${GET_INFO}_PENDING`:
            return {
                ...state,
                selectedUser: undefined
            };

        case `${GET_INFO}_FULFILLED`:
            return {
                selectedUser: action.payload.data
            };

        case `${GET_INFO}_REJECTED`:
            return {
                selectedUser: undefined
            };

        default:
            return state;
    }
};
