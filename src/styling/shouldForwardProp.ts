import isPropValid from '@emotion/is-prop-valid';

// This implements the default behavior from styled-components v5
export const shouldForwardProp = (propName: string, target: unknown) => {
    if (typeof target === 'string') {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
};
