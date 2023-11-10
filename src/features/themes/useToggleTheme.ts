import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { TOGGLE_THEME } from './actionTypes';

export const useToggleTheme = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch({
            type: TOGGLE_THEME
        });
    }, [dispatch]);
};
