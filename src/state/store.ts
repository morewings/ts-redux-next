import {configureStore, combineReducers} from '@reduxjs/toolkit';

import {CounterReducer} from '@/src/features/counter';
import {RandomReducer} from '@/src/features/random';

import {promiseResolverMiddleware} from './promiseResolverMiddleware';

const rootReducer = combineReducers({counter: CounterReducer, random: RandomReducer});
// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration to allow
// creating unique store instances, which is particularly important for
// server-side rendering (SSR) scenarios. In SSR, separate store instances
// are needed for each request to prevent cross-request state pollution.
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: {ignoredActionPaths: ['payload', 'payload.headers']},
            }).concat(promiseResolverMiddleware),
    });
};

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
