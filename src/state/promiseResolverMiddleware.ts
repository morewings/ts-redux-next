import type {Middleware, UnknownAction} from 'redux';

// TODO: improve types
export const promiseResolverMiddleware: Middleware =
    // @ts-expect-error TS2322
    store => next => (action: UnknownAction) => {
        if (!(action.payload instanceof Promise)) {
            return next(action);
        }
        action.payload.then(
            response => {
                return response.json().then((response: number) => {
                    store.dispatch({
                        type: `${action.type}_FULFILLED`,
                        payload: response,
                    });
                });
            },
            () => {
                store.dispatch({
                    type: `${action.type}_REJECTED`,
                });
            }
        );
        return next({type: `${action.type}_PENDING`});
    };
