'use client';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import type { FC, ReactNode } from 'react';

import { promiseResolverMiddleware } from './promiseResolverMiddleware';
import { CounterReducer } from './../features/counter';
import { RandomReducer } from './../features/random';

const rootReducer = combineReducers({
    counter: CounterReducer,
    random: RandomReducer
});

/**
 * Use Redux Dev Tools, if they are installed in browser, otherwise compose of Redux
 */

/* eslint-disable ssr-friendly/no-dom-globals-in-module-scope */
const composeEnhancers =
    // @ts-expect-error no dev tools
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? // @ts-expect-error no dev tools
          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;
/* eslint-enable ssr-friendly/no-dom-globals-in-module-scope */

const middlewareEnhancer = applyMiddleware(promiseResolverMiddleware);

const composedEnhancers = composeEnhancers(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

export const ReduxProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
