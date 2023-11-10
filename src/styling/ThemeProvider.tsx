import { ThemeProvider as ThemeProviderGeneric, StyleSheetManager } from 'styled-components';
import type { FC, ReactNode } from 'react';
import isPropValid from '@emotion/is-prop-valid';

import type { theme as themeObject } from '@/styling/theme';

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName: string, target: unknown) {
    if (typeof target === 'string') {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
}

export const ThemeProvider: FC<{ children: ReactNode; theme: typeof themeObject }> = ({ children, theme }) => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <ThemeProviderGeneric theme={theme}>{children}</ThemeProviderGeneric>
        </StyleSheetManager>
    );
};
