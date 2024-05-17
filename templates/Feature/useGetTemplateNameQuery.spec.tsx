import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {waitFor, renderHook} from '@testing-library/react';

import {promiseResolverMiddleware} from '@/src/state/promiseResolverMiddleware';

import {Actions} from './actionTypes';
import {useGetTemplateNameQuery} from './useGetTemplateNameQuery';

const fetchBackup = global.fetch;

const fetchMock = jest.fn();

/** Create mock store with middlewares */
// @ts-expect-error TS2322
const mockStore = configureStore([promiseResolverMiddleware]);

const store = mockStore({
    random: {
        isLoading: false,
        hasError: false,
        isFulfilled: false,
    },
});

describe('features > counter > useGetTemplateNameQuery', () => {
    beforeAll(() => {
        global.fetch = fetchMock;
    });

    beforeEach(() => {
        fetchMock.mockClear();
    });

    afterAll(() => {
        global.fetch = fetchBackup;
    });

    it('returns function', () => {
        /**
         * Render hook, using testing-library utility
         * @see https://react-hooks-testing-library.com/reference/api#renderhook
         */
        const {result} = renderHook(() => useGetTemplateNameQuery(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        expect(result.current).toBeInstanceOf(Function);
    });

    describe('gets number', () => {
        afterEach(() => {
            store.clearActions();
        });

        /** Note that tests functions are async */
        it(`handles successful API query`, async () => {
            const {result} = renderHook(() => useGetTemplateNameQuery(), {
                wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
            });

            /** Mock response from API */
            const response = 6;

            /**
             * Mock fetch successful response
             * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
             */
            fetchMock.mockImplementationOnce(() =>
                Promise.resolve({
                    json: () => Promise.resolve(response),
                })
            );

            /**
             * Wait until async action finishes
             */
            await result.current();

            /** First dispatched action should have _PENDING suffix */
            expect(store.getActions()[0]).toEqual({
                type: Actions.GET_TEMPLATE_NAME_PENDING,
            });

            await waitFor(() => {
                /** Second dispatched action should have _FULFILLED suffix */
                expect(store.getActions()[1].type).toEqual(
                    Actions.GET_TEMPLATE_NAME_FULFILLED
                );
                /** Second dispatched action should deliver response from API */
                expect(store.getActions()[1].payload).toEqual(response);
            });
        });

        it(`handles rejected API query`, async () => {
            const {result} = renderHook(() => useGetTemplateNameQuery(), {
                wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
            });

            /**
             * Mock fetch rejected response
             * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
             */
            fetchMock.mockImplementationOnce(() =>
                Promise.reject({
                    json: () => Promise.reject(new Error('')),
                })
            );

            /**
             * Wait until async action finishes
             */
            await result.current();

            /** First dispatched action should have _PENDING suffix */
            expect(store.getActions()[0]).toEqual({
                type: Actions.GET_TEMPLATE_NAME_PENDING,
            });

            await waitFor(() => {
                /** Second dispatched action should have _REJECTED suffix */
                expect(store.getActions()[1].type).toEqual(
                    Actions.GET_TEMPLATE_NAME_REJECTED
                );
            });
        });
    });
});
