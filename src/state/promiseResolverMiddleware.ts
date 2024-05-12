import type {Action, Middleware} from 'redux';

type PromiseDispatch = <T extends Action>(promise: Promise<T>) => Promise<T>;

// TODO: improve types
export const promiseResolverMiddleware: Middleware<PromiseDispatch> = store => next => (action: any) => {
    if (!(action.payload instanceof Promise)) {
        return next(action);
    }
    action.payload.then(
        (response: unknown) => {
            store.dispatch({
                type: `${action.type}_FULFILLED`,
                payload: response,
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
