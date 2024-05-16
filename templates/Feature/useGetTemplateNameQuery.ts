import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {Actions} from './actionTypes';

export const useGetTemplateNameQuery = () => {
    const dispatch = useDispatch();
    return useCallback(
        () =>
            dispatch({
                type: Actions.GET_TEMPLATE_NAME,
                payload: fetch('https://www.random.org', {
                    method: 'GET',
                }),
            }),
        [dispatch]
    );
};
