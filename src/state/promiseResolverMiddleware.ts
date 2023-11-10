import type { Action, Middleware } from 'redux';

type ActionAsync = Action<string> & { payload?: Promise<unknown> };

type PromiseDispatch = <T extends Action>(promise: Promise<T>) => Promise<T>;

export const promiseResolverMiddleware: Middleware<PromiseDispatch> = store => next => (action: ActionAsync) => {
    if (!(action.payload instanceof Promise)) {
        return next(action);
    }
    action.payload.then(
        response => {
            store.dispatch({
                type: `${action.type}_FULFILLED`,
                payload: response
            });
        },
        () => {
            store.dispatch({
                type: `${action.type}_REJECTED`
            });
        }
    );
    return next({ type: `${action.type}_PENDING` });
};
