import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {renderHook} from '@testing-library/react';

import {useTemplateNameLoadingState, useTemplateName} from './selectors';

describe('features > counter > useTemplateName', () => {
    const mockStore = configureStore([]);

    const state = {
        templateName: {
            value: 42,
        },
    };

    const store = mockStore(state);

    it('returns count value', () => {
        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useTemplateName(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        expect(result.current).toBe(state.templateName.value);
    });
});

describe('features > counter > useTemplateNameLoadingState', () => {
    const mockStore = configureStore([]);

    const state = {
        templateName: {
            isLoading: true,
            hasError: true,
            isFulfilled: true,
            foo: 'bar',
        },
    };

    const store = mockStore(state);

    it('returns count value', () => {
        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useTemplateNameLoadingState(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        /* We expect hook to return certain values from the state, but not all state */
        expect(result.current).not.toBe(state.templateName);
        expect(state.templateName).toMatchObject(result.current);
    });
});
