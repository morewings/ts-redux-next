import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import useCountValue from './selectors';
import {Actions} from './actionTypes';

const useIncrementCounter = () => {
    const dispatch = useDispatch();
    const count = useCountValue();
    return useCallback(() => {
        dispatch({
            type: Actions.INCREMENT_COUNTER,
            value: count + 1,
        });
    }, [count, dispatch]);
};

export default useIncrementCounter;
