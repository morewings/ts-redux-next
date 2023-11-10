import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { GET_INFO } from './actionTypes';

export const useGetInfoQuery = () => {
    const dispatch = useDispatch();
    return useCallback(
        (id?: string) =>
            dispatch({
                type: GET_INFO,
                payload: axios.get(`http://localhost:3001/users/${id}`)
            }),
        [dispatch]
    );
};
