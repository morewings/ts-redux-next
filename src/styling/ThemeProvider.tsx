import { ThemeProvider as ThemeProviderGeneric, StyleSheetManager } from 'styled-components';
import type { FC, ReactNode } from 'react';
import isPropValid from '@emotion/is-prop-valid';

import type { theme as themeObject } from './theme';
import { shouldForwardProp } from './shouldForwardProp';

export const ThemeProvider: FC<{ children: ReactNode; theme: typeof themeObject }> = ({ children, theme }) => {
    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <ThemeProviderGeneric theme={theme}>{children}</ThemeProviderGeneric>
        </StyleSheetManager>
    );
};
