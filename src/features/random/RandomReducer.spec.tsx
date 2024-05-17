import {Actions} from './actionTypes';
import RandomReducer from './RandomReducer';

describe('features > random > RandomReducer', () => {
    it('returns initial state, if non matched action is dispatched', () => {
        const initialState = {
            isLoading: false,
            hasError: false,
            isFulfilled: false,
        };

        const action = {
            type: Actions.GET_RANDOM_NUMBER,
            payload: 0,
        };

        expect(RandomReducer(initialState, action)).toBe(initialState);
    });

    /**
     * Provide table of values to run test case against
     * @see https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
     */
    it.each([
        [Actions.GET_RANDOM_NUMBER_FULFILLED],
        [Actions.GET_RANDOM_NUMBER_PENDING],
        [Actions.GET_RANDOM_NUMBER_REJECTED],
    ])(`updates state according to dispatched action`, actionType => {
        const initialState = {
            number: 0,
        };

        const payload =
            actionType === `${Actions.GET_RANDOM_NUMBER}_FULFILLED` ? 1 : undefined;

        const action = {
            type: actionType as keyof typeof Actions,
            payload,
        };

        expect(RandomReducer(initialState, action)).toMatchSnapshot();
    });
});
