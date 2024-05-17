import {useSelector} from 'react-redux';

import type {State} from './RandomReducer';

/**
 * Custom React Hooks to get random.org API loading state and response from the state.
 *
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useLoadingState = () => {
    const {isLoading, hasError, isFulfilled} = useSelector<{random: State}, State>(
        state => state.random
    );
    return {isLoading, hasError, isFulfilled};
};

export const useRandomNumber = () =>
    useSelector<{random: State}, number | undefined>(state => state.random.number);
