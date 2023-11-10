import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { GET_USERS } from './actionTypes';

export const useGetListQuery = () => {
    const dispatch = useDispatch();
    return useCallback(
        () =>
            dispatch({
                type: GET_USERS,
                payload: axios.get('http://localhost:3001/users')
            }),
        [dispatch]
    );
};
