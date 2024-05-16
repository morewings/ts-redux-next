import React from 'react';
import {Provider} from 'react-redux';
import type {Store, Action} from 'redux';
import {render, fireEvent, waitFor, screen, waitForElementToBeRemoved} from '@testing-library/react';
import configureStore from 'redux-mock-store';

import {GET_RANDOM_NUMBER} from '@/src/features/random/actionTypes';
import {makeStore} from '@/src/state/store';
import {promiseResolverMiddleware} from '@/src/state/promiseResolverMiddleware';

import {TemplateName} from './TemplateName';

/**
 * Create mock store
 * @see https://github.com/dmitry-zaets/redux-mock-store
 */
// @ts-expect-error TS2322
const mockStore = configureStore([promiseResolverMiddleware]);

/* We use these strings to match HTMLElements */
const pristineText = 'Click the button to get random number';
const loadingText = 'Getting number';
const errorText = 'Ups...';
const response = 6;

let realStore: Store<unknown, Action, unknown>;

const fetchBackup = global.fetch;

const fetchMock = jest.fn();

describe('components > TemplateName', () => {
    beforeAll(() => {
        global.fetch = fetchMock;
    });

    beforeEach(() => {
        realStore = makeStore();
        fetchMock.mockClear();
    });

    afterAll(() => {
        global.fetch = fetchBackup;
    });
    /**
     * Provide table of values to run tests with
     * @see https://jestjs.io/docs/en/api#describeeachtablename-fn-timeout
     */
    describe.each`
        isLoading | hasError | isFulfilled
        ${false}  | ${false} | ${false}
        ${true}   | ${false} | ${false}
        ${false}  | ${true}  | ${false}
        ${false}  | ${false} | ${true}
    `('renders different store states', ({isLoading, hasError, isFulfilled}) => {
        it(`when isLoading === ${isLoading} && hasError === ${hasError} && isFulfilled === ${isFulfilled}`, () => {
            const store = mockStore({
                random: {
                    isLoading,
                    hasError,
                    isFulfilled,
                    number: isFulfilled ? 1 : undefined,
                },
            });

            /**
             * `asFragment`:
             * @see https://testing-library.com/docs/react-testing-library/api#asfragment
             * `wrapper`:
             * @see https://testing-library.com/docs/react-testing-library/api#wrapper
             */
            const {asFragment} = render(<TemplateName />, {
                wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
            });

            /**
             * Basic snapshot test to check, if rendered component
             * matches expected footprint.
             */
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('handles successful request', async () => {
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
         * `getByRole`:
         * @see https://testing-library.com/docs/dom-testing-library/api-queries#byrole
         */
        const {asFragment, getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => (
                /* We use real store here, to get action through */
                <Provider store={realStore}>{children}</Provider>
            ),
        });

        /**
         * Search for the button and make testing library click on it
         * @see https://testing-library.com/docs/react-testing-library/cheatsheet#events
         */
        fireEvent.click(getByRole('button'));

        /** Check that initial message has changed to loading. */
        expect(asFragment()).toMatchSnapshot();
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).toBeInTheDocument();

        /** Check that loading message has changed to success. */
        await waitForElementToBeRemoved(() => screen.queryByText(loadingText));
        expect(asFragment()).toMatchSnapshot();
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).not.toBeInTheDocument();
        expect(screen.queryByText(response)).toBeInTheDocument();
    });

    it('handles rejected request', async () => {
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
         * `getByRole`:
         * @see https://testing-library.com/docs/dom-testing-library/api-queries#byrole
         */
        const {asFragment, getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => (
                /* We use real store here, to get action through */
                <Provider store={realStore}>{children}</Provider>
            ),
        });

        /**
         * Search for the button and make testing library click on it
         * @see https://testing-library.com/docs/react-testing-library/cheatsheet#events
         */
        fireEvent.click(getByRole('button'));

        /** Check that initial message has changed to loading. */
        expect(asFragment()).toMatchSnapshot();
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).toBeInTheDocument();

        /** Check that loading message has changed to error. */
        await waitForElementToBeRemoved(() => screen.queryByText(loadingText));
        expect(asFragment()).toMatchSnapshot();
        expect(screen.queryByText(pristineText)).not.toBeInTheDocument();
        expect(screen.queryByText(loadingText)).not.toBeInTheDocument();
        expect(screen.queryByText(errorText)).toBeInTheDocument();
    });

    it('dispatches an action sequence on successful request made', async () => {
        const store = mockStore({
            random: {
                isLoading: false,
                hasError: false,
                isFulfilled: false,
            },
        });

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
         * `getByRole`:
         * @see https://testing-library.com/docs/dom-testing-library/api-queries#byrole
         */
        const {getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        /**
         * Search for the button and make testing library click on it
         * @see https://testing-library.com/docs/react-testing-library/cheatsheet#events
         */
        fireEvent.click(getByRole('button'));

        /** First dispatched action should have _PENDING suffix */
        expect(store.getActions()[0]).toEqual({
            type: `${GET_RANDOM_NUMBER}_PENDING`,
        });

        await waitFor(() => {
            /** Second dispatched action should have _FULFILLED suffix */
            expect(store.getActions()[1].type).toEqual(`${GET_RANDOM_NUMBER}_FULFILLED`);
        });

        /** Second dispatched action should deliver response from API */
        expect(store.getActions()[1].payload).toEqual(response);
    });

    it('dispatches an action sequence on rejected request made', async () => {
        const store = mockStore({
            random: {
                isLoading: false,
                hasError: false,
                isFulfilled: false,
            },
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
         * `getByRole`:
         * @see https://testing-library.com/docs/dom-testing-library/api-queries#byrole
         */
        const {getByRole} = render(<TemplateName />, {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
        });

        /**
         * Search for the button and make testing library click on it
         * @see https://testing-library.com/docs/react-testing-library/cheatsheet#events
         */
        fireEvent.click(getByRole('button'));

        /** First dispatched action should have _PENDING suffix */
        expect(store.getActions()[0]).toEqual({
            type: `${GET_RANDOM_NUMBER}_PENDING`,
        });

        await waitFor(() => {
            /** Second dispatched action should have _REJECTED suffix */
            expect(store.getActions()[1].type).toEqual(`${GET_RANDOM_NUMBER}_REJECTED`);
        });
    });
});
