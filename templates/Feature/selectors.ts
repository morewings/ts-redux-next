import {useSelector} from 'react-redux';

import type {State} from './TemplateNameReducer';

/**
 * Custom React Hooks to get random.org API loading state and response from the state.
 *
 * @see https://reactjs.org/docs/hooks-custom.html
 */
export const useTemplateNameLoadingState = () => {
    const {isLoading, hasError, isFulfilled} = useSelector<{templateName: State}, State>(state => state.templateName);
    return {isLoading, hasError, isFulfilled};
};

export const useTemplateName = () =>
    useSelector<{templateName: State}, number | undefined>(state => state.templateName.value);
