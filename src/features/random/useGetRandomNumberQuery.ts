import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import {Actions} from './actionTypes';

const useGetRandomNumberQuery = () => {
    const dispatch = useDispatch();
    return useCallback(
        () =>
            dispatch({
                type: Actions.GET_RANDOM_NUMBER,
                payload: axios.get(
                    'https://www.random.org/integers/?num=1&min=1&max=99&col=1&base=10&format=plain&rnd=new'
                ),
            }),
        [dispatch]
    );
};

export default useGetRandomNumberQuery;
