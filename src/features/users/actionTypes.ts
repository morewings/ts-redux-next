import type { AxiosResponse } from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_INFO = 'GET_INFO';

export type Action = {
    type: string;
    payload: AxiosResponse;
};
