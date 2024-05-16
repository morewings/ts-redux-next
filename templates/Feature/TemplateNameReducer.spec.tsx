import {Actions} from './actionTypes';
import {TemplateNameReducer} from './TemplateNameReducer';

describe('features > random > TemplateNameReducer', () => {
    it('returns initial state, if non matched action is dispatched', () => {
        const initialState = {
            isLoading: false,
            hasError: false,
            isFulfilled: false,
        };

        const action = {
            type: Actions.GET_TEMPLATE_NAME,
            payload: 0,
        };

        expect(TemplateNameReducer(initialState, action)).toBe(initialState);
    });

    /**
     * Provide table of values to run test case against
     * @see https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
     */
    it.each([
        [Actions.GET_TEMPLATE_NAME_FULFILLED],
        [Actions.GET_TEMPLATE_NAME_PENDING],
        [Actions.GET_TEMPLATE_NAME_REJECTED],
    ])(`updates state according to dispatched action`, actionType => {
        const initialState = {
            value: 0,
        };

        const payload = actionType === Actions.GET_TEMPLATE_NAME_FULFILLED ? 1 : undefined;

        const action = {
            type: actionType as keyof typeof Actions,
            payload,
        };

        expect(TemplateNameReducer(initialState, action)).toMatchSnapshot();
    });
});
