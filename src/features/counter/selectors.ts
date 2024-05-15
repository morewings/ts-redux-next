'use client';

import {useSelector} from 'react-redux';

import type {State} from './CounterReducer';

/**
 * Custom React Hook to get count value from state.
 * @see https://reactjs.org/docs/hooks-custom.html
 */
const useCountValue = () => {
    return useSelector<{counter: State}, number>(state => state.counter.value);
};

export default useCountValue;
